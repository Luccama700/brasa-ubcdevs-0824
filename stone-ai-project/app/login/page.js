
import './styles.css';

const Login = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen login-container">
      <div className="login-left flex-1 flex justify-center items-center">
        <div className="login-form">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a868" className="login_icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

          <form>
            <div className="form-group">
              <input type="text" id="username" name="username" placeholder='Nome de Usuário' />
            </div>
            <div className="form-group">
              <input type="password" id="password" name="password" placeholder='Senha'/>
            </div>
            <button className="log_in" type="submit">Login</button>
            <button className="sign_in" type="submit">Criar conta</button>
            <div className="forgot-password">Esqueceu sua senha?</div>
          </form>
        </div>
      </div>
      <div className="login-right">
      </div>
    </div>
  );
};

export default Login;
