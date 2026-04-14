import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<!DOCTYPE html>

<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>int app — ログイン</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Noto+Sans+JP:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root {
    --bg-deep: #0a0e17;
    --bg-card: rgba(255, 255, 255, 0.04);
    --glass: rgba(255, 255, 255, 0.07);
    --glass-border: rgba(255, 255, 255, 0.12);
    --accent-warm: #f4845f;
    --accent-gold: #f6d365;
    --accent-blue: #667eea;
    --accent-mint: #43e8d8;
    --text-primary: #f0ece2;
    --text-secondary: rgba(240, 236, 226, 0.55);
    --text-muted: rgba(240, 236, 226, 0.3);
    --error: #ff6b6b;
  }

- { margin: 0; padding: 0; box-sizing: border-box; }

body {
font-family: ‘Noto Sans JP’, sans-serif;
background: var(–bg-deep);
min-height: 100vh;
overflow-x: hidden;
color: var(–text-primary);
}

/* === ANIMATED BACKGROUND === */
.bg-canvas {
position: fixed;
inset: 0;
z-index: 0;
overflow: hidden;
}

.bg-canvas::before {
content: ‘’;
position: absolute;
width: 140%;
height: 140%;
top: -20%;
left: -20%;
background:
radial-gradient(ellipse 600px 600px at 20% 30%, rgba(102, 126, 234, 0.15), transparent),
radial-gradient(ellipse 500px 500px at 75% 60%, rgba(244, 132, 95, 0.12), transparent),
radial-gradient(ellipse 400px 400px at 50% 80%, rgba(67, 232, 216, 0.08), transparent);
animation: bgDrift 20s ease-in-out infinite alternate;
}

@keyframes bgDrift {
0% { transform: translate(0, 0) rotate(0deg); }
100% { transform: translate(30px, -20px) rotate(2deg); }
}

/* Grain overlay */
.bg-canvas::after {
content: ‘’;
position: absolute;
inset: 0;
opacity: 0.03;
background-image: url(“data:image/svg+xml,%3Csvg viewBox=‘0 0 256 256’ xmlns=‘http://www.w3.org/2000/svg’%3E%3Cfilter id=‘n’%3E%3CfeTurbulence type=‘fractalNoise’ baseFrequency=‘0.9’ numOctaves=‘4’ stitchTiles=‘stitch’/%3E%3C/filter%3E%3Crect width=‘100%25’ height=‘100%25’ filter=‘url(%23n)’/%3E%3C/svg%3E”);
background-size: 128px;
}

/* Floating shapes */
.float-shape {
position: absolute;
border-radius: 50%;
filter: blur(1px);
opacity: 0;
animation: floatIn 1.5s ease-out forwards;
}

.shape-1 {
width: 8px; height: 8px;
background: var(–accent-warm);
top: 18%; left: 12%;
animation-delay: 0.5s;
animation-duration: 2s;
}
.shape-1::after {
content: ‘’;
position: absolute;
width: 100%;
height: 100%;
background: inherit;
border-radius: inherit;
animation: pulse 3s ease-in-out infinite;
}

.shape-2 {
width: 6px; height: 6px;
background: var(–accent-mint);
top: 35%; right: 18%;
animation-delay: 0.8s;
}

.shape-3 {
width: 120px; height: 120px;
border: 1px solid rgba(246, 211, 101, 0.15);
top: 60%; left: 8%;
animation-delay: 1s;
background: transparent;
border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
animation: floatIn 1.5s ease-out forwards, morphBlob 12s ease-in-out infinite;
}

.shape-4 {
width: 200px; height: 200px;
border: 1px solid rgba(102, 126, 234, 0.08);
bottom: 10%; right: 5%;
animation-delay: 1.2s;
background: transparent;
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
animation: floatIn 1.5s ease-out forwards, morphBlob2 15s ease-in-out infinite;
}

.shape-5 {
width: 4px; height: 4px;
background: var(–accent-gold);
top: 75%; left: 45%;
animation-delay: 1.5s;
}

@keyframes floatIn {
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
0%, 100% { transform: scale(1); opacity: 1; }
50% { transform: scale(2.5); opacity: 0; }
}

@keyframes morphBlob {
0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); }
50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; transform: rotate(180deg); }
}

@keyframes morphBlob2 {
0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg); }
50% { border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%; transform: rotate(-90deg); }
}

/* === LAYOUT === */
.page {
position: relative;
z-index: 1;
min-height: 100vh;
display: flex;
}

/* Left panel - Branding */
.panel-left {
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
padding: 60px 80px;
position: relative;
opacity: 0;
animation: slideRight 1s ease-out 0.3s forwards;
}

@keyframes slideRight {
from { opacity: 0; transform: translateX(-40px); }
to { opacity: 1; transform: translateX(0); }
}

.brand-badge {
display: inline-flex;
align-items: center;
gap: 8px;
background: var(–glass);
border: 1px solid var(–glass-border);
backdrop-filter: blur(20px);
padding: 8px 16px;
border-radius: 100px;
font-family: ‘Space Mono’, monospace;
font-size: 11px;
letter-spacing: 2px;
text-transform: uppercase;
color: var(–text-secondary);
margin-bottom: 40px;
width: fit-content;
}

.badge-dot {
width: 6px;
height: 6px;
border-radius: 50%;
background: var(–accent-mint);
animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
0%, 100% { opacity: 1; }
50% { opacity: 0.3; }
}

.brand-title {
font-family: ‘DM Serif Display’, serif;
font-size: clamp(48px, 6vw, 80px);
line-height: 1;
letter-spacing: -2px;
margin-bottom: 8px;
}

.brand-title .highlight {
background: linear-gradient(135deg, var(–accent-warm), var(–accent-gold));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.brand-subtitle {
font-size: 15px;
color: var(–text-secondary);
font-weight: 300;
letter-spacing: 0.5px;
margin-bottom: 48px;
max-width: 360px;
line-height: 1.7;
}

/* Stats row */
.stats-row {
display: flex;
gap: 40px;
}

.stat-item {
opacity: 0;
animation: fadeUp 0.6s ease-out forwards;
}
.stat-item:nth-child(1) { animation-delay: 1s; }
.stat-item:nth-child(2) { animation-delay: 1.15s; }
.stat-item:nth-child(3) { animation-delay: 1.3s; }

@keyframes fadeUp {
from { opacity: 0; transform: translateY(12px); }
to { opacity: 1; transform: translateY(0); }
}

.stat-num {
font-family: ‘DM Serif Display’, serif;
font-size: 28px;
color: var(–text-primary);
line-height: 1;
}

.stat-label {
font-size: 12px;
color: var(–text-muted);
margin-top: 4px;
letter-spacing: 0.5px;
}

.stat-divider {
width: 1px;
background: var(–glass-border);
align-self: stretch;
}

/* Right panel - Login form */
.panel-right {
width: 480px;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
padding: 40px;
position: relative;
}

.panel-right::before {
content: ‘’;
position: absolute;
left: 0;
top: 10%;
height: 80%;
width: 1px;
background: linear-gradient(to bottom, transparent, var(–glass-border), transparent);
}

.login-card {
width: 100%;
max-width: 380px;
opacity: 0;
animation: slideLeft 1s ease-out 0.5s forwards;
}

@keyframes slideLeft {
from { opacity: 0; transform: translateX(30px); }
to { opacity: 1; transform: translateX(0); }
}

.login-header {
margin-bottom: 36px;
}

.login-header h2 {
font-family: ‘DM Serif Display’, serif;
font-size: 28px;
font-weight: 400;
letter-spacing: -0.5px;
margin-bottom: 8px;
}

.login-header p {
font-size: 13px;
color: var(–text-secondary);
font-weight: 300;
}

/* Form */
.form-group {
margin-bottom: 20px;
position: relative;
}

.form-label {
display: block;
font-size: 11px;
letter-spacing: 1.5px;
text-transform: uppercase;
color: var(–text-muted);
margin-bottom: 8px;
font-family: ‘Space Mono’, monospace;
}

.form-input {
width: 100%;
padding: 14px 16px;
background: var(–glass);
border: 1px solid var(–glass-border);
border-radius: 12px;
color: var(–text-primary);
font-family: ‘Noto Sans SC’, sans-serif;
font-size: 14px;
outline: none;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
backdrop-filter: blur(10px);
}

.form-input::placeholder {
color: var(–text-muted);
font-weight: 300;
}

.form-input:focus {
border-color: var(–accent-warm);
background: rgba(244, 132, 95, 0.05);
box-shadow: 0 0 0 3px rgba(244, 132, 95, 0.08);
}

.password-toggle {
position: absolute;
right: 14px;
bottom: 13px;
background: none;
border: none;
color: var(–text-muted);
cursor: pointer;
padding: 4px;
transition: color 0.2s;
font-size: 18px;
line-height: 1;
}

.password-toggle:hover {
color: var(–text-secondary);
}

/* Remember & Forgot */
.form-options {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 28px;
}

.checkbox-wrap {
display: flex;
align-items: center;
gap: 8px;
cursor: pointer;
font-size: 13px;
color: var(–text-secondary);
}

.checkbox-wrap input {
display: none;
}

.custom-check {
width: 16px;
height: 16px;
border: 1.5px solid var(–glass-border);
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.2s;
flex-shrink: 0;
}

.checkbox-wrap input:checked + .custom-check {
background: var(–accent-warm);
border-color: var(–accent-warm);
}

.custom-check svg {
width: 10px;
height: 10px;
opacity: 0;
transition: opacity 0.2s;
stroke: white;
stroke-width: 3;
fill: none;
}

.checkbox-wrap input:checked + .custom-check svg {
opacity: 1;
}

.forgot-link {
font-size: 13px;
color: var(–accent-warm);
text-decoration: none;
transition: opacity 0.2s;
font-weight: 500;
}

.forgot-link:hover { opacity: 0.7; }

/* Buttons */
.btn-login {
width: 100%;
padding: 15px;
border: none;
border-radius: 12px;
font-family: ‘Noto Sans JP’, sans-serif;
font-size: 15px;
font-weight: 500;
cursor: pointer;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
position: relative;
overflow: hidden;
background: linear-gradient(135deg, var(–accent-warm), #e8634b);
color: white;
letter-spacing: 0.5px;
}

.btn-login::before {
content: ‘’;
position: absolute;
inset: 0;
background: linear-gradient(135deg, var(–accent-gold), var(–accent-warm));
opacity: 0;
transition: opacity 0.4s;
}

.btn-login:hover::before { opacity: 1; }
.btn-login:hover { transform: translateY(-1px); box-shadow: 0 8px 30px rgba(244, 132, 95, 0.3); }
.btn-login:active { transform: translateY(0); }

.btn-login span {
position: relative;
z-index: 1;
}

/* Divider */
.divider {
display: flex;
align-items: center;
gap: 16px;
margin: 24px 0;
}

.divider::before,
.divider::after {
content: ‘’;
flex: 1;
height: 1px;
background: var(–glass-border);
}

.divider span {
font-size: 11px;
color: var(–text-muted);
letter-spacing: 1px;
text-transform: uppercase;
font-family: ‘Space Mono’, monospace;
}

/* Social login */
.social-row {
display: flex;
gap: 12px;
margin-bottom: 28px;
}

.btn-social {
flex: 1;
padding: 12px;
background: var(–glass);
border: 1px solid var(–glass-border);
border-radius: 12px;
color: var(–text-secondary);
cursor: pointer;
transition: all 0.3s;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
font-family: ‘Noto Sans JP’, sans-serif;
font-size: 13px;
backdrop-filter: blur(10px);
}

.btn-social:hover {
border-color: var(–text-muted);
background: rgba(255, 255, 255, 0.06);
transform: translateY(-1px);
}

.btn-social svg {
width: 18px;
height: 18px;
}

/* Register link */
.register-prompt {
text-align: center;
font-size: 13px;
color: var(–text-secondary);
}

.register-prompt a {
color: var(–accent-mint);
text-decoration: none;
font-weight: 500;
transition: opacity 0.2s;
}

.register-prompt a:hover { opacity: 0.7; }

/* Footer tagline */
.footer-tag {
position: absolute;
bottom: 30px;
left: 80px;
display: flex;
align-items: center;
gap: 10px;
font-size: 11px;
color: var(–text-muted);
font-family: ‘Space Mono’, monospace;
letter-spacing: 1px;
opacity: 0;
animation: fadeUp 0.6s ease-out 1.5s forwards;
}

.footer-tag::before {
content: ‘’;
width: 24px;
height: 1px;
background: var(–text-muted);
}

/* === RESPONSIVE === */
@media (max-width: 900px) {
.page { flex-direction: column; }
.panel-left {
padding: 40px 32px;
min-height: auto;
}
.panel-right {
width: 100%;
min-height: auto;
padding: 20px 32px 60px;
}
.panel-right::before { display: none; }
.brand-title { font-size: 42px; }
.stats-row { gap: 24px; }
.footer-tag { display: none; }
.shape-3, .shape-4 { display: none; }
}

@media (max-width: 480px) {
.panel-left { padding: 32px 24px; }
.panel-right { padding: 16px 24px 48px; }
.brand-title { font-size: 36px; }
.stats-row { gap: 16px; }
.stat-num { font-size: 22px; }
.social-row { flex-direction: column; }
}
</style>

</head>
<body>

<!-- Background -->

<div class="bg-canvas">
  <div class="float-shape shape-1"></div>
  <div class="float-shape shape-2"></div>
  <div class="float-shape shape-3"></div>
  <div class="float-shape shape-4"></div>
  <div class="float-shape shape-5"></div>
</div>

<div class="page">
  <!-- Left: Branding -->
  <div class="panel-left">
    <div class="brand-badge">
      <span class="badge-dot"></span>
      実習体験共有プラットフォーム
    </div>


<h1 class="brand-title">
  <span class="highlight">int</span> app
</h1>
<p class="brand-subtitle">
  すべてのインターン経験をつなぎ、リアルな体験をシェア。迷わないインターン生活を。
</p>

<div class="stats-row">
  <div class="stat-item">
    <div class="stat-num">12K+</div>
    <div class="stat-label">インターン体験</div>
  </div>
  <div class="stat-divider"></div>
  <div class="stat-item">
    <div class="stat-num">860</div>
    <div class="stat-label">提携企業</div>
  </div>
  <div class="stat-divider"></div>
  <div class="stat-item">
    <div class="stat-num">50K+</div>
    <div class="stat-label">アクティブ学生</div>
  </div>
</div>

<div class="footer-tag">int app © 2026</div>


  </div>

  <!-- Right: Login -->

  <div class="panel-right">
    <div class="login-card">
      <div class="login-header">
        <h2>おかえりなさい</h2>
        <p>アカウントにログインして、インターンの世界を探索しよう</p>
      </div>


  <div class="form-group">
    <label class="form-label">メール / 電話番号</label>
    <input type="text" class="form-input" placeholder="メールアドレスまたは電話番号を入力">
  </div>

  <div class="form-group">
    <label class="form-label">パスワード</label>
    <input type="password" class="form-input" id="pwdInput" placeholder="パスワードを入力" style="padding-right: 44px;">
    <button class="password-toggle" onclick="togglePwd()" id="pwdToggle" aria-label="パスワード表示">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    </button>
  </div>

  <div class="form-options">
    <label class="checkbox-wrap">
      <input type="checkbox">
      <span class="custom-check">
        <svg viewBox="0 0 12 12"><polyline points="2 6 5 9 10 3"/></svg>
      </span>
      ログイン状態を保持
    </label>
    <a href="#" class="forgot-link">パスワードを忘れた方</a>
  </div>

  <button class="btn-login" onclick="handleLogin()">
    <span>ログイン</span>
  </button>

  <div class="divider"><span>または</span></div>

  <div class="social-row">
    <button class="btn-social">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
      GitHub
    </button>
    <button class="btn-social">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.534c0 2.382 1.274 4.607 3.478 6.128-.204.706-.84 2.758-.963 3.186-.153.535.196.527.413.384.17-.112 2.7-1.84 3.808-2.593.625.09 1.27.136 1.955.136 4.8 0 8.691-3.288 8.691-7.241S13.491 2.188 8.691 2.188zM24 14.466c0-3.22-2.928-5.908-6.762-6.558.038.352.058.71.058 1.072 0 4.84-4.604 8.741-10.218 8.741-.158 0-.314-.004-.47-.01C8.058 19.794 10.782 21 13.822 21c.573 0 1.11-.039 1.634-.113.927.63 3.04 2.072 3.183 2.166.181.119.473.126.345-.321-.103-.358-.635-2.073-.805-2.663C20.076 18.59 24 16.62 24 14.466z"/></svg>
      LINE
    </button>
  </div>

  <p class="register-prompt">
    アカウントをお持ちでない方は <a href="#">新規登録</a>
  </p>
</div>


  </div>
</div>

<script>
  function togglePwd() {
    const input = document.getElementById('pwdInput');
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
  }

  function handleLogin() {
    const btn = document.querySelector('.btn-login span');
    btn.textContent = 'ログイン中...';
    setTimeout(() => {
      btn.textContent = 'ログイン';
    }, 2000);
  }
</script>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
