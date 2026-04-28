import type { ScanRecord } from '../types'

interface ScanDetailProps {
   record: ScanRecord
   onDelete: (id: string) => void
}

function formatDateTime(timestamp: number): string {
   const date = new Date(timestamp)
   return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
   })
}

export default function ScanDetail({ record, onDelete }: ScanDetailProps) {
   const handleSearch = () => {
      const url = `https://www.google.com/search?q=${encodeURIComponent(record.barcode)}`
      window.open(url, '_blank', 'noopener,noreferrer')
   }

   return (
      <div className="h-full flex flex-col">
         {/* Detail card */}
         <div className="flex-1 flex items-center justify-center px-6 py-4">
            <div
               className="w-full max-w-md rounded-2xl px-6 py-8 text-center"
               style={{
                  backgroundColor: 'var(--surface-color)',
                  border: '1px solid var(--border-color)',
               }}
            >
               <p
                  className="font-mono text-2xl break-all mb-3"
                  style={{ color: 'var(--text-primary-color)' }}
               >
                  {record.barcode}
               </p>
               <p
                  className="text-xs capitalize mb-2"
                  style={{ color: 'var(--text-muted-color)' }}
               >
                  {record.format.replace(/_/g, ' ')}
               </p>
               <p
                  className="text-sm"
                  style={{ color: 'var(--text-secondary-color)' }}
               >
                  {formatDateTime(record.timestamp)}
               </p>
            </div>
         </div>

         {/* Action buttons */}
         <div className="px-4 pb-6 space-y-3">
            <button
               onClick={handleSearch}
               className="w-full py-3 rounded-xl text-white font-medium"
               style={{ backgroundColor: 'var(--accent-color)' }}
            >
               Search on Google
            </button>
            <button
               onClick={() => onDelete(record.id)}
               className="w-full py-3 rounded-xl font-medium"
               style={{
                  backgroundColor: 'var(--surface-color)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted-color)',
               }}
            >
               Delete Scan
            </button>
         </div>
      </div>
   )
}
