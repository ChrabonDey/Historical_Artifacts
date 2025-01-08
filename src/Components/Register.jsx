import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../assets/16640 (1).jpg";

const Register = () => {
  const { handleRegister, handleGoogleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }

    handleRegister(email, password)
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError(err.message || "An unknown error occurred");
      });
  };

  const handleGoogleLoginClick = () => {
    handleGoogleLogin()
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError(err.message || "Google login failed. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="bg-gray-800 flex flex-col md:flex-row gap-8 p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <div className="hidden md:block w-full md:w-1/2">
          <img src={img} alt="Register" className="rounded-lg object-cover h-full" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-white text-center mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="designer@example.com"
                className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {error && (
                <p className="text-red-500 mt-2 text-sm">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </form>

          <div className="mt-6">
            <button
              type="button"
              onClick={handleGoogleLoginClick}
              className="w-full py-2 px-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300"
            >
              Sign Up with Google
            </button>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-blue-400 hover:underline font-bold"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
