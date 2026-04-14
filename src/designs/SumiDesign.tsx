import { useState } from 'react'

export default function SumiDesign() {
  const [showPwd, setShowPwd] = useState(false)

  return (
    <div className="h-full flex flex-col md:flex-row animate-fade-in">
      {/* Left — Branding */}
      <div
        className="hidden md:flex flex-1 flex-col justify-center p-[60px_80px]"
        style={{ color: 'var(--text-primary-color)' }}
      >
        <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase mb-10"
          style={{ color: 'var(--text-muted-color)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-color)' }} />
          実習体験共有プラットフォーム
        </span>
        <h1 className="text-[clamp(36px,5vw,72px)] leading-none tracking-[-1px] mb-3 font-light">
          <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>int</span> app
        </h1>
        <p className="text-[15px] max-w-[340px] leading-relaxed mb-14"
          style={{ color: 'var(--text-secondary-color)' }}>
          すべてのインターン経験をつなぎ、リアルな体験をシェア。迷わないインターン生活を。
        </p>
        <div className="flex gap-8">
          {[
            { num: '12K+', label: 'インターン体験' },
            { num: '860', label: '提携企業' },
            { num: '50K+', label: 'アクティブ学生' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-8">
              <div>
                <div className="text-[22px] font-light leading-none">{s.num}</div>
                <div className="text-[11px] mt-1.5 tracking-[0.5px]"
                  style={{ color: 'var(--text-muted-color)' }}>{s.label}</div>
              </div>
              {i < 2 && <div className="w-px h-8" style={{ background: 'var(--border-color)' }} />}
            </div>
          ))}
        </div>
        <div className="mt-auto pt-12 text-[11px] tracking-[1px]"
          style={{ color: 'var(--text-muted-color)' }}>int app © 2026</div>
      </div>

      {/* Right — Login Form (full screen on mobile) */}
      <div className="w-full md:w-[420px] h-full flex items-center justify-center p-6 md:p-10"
        style={{ background: 'var(--surface-color)', borderLeft: '1px solid var(--border-color)' }}>
        <div className="w-full max-w-[340px]">
          {/* Mobile-only branding */}
          <div className="md:hidden text-center mb-5">
            <h1 className="text-[22px] tracking-[-0.5px] font-light">
              <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>int</span> app
            </h1>
            <p className="text-[10px] tracking-[1.5px] uppercase mt-0.5"
              style={{ color: 'var(--text-muted-color)' }}>
              実習体験共有プラットフォーム
            </p>
          </div>

          <div className="mb-4 md:mb-6">
            <h2 className="text-[22px] md:text-[26px] font-normal tracking-[-0.3px] mb-0.5">おかえりなさい</h2>
            <p className="text-[12px] md:text-[13px]" style={{ color: 'var(--text-muted-color)' }}>
              アカウントにログインして、インターンの世界を探索しよう
            </p>
          </div>

          {/* Email */}
          <div className="mb-3 md:mb-4">
            <label className="block text-[10px] md:text-[11px] tracking-[1px] uppercase mb-1.5"
              style={{ color: 'var(--text-muted-color)' }}>
              メール / 電話番号
            </label>
            <input type="text" placeholder="メールアドレスまたは電話番号を入力"
              className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl text-[13px] md:text-sm"
              style={{ background: 'var(--input-bg-color)', border: '1px solid var(--input-border-color)', color: 'var(--text-primary-color)' }} />
          </div>

          {/* Password */}
          <div className="mb-3 md:mb-4 relative">
            <label className="block text-[10px] md:text-[11px] tracking-[1px] uppercase mb-1.5"
              style={{ color: 'var(--text-muted-color)' }}>
              パスワード
            </label>
            <input type={showPwd ? 'text' : 'password'} placeholder="パスワードを入力"
              className="w-full px-3 py-2.5 md:px-4 md:py-3 pr-10 rounded-xl text-[13px] md:text-sm"
              style={{ background: 'var(--input-bg-color)', border: '1px solid var(--input-border-color)', color: 'var(--text-primary-color)' }} />
            <button type="button" onClick={() => setShowPwd(v => !v)}
              className="absolute right-2.5 bottom-2 bg-transparent border-none cursor-pointer p-1"
              style={{ color: 'var(--text-muted-color)' }} aria-label="パスワード表示">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center mb-4 md:mb-5">
            <label className="flex items-center gap-1.5 cursor-pointer text-[11px] md:text-[12px]"
              style={{ color: 'var(--text-secondary-color)' }}>
              <input type="checkbox" className="w-3.5 h-3.5 rounded" style={{ accentColor: 'var(--accent-color)' }} />
              保持する
            </label>
            <a href="#" className="text-[11px] md:text-[12px] no-underline font-medium"
              style={{ color: 'var(--accent-color)' }}>
              パスワードを忘れた方
            </a>
          </div>

          {/* Login */}
          <button className="w-full py-2.5 md:py-3 border-none rounded-xl text-[13px] md:text-[15px] font-medium cursor-pointer"
            style={{ background: 'var(--accent-color)', color: 'var(--btn-text-color)' }}>
            ログイン
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-3 md:my-4">
            <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            <span className="text-[10px] tracking-[1px]" style={{ color: 'var(--text-muted-color)' }}>または</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
          </div>

          {/* Social */}
          <div className="flex gap-2.5 mb-3 md:mb-4">
            <button className="flex-1 py-2.5 rounded-xl text-[11px] md:text-[13px] cursor-pointer flex items-center justify-center gap-1.5"
              style={{ background: 'var(--input-bg-color)', border: '1px solid var(--input-border-color)', color: 'var(--text-secondary-color)' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              GitHub
            </button>
            <button className="flex-1 py-2.5 rounded-xl text-[11px] md:text-[13px] cursor-pointer flex items-center justify-center gap-1.5"
              style={{ background: 'var(--input-bg-color)', border: '1px solid var(--input-border-color)', color: 'var(--text-secondary-color)' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.534c0 2.382 1.274 4.607 3.478 6.128-.204.706-.84 2.758-.963 3.186-.153.535.196.527.413.384.17-.112 2.7-1.84 3.808-2.593.625.09 1.27.136 1.955.136 4.8 0 8.691-3.288 8.691-7.241S13.491 2.188 8.691 2.188zM24 14.466c0-3.22-2.928-5.908-6.762-6.558.038.352.058.71.058 1.072 0 4.84-4.604 8.741-10.218 8.741-.158 0-.314-.004-.47-.01C8.058 19.794 10.782 21 13.822 21c.573 0 1.11-.039 1.634-.113.927.63 3.04 2.072 3.183 2.166.181.119.473.126.345-.321-.103-.358-.635-2.073-.805-2.663C20.076 18.59 24 16.62 24 14.466z" /></svg>
              LINE
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-[11px] md:text-[13px]" style={{ color: 'var(--text-muted-color)' }}>
            アカウントをお持ちでない方は{' '}
            <a href="#" className="no-underline font-medium" style={{ color: 'var(--accent-color)' }}>新規登録</a>
          </p>
        </div>
      </div>
    </div>
  )
}
