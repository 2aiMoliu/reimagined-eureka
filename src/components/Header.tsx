import type { View } from '../types'

interface HeaderProps {
   currentView: View
   onNavigate: (view: View) => void
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
   return (
      <header
         className="fixed top-0 left-0 right-0 z-10 h-12 flex items-center px-4"
         style={{
            backgroundColor: 'var(--surface-color)',
            borderBottom: '1px solid var(--border-color)',
         }}
      >
         {currentView === 'detail' ? (
            <>
               <button
                  onClick={() => onNavigate('history')}
                  className="p-1 -ml-1"
                  style={{ color: 'var(--text-primary-color)' }}
                  aria-label="Back to history"
               >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
               </button>
               <span className="ml-2 text-base tracking-tight" style={{ color: 'var(--text-primary-color)' }}>
                  Scan Details
               </span>
            </>
         ) : (
            <>
               <h1 className="text-base tracking-tight" style={{ color: 'var(--text-primary-color)' }}>
                  ScanDB
               </h1>
               <div className="ml-auto">
                  <button
                     onClick={() => onNavigate(currentView === 'scan' ? 'history' : 'scan')}
                     className="p-1"
                     style={{ color: 'var(--text-primary-color)' }}
                     aria-label={currentView === 'scan' ? 'View history' : 'Start scanning'}
                  >
                     {currentView === 'scan' ? (
                        // History icon
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <circle cx="12" cy="12" r="3" />
                           <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg>
                     ) : (
                        // Scan icon
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                           <path d="M4 6h2M4 12h3M4 18h2M18 6h2M18 18h2M9 6h6M9 18h6" />
                        </svg>
                     )}
                  </button>
               </div>
            </>
         )}
      </header>
   )
}
