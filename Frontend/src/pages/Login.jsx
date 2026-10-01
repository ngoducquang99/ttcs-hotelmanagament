import './Login.css'

function Login() {
  function preventSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <header className="login-brand">
          <div className="brand-icon" aria-hidden="true">H</div>
          <h1 id="login-title">HOTEL MANAGER</h1>
          <p>Hệ thống quản lý khách sạn</p>
        </header>

        <form className="login-form" onSubmit={preventSubmit}>
          <div className="login-field">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Nhập tên đăng nhập"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Mật khẩu</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <button className="login-submit" type="submit">Đăng nhập</button>
        </form>

        <p className="login-hint">Vui lòng nhập thông tin đăng nhập được cấp.</p>
      </section>
    </main>
  )
}

export default Login
