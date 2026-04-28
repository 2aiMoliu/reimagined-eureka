export interface ScanRecord {
   id: string
   barcode: string
   format: string
   timestamp: number
}

export type View = 'scan' | 'history' | 'detail'

export interface AppState {
   view: View
   selectedId: string | null
}
