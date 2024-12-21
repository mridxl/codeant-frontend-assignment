import LoginLeft from '../components/Login/Left';
import LoginRight from '../components/Login/Right';

const Login = () => {
  return (
    <div className="flex h-screen w-screen justify-center">
      <LoginLeft />
      <LoginRight />
    </div>
  );
};

export default Login;
