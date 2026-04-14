import './style.css'

// Password visibility toggle
const pwdToggle = document.getElementById('pwdToggle')
const pwdInput = document.getElementById('pwdInput') as HTMLInputElement | null

if (pwdToggle && pwdInput) {
  pwdToggle.addEventListener('click', () => {
    const isPassword = pwdInput.type === 'password'
    pwdInput.type = isPassword ? 'text' : 'password'
  })
}

// Login button handler
const loginBtn = document.getElementById('loginBtn')

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const span = loginBtn.querySelector('span')
    if (span) {
      span.textContent = 'ログイン中...'
      setTimeout(() => {
        span.textContent = 'ログイン'
      }, 2000)
    }
  })
}
