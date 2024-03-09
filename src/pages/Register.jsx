/* eslint-disable react/jsx-one-expression-per-line */
function Register() {
  return (
    <main className=" h-[calc(100vh-60px)] flex lg:flex-row flex-col bg-brand-light lg:pt-6 ">
      <div className=" lg:block hidden bg-hero-image  bg-cover rounded-r-3xl bg-no-repeat bg-center flex-[4] bg-sky-200 bg-blend-multiply" />
      <section className="flex-[3]  justify-center items-center flex flex-col gap-4 ">
        <h1 className="text-brand lg:text-3xl font-playfair font-bold tracking-widest text-center text-2xl mt-6">
          Create an account
        </h1>
        <form
          action="
          "
          className="max-w-md p-4 md:p-6 lg:p-8"
        >
          <input
            type="text"
            placeholder="Full Name"
            name="username"
            className="placeholder:text-brand placeholder:font-normal placeholder:tracking-widest   py-2 pl-2 bg-transparent w-full border border-brand rounded-md border-solid focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 text-brand font-semibold"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="placeholder:text-brand placeholder:font-normal placeholder:tracking-widest  my-8 py-2 pl-2 bg-transparent w-full border border-brand  rounded-md border-solid focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 text-brand font-semibold"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="placeholder:text-brand placeholder:font-normal placeholder:tracking-widest   py-2 pl-2 bg-transparent w-full border  border-brand rounded-md border-solid focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 text-brand font-semibold"
          />
          <button
            type="button"
            className="mt-8 bg-brand rounded-md p-3 font-semibold text-white tracking-widest w-full hover:bg-brand-dark focus:bg-brand-dark "
          >
            Sign Up
          </button>
        </form>
        <p className="text-brand">
          Already have an account ?{' '}
          <a href="login" className="text-sky-500">
            Log in
          </a>
        </p>
      </section>
    </main>
  );
}

export default Register;
