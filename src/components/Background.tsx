export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Radial gradient layer */}
      <div
        className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] animate-bg-drift"
        style={{
          background: [
            'radial-gradient(ellipse 600px 600px at 20% 30%, rgba(102,126,234,0.15), transparent)',
            'radial-gradient(ellipse 500px 500px at 75% 60%, rgba(244,132,95,0.12), transparent)',
            'radial-gradient(ellipse 400px 400px at 50% 80%, rgba(67,232,216,0.08), transparent)',
          ].join(','),
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '128px',
        }}
      />

      {/* Floating shapes */}
      <div className="absolute w-2 h-2 rounded-full bg-accent-warm top-[18%] left-[12%] opacity-0 animate-float-in [animation-delay:0.5s] blur-[1px]">
        <div className="absolute inset-0 rounded-full bg-accent-warm animate-pulse-dot" />
      </div>
      <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-mint top-[35%] right-[18%] opacity-0 animate-float-in [animation-delay:0.8s] blur-[1px]" />
      <div className="absolute w-[120px] h-[120px] border border-[rgba(246,211,101,0.15)] top-[60%] left-[8%] opacity-0 animate-morph-blob bg-transparent [animation-delay:1s]" />
      <div className="absolute w-[200px] h-[200px] border border-[rgba(102,126,234,0.08)] bottom-[10%] right-[5%] opacity-0 animate-morph-blob-2 bg-transparent [animation-delay:1.2s]" />
      <div className="absolute w-1 h-1 rounded-full bg-accent-gold top-[75%] left-[45%] opacity-0 animate-float-in [animation-delay:1.5s] blur-[1px]" />
    </div>
  )
}
