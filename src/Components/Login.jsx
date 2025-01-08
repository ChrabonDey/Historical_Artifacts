import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/16640 (1).jpg";

const Login = () => {
  const { handleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setIsLoading(true);

    try {
      await handleLogin(email, password);
      navigate(location.state?.from || "/");
    } catch (err) {
      setError(err.message || "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 flex flex-col md:flex-row rounded-lg shadow-2xl overflow-hidden w-full max-w-4xl">
        {/* Left Side Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={img}
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 text-gray-300">
          <h2 className="text-4xl font-bold text-center text-white mb-6">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-400 mb-8">
            Sign in to access your account and continue your journey.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 text-gray-900 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-gray-900 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 mt-4 text-center text-sm">
                {error.includes("/")
                  ? "Invalid email or password."
                  : error}
              </p>
            )}
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="text-blue-400 font-medium hover:underline"
              >
                Create one
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
