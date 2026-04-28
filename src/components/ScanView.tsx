import { useEffect } from 'react'
import { useBarcodeScanner } from '../hooks/useBarcodeScanner'

interface ScanViewProps {
   onScan: (barcode: string, format: string) => void
}

export default function ScanView({ onScan }: ScanViewProps) {
   const { error, videoRef, startScanning, stopScanning } = useBarcodeScanner(
      (barcode, format) => {
         onScan(barcode, format)
      }
   )

   useEffect(() => {
      startScanning()
      return () => stopScanning()
   }, [startScanning, stopScanning])

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

         {/* Bottom overlay bar */}
         <div
            className="absolute bottom-0 left-0 right-0 px-6 py-8 flex flex-col items-center justify-center"
            style={{
               background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
            }}
         >
            {error ? (
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
