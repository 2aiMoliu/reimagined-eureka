import { useState } from 'react'
import SumiDesign from './designs/SumiDesign'
import ZenDesign from './designs/ZenDesign'
import SwissDesign from './designs/SwissDesign'
import ClayDesign from './designs/ClayDesign'
import FrostDesign from './designs/FrostDesign'

type DesignKey = 'sumi' | 'zen' | 'swiss' | 'clay' | 'frost'

const designs: { key: DesignKey; label: string; Component: React.FC }[] = [
  { key: 'sumi', label: '墨 Sumi', Component: SumiDesign },
  { key: 'zen', label: '枯 Zen', Component: ZenDesign },
  { key: 'swiss', label: 'Swiss', Component: SwissDesign },
  { key: 'clay', label: 'Clay', Component: ClayDesign },
  { key: 'frost', label: 'Frost', Component: FrostDesign },
]

export default function App() {
  const [active, setActive] = useState<DesignKey>('sumi')
  const { Component } = designs.find(d => d.key === active)!

  return (
    <>
      <div className={`design-${active} h-dvh overflow-hidden`}>
        <Component />
      </div>
      <nav className="design-switcher">
        {designs.map(d => (
          <button
            key={d.key}
            data-design={d.key}
            title={d.label}
            className={active === d.key ? 'active' : ''}
            onClick={() => setActive(d.key)}
          />
        ))}
      </nav>
    </>
  )
}
