import { useState, useEffect, useCallback } from 'react'
import type { ScanRecord } from '../types'

const STORAGE_KEY = 'scan_history'

function loadRecords(): ScanRecord[] {
   try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
   } catch {
      return []
   }
}

function saveRecords(records: ScanRecord[]): void {
   localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export function useScanHistory() {
   const [records, setRecords] = useState<ScanRecord[]>(loadRecords)

   useEffect(() => {
      saveRecords(records)
   }, [records])

   const addRecord = useCallback((barcode: string, format: string) => {
      const record: ScanRecord = {
         id: crypto.randomUUID(),
         barcode,
         format,
         timestamp: Date.now(),
      }
      setRecords(prev => [record, ...prev])
      return record
   }, [])

   const deleteRecord = useCallback((id: string) => {
      setRecords(prev => prev.filter(r => r.id !== id))
   }, [])

   const getRecord = useCallback((id: string): ScanRecord | undefined => {
      return records.find(r => r.id === id)
   }, [records])

   return { records, addRecord, deleteRecord, getRecord }
}
