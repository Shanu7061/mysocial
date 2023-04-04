import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const loginHandler = (
    e: React.FormEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
  };
  return (
    <div className='login'>
      <div className='login-card'>
        <div className='login-left'>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Placeat
            debitis consequuntur accusantium
            facilis magni laboriosam expedita quis
            quidem hic
          </p>
          <p>Don&apos;t you have a account</p>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className='login-right'>
          <h1>Login</h1>
          <form>
            <input
              type='email'
              placeholder='Username'
            />
            <input
              type='password'
              placeholder='Password'
            />
            <button
              type='button'
              onClick={loginHandler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
