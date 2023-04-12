import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({});
  const [errorLogin, setErrorLogin] = useState({ state: false, message: "" });

  const navigate = useNavigate()

  const handleOnChange = (event) => {
    let input = { ...loginData, [event.target.id]: event.target.value };
    setLoginData(input);
  };

  const handleSignIn = async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      setErrorLogin({ state: true, message: "" });
      navigate('/cms')
    } catch (err) {
      if (err) setErrorLogin({ state: true, message: err.message });
      const errorCode = err.code;
      const errorMessage = err.message;

      console.log(errorLogin);
    }
  };

  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <p className="text-xl">My Login 🦖</p>
        <div className="mt-4 text-center w-[20vw]">
          <div className={!errorLogin ? "hidden" : "max-w-full"}>
            <p className="pb-2 text-red-500 text-sm animate-bounce">
              {errorLogin.message}
            </p>
          </div>
          <form action="">
            <div className="flex flex-col gap-4 text-black">
              <input
                onChange={handleOnChange}
                type="text"
                id="email"
                autoComplete="off"
                className="rounded-lg px-2 text-center"
                placeholder="username"
              />
              <input
                onChange={handleOnChange}
                type="password"
                id="password"
                autoComplete="off"
                className="rounded-lg px-2 text-center"
                placeholder="password"
              />
              <button
                onClick={(event) => {
                  event.preventDefault();
                  handleSignIn(loginData);
                }}
                type="submit"
                className="bg-secondary rounded-lg hover:bg-yellow-200 py-1"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
