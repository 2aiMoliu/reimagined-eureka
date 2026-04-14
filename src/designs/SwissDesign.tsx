import { useState } from 'react'

export default function SwissDesign() {
  const [showPwd, setShowPwd] = useState(false)

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative animate-fade-in"
      style={{ background: 'var(--bg-color)', color: 'var(--text-primary-color)' }}>

      {/* Red accent bar — vertical on desktop, horizontal on mobile */}
      <div className="hidden md:block fixed left-0 top-0 bottom-0 w-2" style={{ background: 'var(--accent-color)' }} />
      <div className="md:hidden h-2 w-full" style={{ background: 'var(--accent-color)' }} />

      {/* Left — Branding */}
      <div className="flex-1 flex flex-col justify-center p-10 md:p-[60px_80px] md:pl-[80px]">
        <h1 className="leading-none mb-0">
          <span className="text-[clamp(48px,10vw,120px)] font-black tracking-[-3px] block">int</span>
          <span className="text-[clamp(24px,4vw,48px)] font-light tracking-[8px] uppercase block mt-1" style={{ color: 'var(--text-muted-color)' }}>app</span>
        </h1>

        {/* Red line */}
        <div className="w-16 h-1 my-8" style={{ background: 'var(--accent-color)' }} />

        <p className="text-[11px] tracking-[3px] uppercase mb-2" style={{ color: 'var(--text-muted-color)' }}>
          Intern Experience Platform
        </p>
        <p className="text-[13px]" style={{ color: 'var(--text-muted-color)' }}>
          実習体験共有プラットフォーム
        </p>
      </div>

      {/* Right — Login Form */}
      <div className="w-full md:w-[440px] min-h-screen flex items-center justify-center p-8 md:p-10"
        style={{ borderLeft: '1px solid var(--border-color)' }}>
        <div className="w-full max-w-[340px]">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-[24px] font-black tracking-[-0.5px] mb-1">ログイン</h2>
            <div className="h-px w-full" style={{ background: 'var(--text-primary-color)' }} />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-[10px] tracking-[2px] uppercase mb-2 font-bold" style={{ color: 'var(--text-muted-color)' }}>
              メール / 電話番号
            </label>
            <input
              type="text"
              placeholder="メールアドレスまたは電話番号"
              className="w-full px-0 py-3 text-sm border-0 border-b bg-transparent"
              style={{
                borderBottom: '1px solid var(--border-color)',
                color: 'var(--text-primary-color)',
              }}
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-[10px] tracking-[2px] uppercase mb-2 font-bold" style={{ color: 'var(--text-muted-color)' }}>
              パスワード
            </label>
            <input
              type={showPwd ? 'text' : 'password'}
              placeholder="パスワードを入力"
              className="w-full px-0 py-3 pr-10 text-sm border-0 border-b bg-transparent"
              style={{
                borderBottom: '1px solid var(--border-color)',
                color: 'var(--text-primary-color)',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPwd(v => !v)}
              className="absolute right-0 bottom-3 bg-transparent border-none cursor-pointer p-1"
              style={{ color: 'var(--text-muted-color)' }}
              aria-label="パスワード表示"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center mb-8">
            <label className="flex items-center gap-2 cursor-pointer text-[12px]" style={{ color: 'var(--text-secondary-color)' }}>
              <input type="checkbox" className="w-4 h-4 accent-[var(--accent-color)]" />
              ログイン状態を保持
            </label>
            <a href="#" className="text-[12px] no-underline font-bold" style={{ color: 'var(--accent-color)' }}>
              パスワードを忘れた方
            </a>
          </div>

          {/* Login Button */}
          <button
            className="w-full py-3.5 border-none text-[14px] font-bold tracking-[1px] uppercase cursor-pointer"
            style={{
              background: 'var(--accent-color)',
              color: 'var(--btn-text-color)',
            }}
          >
            ログイン
          </button>

          {/* Divider */}
          <div className="flex justify-center my-6">
            <span className="text-[14px]" style={{ color: 'var(--text-muted-color)' }}>—</span>
          </div>

          {/* Social */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 py-3 text-[12px] cursor-pointer flex items-center justify-center gap-2 font-bold tracking-[0.5px]"
              style={{ background: 'transparent', border: '2px solid var(--text-primary-color)', color: 'var(--text-primary-color)' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </button>
            <button className="flex-1 py-3 text-[12px] cursor-pointer flex items-center justify-center gap-2 font-bold tracking-[0.5px]"
              style={{ background: 'transparent', border: '2px solid var(--text-primary-color)', color: 'var(--text-primary-color)' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.534c0 2.382 1.274 4.607 3.478 6.128-.204.706-.84 2.758-.963 3.186-.153.535.196.527.413.384.17-.112 2.7-1.84 3.808-2.593.625.09 1.27.136 1.955.136 4.8 0 8.691-3.288 8.691-7.241S13.491 2.188 8.691 2.188zM24 14.466c0-3.22-2.928-5.908-6.762-6.558.038.352.058.71.058 1.072 0 4.84-4.604 8.741-10.218 8.741-.158 0-.314-.004-.47-.01C8.058 19.794 10.782 21 13.822 21c.573 0 1.11-.039 1.634-.113.927.63 3.04 2.072 3.183 2.166.181.119.473.126.345-.321-.103-.358-.635-2.073-.805-2.663C20.076 18.59 24 16.62 24 14.466z" />
              </svg>
              LINE
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-[12px]" style={{ color: 'var(--text-muted-color)' }}>
            アカウントをお持ちでない方は{' '}
            <a href="#" className="no-underline font-bold" style={{ color: 'var(--accent-color)' }}>新規登録</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="hidden md:flex absolute bottom-4 left-8 text-[10px] tracking-[2px] uppercase" style={{ color: 'var(--text-muted-color)' }}>
        int app © 2026
      </div>
    </div>
  )
}
