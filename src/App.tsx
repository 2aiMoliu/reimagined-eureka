import { useState, useCallback } from 'react'
import type { View } from './types'
import { useScanHistory } from './hooks/useScanHistory'
import Header from './components/Header'
import ScanView from './components/ScanView'
import HistoryView from './components/HistoryView'
import ScanDetail from './components/ScanDetail'

export default function App() {
   const [view, setView] = useState<View>('scan')
   const [selectedId, setSelectedId] = useState<string | null>(null)
   const [lastScanResult, setLastScanResult] = useState<{ barcode: string; format: string } | null>(null)
   const { records, addRecord, deleteRecord, getRecord } = useScanHistory()

   const handleScan = useCallback((barcode: string, format: string) => {
      addRecord(barcode, format)
      setLastScanResult({ barcode, format })
   }, [addRecord])

   const handleSelect = useCallback((id: string) => {
      setSelectedId(id)
      setView('detail')
   }, [])

   const handleDelete = useCallback((id: string) => {
      deleteRecord(id)
      if (view === 'detail') {
         setView('history')
         setSelectedId(null)
      }
   }, [deleteRecord, view])

   const handleNavigate = useCallback((v: View) => {
      setView(v)
      if (v !== 'detail') setSelectedId(null)
   }, [])

   const selectedRecord = selectedId ? getRecord(selectedId) : undefined

   return (
      <div className="design-sumi h-dvh flex flex-col">
         <Header currentView={view} onNavigate={handleNavigate} />
         <main className="flex-1 pt-12 overflow-hidden">
            {view === 'scan' && (
               <ScanView onScan={handleScan} lastResult={lastScanResult} />
            )}
            {view === 'history' && (
               <HistoryView records={records} onSelect={handleSelect} onDelete={handleDelete} />
            )}
            {view === 'detail' && selectedRecord && (
               <ScanDetail record={selectedRecord} onDelete={handleDelete} />
            )}
         </main>
      </div>
   )
}
