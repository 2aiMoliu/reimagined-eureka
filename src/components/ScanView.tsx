import { useEffect, useState, useRef } from 'react'
import { useBarcodeScanner } from '../hooks/useBarcodeScanner'

interface ScanViewProps {
   onScan: (barcode: string, format: string) => void
   lastResult: { barcode: string; format: string } | null
}

export default function ScanView({ onScan, lastResult }: ScanViewProps) {
   const [showResult, setShowResult] = useState(false)
   const flashRef = useRef<HTMLDivElement>(null)

   const { error, videoRef, startScanning, stopScanning } = useBarcodeScanner(
      (barcode, format) => {
         onScan(barcode, format)
         setShowResult(true)
         // Flash animation
         if (flashRef.current) {
            flashRef.current.style.opacity = '1'
            setTimeout(() => {
               if (flashRef.current) flashRef.current.style.opacity = '0'
            }, 200)
         }
         // Hide result after 3 seconds
         setTimeout(() => setShowResult(false), 3000)
      }
   )

   useEffect(() => {
      startScanning()
      return () => stopScanning()
   }, [startScanning, stopScanning])

   const handleScanAgain = () => {
      setShowResult(false)
      startScanning()
   }

   return (
      <div className="relative w-full h-full">
         {/* Camera video */}
         <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            muted
         />

         {/* Viewfinder overlay */}
         <div className="viewfinder-corners">
            <div className="viewfinder-corner-bl" />
            <div className="viewfinder-corner-br" />
         </div>
         <div className="scan-line" />

         {/* Flash overlay */}
         <div
            ref={flashRef}
            className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-200"
            style={{ opacity: 0 }}
         />

         {/* Bottom overlay bar */}
         <div
            className="absolute bottom-0 left-0 right-0 px-6 py-8 flex flex-col items-center justify-center"
            style={{
               background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
            }}
         >
            {showResult && lastResult ? (
               <div className="text-center animate-fade-in">
                  <p className="text-white text-2xl font-mono mb-2">{lastResult.barcode}</p>
                  <p className="text-white/80 text-sm mb-4 capitalize">{lastResult.format.replace(/_/g, ' ')}</p>
                  <button
                     onClick={handleScanAgain}
                     className="px-6 py-2 rounded-xl text-white text-sm font-medium"
                     style={{ backgroundColor: 'var(--accent-color)' }}
                  >
                     Scan Again
                  </button>
               </div>
            ) : error ? (
               <div className="text-center">
                  <p className="text-red-400 text-sm">{error}</p>
               </div>
            ) : (
               <p className="text-white/90 text-sm">Point camera at barcode</p>
            )}
         </div>
      </div>
   )
}
