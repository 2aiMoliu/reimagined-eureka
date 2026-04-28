import { useState, useRef, useCallback, useEffect } from 'react'

// Polyfill BarcodeDetector for browsers that don't have it natively
import '@sec-ant/barcode-detector'

interface UseBarcodeScanner {
   isActive: boolean
   error: string | null
   videoRef: React.RefObject<HTMLVideoElement | null>
   startScanning: () => Promise<void>
   stopScanning: () => void
}

const SUPPORTED_FORMATS = [
   'ean_13', 'ean_8', 'upc_a', 'upc_e',
   'code_128', 'code_39', 'code_93',
   'qr_code', 'data_matrix', 'itf',
] as const

export function useBarcodeScanner(onDetected: (barcode: string, format: string) => void): UseBarcodeScanner {
   const [isActive, setIsActive] = useState(false)
   const [error, setError] = useState<string | null>(null)
   const videoRef = useRef<HTMLVideoElement | null>(null)
   const streamRef = useRef<MediaStream | null>(null)
   const rafRef = useRef<number>(0)
   const detectorRef = useRef<BarcodeDetector | null>(null)
   const lastDetectedRef = useRef<string>('')
   const cooldownRef = useRef<number>(0)
   const isActiveRef = useRef(false)
   const onDetectedRef = useRef(onDetected)
   onDetectedRef.current = onDetected

   const detect = useCallback(async () => {
      if (!detectorRef.current || !videoRef.current) return

      try {
         const barcodes = await detectorRef.current.detect(videoRef.current)
         if (barcodes.length > 0) {
            const { rawValue, format } = barcodes[0]
            const now = Date.now()

            // Debounce: ignore same barcode within 3 seconds
            if (rawValue && rawValue !== lastDetectedRef.current && now - cooldownRef.current > 3000) {
               lastDetectedRef.current = rawValue
               cooldownRef.current = now
               onDetectedRef.current(rawValue, format)

               // Haptic feedback if available
               if ('vibrate' in navigator) {
                  navigator.vibrate(100)
               }
            }
         }
      } catch {
         // Frame detection failed, continue scanning
      }

      if (isActiveRef.current) {
         rafRef.current = requestAnimationFrame(detect)
      }
   }, [])

   const startScanning = useCallback(async () => {
      setError(null)
      lastDetectedRef.current = ''
      cooldownRef.current = 0

      // Check BarcodeDetector support (polyfilled or native)
      if (typeof BarcodeDetector === 'undefined') {
         setError('Barcode scanning is not supported in this browser.')
         return
      }

      try {
         const detector = new BarcodeDetector({
            formats: [...SUPPORTED_FORMATS],
         })
         detectorRef.current = detector

         const stream = await navigator.mediaDevices.getUserMedia({
            video: {
               facingMode: 'environment',
               width: { ideal: 1280 },
               height: { ideal: 720 },
            },
         })
         streamRef.current = stream

         if (videoRef.current) {
            videoRef.current.srcObject = stream
            await videoRef.current.play()
         }

         isActiveRef.current = true
         setIsActive(true)
         rafRef.current = requestAnimationFrame(detect)
      } catch (err) {
         const msg = err instanceof DOMException && err.name === 'NotAllowedError'
            ? 'Camera access denied. Please allow camera permissions.'
            : err instanceof DOMException && err.name === 'NotFoundError'
               ? 'No camera found on this device.'
               : 'Failed to start camera.'
         setError(msg)
      }
   }, [])

   const stopScanning = useCallback(() => {
      cancelAnimationFrame(rafRef.current)
      isActiveRef.current = false
      setIsActive(false)

      if (streamRef.current) {
         streamRef.current.getTracks().forEach(t => t.stop())
         streamRef.current = null
      }
      if (videoRef.current) {
         videoRef.current.srcObject = null
      }
   }, [])

   // Cleanup on unmount
   useEffect(() => {
      return () => {
         cancelAnimationFrame(rafRef.current)
         if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop())
         }
      }
   }, [])

   return {
      isActive,
      error,
      videoRef,
      startScanning,
      stopScanning,
   }
}
