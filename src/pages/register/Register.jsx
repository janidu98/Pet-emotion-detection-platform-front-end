import './register.css';

export default function Regiser() {
  return (
    <div className='login'>
      <div className="login-wrapper">
        <div className="loginLeft">
            <h3 className='loginLogo'>Pet Lovers</h3>
            <span className="loginDesc">Welcome My Pet Lovers !</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="text" placeholder='Username' className="loginInput" />
                <input type="Email" placeholder='Email' className="loginInput" />
                <input type="password" placeholder='Password' className="loginInput" />
                <input type="password" placeholder='Password Again' className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegButton">Login into Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
