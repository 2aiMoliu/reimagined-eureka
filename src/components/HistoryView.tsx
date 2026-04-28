import type { ScanRecord } from '../types'

interface HistoryViewProps {
   records: ScanRecord[]
   onSelect: (id: string) => void
   onDelete: (id: string) => void
}

function formatTimestamp(timestamp: number): string {
   const now = Date.now()
   const diff = now - timestamp
   const seconds = Math.floor(diff / 1000)
   const minutes = Math.floor(seconds / 60)
   const hours = Math.floor(minutes / 60)
   const days = Math.floor(hours / 24)

   if (seconds < 60) return 'Just now'
   if (minutes < 60) return `${minutes} min ago`
   if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
   if (days === 1) return 'Yesterday'
   if (days < 7) return `${days} days ago`

   const date = new Date(timestamp)
   return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function HistoryView({ records, onSelect, onDelete }: HistoryViewProps) {
   if (records.length === 0) {
      return (
         <div className="flex flex-col items-center justify-center h-full px-6">
            <svg
               width="48"
               height="48"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="1.5"
               className="mb-3"
               style={{ color: 'var(--text-muted-color)' }}
            >
               <path d="M3 6h2M3 12h3M3 18h2M18 6h2M18 18h2M8 6h8M8 18h8" />
            </svg>
            <p style={{ color: 'var(--text-muted-color)' }}>No scans yet</p>
         </div>
      )
   }

   return (
      <div className="h-full overflow-y-auto px-4 pt-4 pb-6">
         <div className="space-y-3">
            {records.map((record) => (
               <div
                  key={record.id}
                  className="relative animate-fade-in rounded-xl px-4 py-3 cursor-pointer transition-colors hover:opacity-80"
                  style={{
                     backgroundColor: 'var(--surface-color)',
                     border: '1px solid var(--border-color)',
                  }}
                  onClick={() => onSelect(record.id)}
               >
                  <div className="flex items-center justify-between">
                     <div className="flex-1 min-w-0 mr-3">
                        <p
                           className="font-mono text-sm truncate mb-1"
                           style={{ color: 'var(--text-primary-color)' }}
                        >
                           {record.barcode}
                        </p>
                        <div className="flex items-center gap-2">
                           <span
                              className="text-xs capitalize"
                              style={{ color: 'var(--text-muted-color)' }}
                           >
                              {record.format.replace(/_/g, ' ')}
                           </span>
                           <span
                              className="text-xs"
                              style={{ color: 'var(--text-muted-color)' }}
                           >
                              • {formatTimestamp(record.timestamp)}
                           </span>
                        </div>
                     </div>
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="flex-shrink-0"
                        style={{ color: 'var(--text-muted-color)' }}
                     >
                        <path d="M9 18l6-6-6-6" />
                     </svg>
                  </div>
                  <button
                     onClick={(e) => {
                        e.stopPropagation()
                        onDelete(record.id)
                     }}
                     className="absolute top-3 right-3 p-1 opacity-0 hover:opacity-100 transition-opacity"
                     style={{ color: 'var(--text-muted-color)' }}
                     aria-label="Delete scan"
                  >
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                     </svg>
                  </button>
               </div>
            ))}
         </div>
      </div>
   )
}
