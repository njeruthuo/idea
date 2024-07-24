import { useState } from "react";
import { useUser } from "../lib/context/context";

export function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-[75%] mx-auto border-r-2 border-l-2 px-12 pt-12 pb-24">
      <h1 className="mb-2">Login or register</h1>
      <form className="flex flex-col space-y-6">
        <input
          className="w-2/3 py-2 px-4"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="w-2/3 py-2 px-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="flex space-x-7 w-2/3 justify-between mt-4">
          <button
            className="button bg-gray-500 text-white rounded-md py-1 px-4"
            type="button"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
          <p>or</p>
          <button
            className="button bg-gray-500 text-white rounded-md py-1 px-4"
            type="button"
            onClick={() => user.register(email, password)}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
