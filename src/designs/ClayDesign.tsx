import { useState } from 'react'

export default function ClayDesign() {
  const [showPwd, setShowPwd] = useState(false)

  return (
    <div className="h-full flex items-center justify-center p-2 md:p-6 animate-fade-in"
      style={{ background: 'var(--bg-color)', color: 'var(--text-primary-color)' }}>

      <div className="w-full max-w-5xl h-full overflow-hidden flex flex-col md:flex-row rounded-none md:rounded-2xl"
        style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

        {/* Left Panel — Clay Wall */}
        <div className="w-full md:w-[45%] p-4 md:p-12 flex flex-row md:flex-col justify-between md:justify-between items-center text-center"
          style={{ background: '#C1694F', color: '#FFFFFF' }}>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-5xl font-light mb-0 md:mb-3" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>
              int app
            </h1>
            <p className="text-[11px] md:text-[14px] opacity-90 mb-0 md:mb-4">実習体験共有プラットフォーム</p>
            <p className="text-[10px] md:text-[12px] opacity-75 max-w-[200px] leading-relaxed hidden md:block">
              すべてのインターン経験をつなぎ、リアルな体験をシェア
            </p>
          </div>

          {/* Decorative lines */}
          <div className="hidden md:flex flex-col items-center gap-2 my-8">
            <div className="w-16 h-0.5 rounded-full bg-white opacity-40" />
            <div className="w-12 h-0.5 rounded-full bg-white opacity-40" />
            <div className="w-8 h-0.5 rounded-full bg-white opacity-40" />
          </div>

          <p className="text-[9px] md:text-[11px] opacity-60">© 2026 int app</p>
        </div>

        {/* Right Panel — Form */}
        <div className="w-full md:w-[55%] p-4 md:p-12"
          style={{ background: 'var(--input-bg-color)' }}>
          <div className="max-w-[380px] mx-auto">
            <div className="mb-3 md:mb-8">
              <h2 className="text-lg md:text-3xl font-medium mb-0.5">おかえりなさい</h2>
              <p className="text-[11px] md:text-[13px]" style={{ color: 'var(--text-muted-color)' }}>アカウントにログイン</p>
            </div>

            {/* Email */}
            <div className="mb-2 md:mb-5">
              <label className="block text-[11px] md:text-[13px] font-medium mb-1 md:mb-2">メール / 電話番号</label>
              <input
                type="text"
                placeholder="メールアドレスまたは電話番号を入力"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl text-[12px] md:text-sm"
                style={{
                  background: 'var(--input-bg-color)',
                  border: '1px solid var(--input-border-color)',
                  color: 'var(--text-primary-color)',
                }}
              />
            </div>

            {/* Password */}
            <div className="mb-2 md:mb-5 relative">
              <label className="block text-[11px] md:text-[13px] font-medium mb-1 md:mb-2">パスワード</label>
              <input
                type={showPwd ? 'text' : 'password'}
                placeholder="パスワードを入力"
                className="w-full px-3 py-2 md:px-4 md:py-3 pr-10 rounded-xl text-[12px] md:text-sm"
                style={{
                  background: 'var(--input-bg-color)',
                  border: '1px solid var(--input-border-color)',
                  color: 'var(--text-primary-color)',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPwd(v => !v)}
                className="absolute right-2.5 bottom-1.5 md:bottom-3 bg-transparent border-none cursor-pointer p-1"
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
            <div className="flex justify-between items-center mb-2 md:mb-6">
              <label className="flex items-center gap-1.5 cursor-pointer text-[11px] md:text-[13px]" style={{ color: 'var(--text-muted-color)' }}>
                <input type="checkbox" className="w-3.5 h-3.5 md:w-4 md:h-4 rounded" style={{ accentColor: '#C1694F' }} />
                ログイン状態を保持
              </label>
              <a href="#" className="text-[10px] md:text-[13px] no-underline font-medium" style={{ color: 'var(--accent-color)' }}>
                パスワードを忘れた方
              </a>
            </div>

            {/* Login Button */}
            <button
              className="w-full py-2 md:py-3.5 border-none rounded-full text-[13px] md:text-[15px] font-medium cursor-pointer"
              style={{ background: 'var(--accent-color)', color: 'var(--btn-text-color)' }}
            >
              ログイン
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2 md:my-6">
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
              <span className="text-[10px] md:text-[12px]" style={{ color: 'var(--text-muted-color)' }}>または</span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            </div>

            {/* Social */}
            <div className="flex gap-2 md:gap-3 mb-2 md:mb-6">
              <button className="flex-1 py-2 md:py-3 rounded-full text-[11px] md:text-[13px] cursor-pointer flex items-center justify-center gap-1.5"
                style={{ background: 'transparent', border: '1px solid #C1694F', color: '#C1694F' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </button>
              <button className="flex-1 py-2 md:py-3 rounded-full text-[11px] md:text-[13px] cursor-pointer flex items-center justify-center gap-1.5"
                style={{ background: 'transparent', border: '1px solid #C1694F', color: '#C1694F' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.534c0 2.382 1.274 4.607 3.478 6.128-.204.706-.84 2.758-.963 3.186-.153.535.196.527.413.384.17-.112 2.7-1.84 3.808-2.593.625.09 1.27.136 1.955.136 4.8 0 8.691-3.288 8.691-7.241S13.491 2.188 8.691 2.188zM24 14.466c0-3.22-2.928-5.908-6.762-6.558.038.352.058.71.058 1.072 0 4.84-4.604 8.741-10.218 8.741-.158 0-.314-.004-.47-.01C8.058 19.794 10.782 21 13.822 21c.573 0 1.11-.039 1.634-.113.927.63 3.04 2.072 3.183 2.166.181.119.473.126.345-.321-.103-.358-.635-2.073-.805-2.663C20.076 18.59 24 16.62 24 14.466z" />
                </svg>
                LINE
              </button>
            </div>

            {/* Register */}
            <p className="text-center text-[10px] md:text-[13px]" style={{ color: 'var(--text-muted-color)' }}>
              アカウントをお持ちでない方は{' '}
              <a href="#" className="no-underline font-medium" style={{ color: '#C1694F' }}>新規登録</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
