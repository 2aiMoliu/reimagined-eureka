import { useState } from 'react'

export default function LoginForm() {
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="w-full max-w-[380px] opacity-0 animate-slide-left">
      {/* Header */}
      <div className="mb-9">
        <h2 className="font-['DM_Serif_Display'] text-[28px] font-normal tracking-[-0.5px] mb-2">
          おかえりなさい
        </h2>
        <p className="text-[13px] text-text-secondary font-light">
          アカウントにログインして、インターンの世界を探索しよう
        </p>
      </div>

      {/* Email / Phone */}
      <div className="mb-5">
        <label className="block text-[11px] tracking-[1.5px] uppercase text-text-muted mb-2 font-['Space_Mono']">
          メール / 電話番号
        </label>
        <input
          type="text"
          placeholder="メールアドレスまたは電話番号を入力"
          className="w-full px-4 py-3.5 bg-glass border border-glass-border rounded-xl text-text-primary font-['Noto_Sans_JP'] text-sm outline-none backdrop-blur-[10px] transition-all duration-300 placeholder:text-text-muted placeholder:font-light focus:border-accent-warm focus:bg-[rgba(244,132,95,0.05)] focus:shadow-[0_0_0_3px_rgba(244,132,95,0.08)]"
        />
      </div>

      {/* Password */}
      <div className="mb-5 relative">
        <label className="block text-[11px] tracking-[1.5px] uppercase text-text-muted mb-2 font-['Space_Mono']">
          パスワード
        </label>
        <input
          type={showPwd ? 'text' : 'password'}
          placeholder="パスワードを入力"
          className="w-full px-4 py-3.5 pr-11 bg-glass border border-glass-border rounded-xl text-text-primary font-['Noto_Sans_JP'] text-sm outline-none backdrop-blur-[10px] transition-all duration-300 placeholder:text-text-muted placeholder:font-light focus:border-accent-warm focus:bg-[rgba(244,132,95,0.05)] focus:shadow-[0_0_0_3px_rgba(244,132,95,0.08)]"
        />
        <button
          type="button"
          onClick={() => setShowPwd(v => !v)}
          className="absolute right-3.5 bottom-3.5 bg-transparent border-none text-text-muted cursor-pointer p-1 transition-colors hover:text-text-secondary"
          aria-label="パスワード表示"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>

      {/* Options */}
      <div className="flex justify-between items-center mb-7">
        <label className="flex items-center gap-2 cursor-pointer text-[13px] text-text-secondary">
          <input type="checkbox" className="hidden peer" />
          <span className="w-4 h-4 border-[1.5px] border-glass-border rounded flex items-center justify-center transition-all peer-checked:bg-accent-warm peer-checked:border-accent-warm">
            <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 opacity-0 peer-checked:opacity-100 transition-opacity" stroke="white" strokeWidth="3" fill="none">
              <polyline points="2 6 5 9 10 3" />
            </svg>
          </span>
          ログイン状態を保持
        </label>
        <a href="#" className="text-[13px] text-accent-warm no-underline font-medium transition-opacity hover:opacity-70">
          パスワードを忘れた方
        </a>
      </div>

      {/* Login button */}
      <button
        onClick={handleLogin}
        className="w-full py-[15px] border-none rounded-xl font-['Noto_Sans_JP'] text-[15px] font-medium cursor-pointer transition-all duration-400 relative overflow-hidden bg-gradient-to-br from-accent-warm to-[#e8634b] text-white tracking-[0.5px] hover:-translate-y-[1px] hover:shadow-[0_8px_30px_rgba(244,132,95,0.3)] active:translate-y-0 group"
      >
        <span className="relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent-gold before:to-accent-warm before:opacity-0 before:transition-opacity before:duration-400 hover:before:opacity-100" />
        {loading ? 'ログイン中...' : 'ログイン'}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-glass-border" />
        <span className="text-[11px] text-text-muted tracking-[1px] uppercase font-['Space_Mono']">または</span>
        <div className="flex-1 h-px bg-glass-border" />
      </div>

      {/* Social */}
      <div className="flex gap-3 mb-7">
        <button className="flex-1 py-3 bg-glass border border-glass-border rounded-xl text-text-secondary cursor-pointer transition-all flex items-center justify-center gap-2 font-['Noto_Sans_JP'] text-[13px] backdrop-blur-[10px] hover:border-text-muted hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-[1px]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          GitHub
        </button>
        <button className="flex-1 py-3 bg-glass border border-glass-border rounded-xl text-text-secondary cursor-pointer transition-all flex items-center justify-center gap-2 font-['Noto_Sans_JP'] text-[13px] backdrop-blur-[10px] hover:border-text-muted hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-[1px]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.534c0 2.382 1.274 4.607 3.478 6.128-.204.706-.84 2.758-.963 3.186-.153.535.196.527.413.384.17-.112 2.7-1.84 3.808-2.593.625.09 1.27.136 1.955.136 4.8 0 8.691-3.288 8.691-7.241S13.491 2.188 8.691 2.188zM24 14.466c0-3.22-2.928-5.908-6.762-6.558.038.352.058.71.058 1.072 0 4.84-4.604 8.741-10.218 8.741-.158 0-.314-.004-.47-.01C8.058 19.794 10.782 21 13.822 21c.573 0 1.11-.039 1.634-.113.927.63 3.04 2.072 3.183 2.166.181.119.473.126.345-.321-.103-.358-.635-2.073-.805-2.663C20.076 18.59 24 16.62 24 14.466z" />
          </svg>
          LINE
        </button>
      </div>

      {/* Register */}
      <p className="text-center text-[13px] text-text-secondary">
        アカウントをお持ちでない方は <a href="#" className="text-accent-mint no-underline font-medium hover:opacity-70">新規登録</a>
      </p>
    </div>
  )
}
