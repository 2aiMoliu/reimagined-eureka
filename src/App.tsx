import Background from './components/Background'
import LoginForm from './components/LoginForm'

export default function App() {
  return (
    <div className="font-['Noto_Sans_JP'] bg-bg-deep min-h-screen overflow-x-hidden text-text-primary">
      <Background />

      <div className="relative z-[1] min-h-screen flex flex-col md:flex-row">
        {/* Left panel — Branding */}
        <div className="flex-1 flex flex-col justify-center p-10 md:p-[60px_80px] relative opacity-0 animate-slide-right">
          <div className="inline-flex items-center gap-2 bg-glass border border-glass-border backdrop-blur-[20px] px-4 py-2 rounded-full font-['Space_Mono'] text-[11px] tracking-[2px] uppercase text-text-secondary mb-10 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-blink" />
            実習体験共有プラットフォーム
          </div>

          <h1 className="font-['DM_Serif_Display'] text-[clamp(36px,6vw,80px)] leading-none tracking-[-2px] mb-2">
            <span className="bg-gradient-to-br from-accent-warm to-accent-gold bg-clip-text text-transparent">int</span> app
          </h1>

          <p className="text-[15px] text-text-secondary font-light tracking-[0.5px] mb-12 max-w-[360px] leading-relaxed">
            すべてのインターン経験をつなぎ、リアルな体験をシェア。迷わないインターン生活を。
          </p>

          <div className="flex gap-6 md:gap-10">
            {[
              { num: '12K+', label: 'インターン体験', delay: '1s' },
              { num: '860', label: '提携企業', delay: '1.15s' },
              { num: '50K+', label: 'アクティブ学生', delay: '1.3s' },
            ].map((s, i) => (
              <div key={i} className="flex items-stretch gap-6 md:gap-10">
                <div className="opacity-0 animate-fade-up" style={{ animationDelay: s.delay }}>
                  <div className="font-['DM_Serif_Display'] text-[22px] md:text-[28px] text-text-primary leading-none">{s.num}</div>
                  <div className="text-xs text-text-muted mt-1 tracking-[0.5px]">{s.label}</div>
                </div>
                {i < 2 && <div className="w-px bg-glass-border" />}
              </div>
            ))}
          </div>

          <div className="hidden md:flex absolute bottom-[30px] left-[80px] items-center gap-2.5 text-[11px] text-text-muted font-['Space_Mono'] tracking-[1px] opacity-0 animate-fade-up [animation-delay:1.5s]">
            <div className="w-6 h-px bg-text-muted" />
            int app © 2026
          </div>
        </div>

        {/* Right panel — Login */}
        <div className="w-full md:w-[480px] min-h-screen flex items-center justify-center p-10 md:p-10 relative
          before:content-[''] before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-px before:bg-gradient-to-b before:from-transparent before:via-glass-border before:to-transparent">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
