/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/userRedux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector(
    (state) => state.entities.user
  );
  function handleLogin(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  }
  useEffect(() => {
    function isUserLogged() {
      if (currentUser) {
        navigate('/');
      }
    }
    isUserLogged();
  }, [currentUser]);
  return (
    <main className="h-[calc(100vh-60px)] flex md:flex-row flex-col bg-brand-light lg:pt-6">
      <div className="bg-hero-image   lg:block hidden bg-cover rounded-r-3xl bg-no-repeat bg-center flex-[4] bg-sky-200 bg-blend-multiply" />
      <section className="flex-[3]  justify-center items-center flex flex-col gap-1">
        <h1 className="text-brand lg:text-3xl font-open font-bold tracking-widest text-center text-2xl mt-6">
          Welcome back
        </h1>
        <p className="text-slate-700 font-normal my-2 ">
          please sign in your details.
        </p>
        <form
          onSubmit={handleLogin}
          className="max-w-md p-4  sm:px-16 md:px-6 lg:px-8"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            name="email"
            className="placeholder:text-brand placeholder:font-normal placeholder:tracking-widest  my-8 py-2 pl-2 bg-transparent w-full border border-brand  rounded-md border-solid focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 text-brand font-semibold"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            className="placeholder:text-brand placeholder:font-normal placeholder:tracking-widest   py-2 pl-2 bg-transparent w-full border  border-brand rounded-md border-solid focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 text-brand font-semibold"
          />
          <button
            type="submit"
            disabled={isFetching}
            className={`mt-8 bg-brand rounded-md p-3 font-semibold text-white tracking-widest w-full hover:bg-brand-dark focus:bg-brand-dark ${
              isFetching && 'cursor-not-allowed'
            }`}
          >
            Sign In
          </button>
        </form>
        <a href="help" className="text-sky-500 mb-2 hover:text-brand">
          Forget password?
        </a>
        <p className="text-brand">
          Don't have an account ?{' '}
          <a href="register" className="text-sky-500 hover:text-brand ">
            Sign up
          </a>
        </p>
        <p className="text-red-600  text-lg">
          {error && 'something went wrong...'}
        </p>
      </section>
    </main>
  );
}

export default Login;
