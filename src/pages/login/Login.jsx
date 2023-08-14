import './login.css';

export default function Login() {
  return (
    <div className='login'>
      <div className="login-wrapper">
        <div className="loginLeft">
            <h3 className='loginLogo'>Pet Lovers</h3>
            <span className="loginDesc">Welcome My Pet Lovers !</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="Email" placeholder='Email' className="loginInput" />
                <input type="password" placeholder='Password' className="loginInput" />
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegButton">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
