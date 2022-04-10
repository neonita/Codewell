const Form = () => {
  return (
    <form className="flex flex-col gap-y-3">
      <span className="sr-only">Login</span>
      <h1 className="text-4xl text-theme-black font-semibold">Login</h1>

      <label
        htmlFor="email"
        className="mb-[-5px] text-black font-semibold text-sm"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john@example.com"
        className="theme-inputs theme-placeholder"
      />

      <label
        htmlFor="password"
        className="mb-[-5px] text-black font-semibold text-sm"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="At least 8 characters"
        className="theme-inputs theme-placeholder"
      />

      <div className="grid grid-cols-[0.1fr_1fr] items-start">
        <input type="checkbox" name="tna" id="tna" className="theme-checkbox" />
        <label htmlFor="tna" className="text-theme-black pr-5 font-thin">
          By creating an account, you agree to the{" "}
          <a
            href="/"
            className="text-theme-blue font-bold border-b-2 border-theme-blue"
          >
            Terms & Conditions
          </a>
          .
        </label>
      </div>

      <input type="submit" value="Create an Account" className="theme-btn" />
    </form>
  );
};

export default Form;
