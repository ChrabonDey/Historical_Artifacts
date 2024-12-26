import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { handleRegister,handleGoogleLogin } = useContext(authContext);
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
         
      }).then((res) => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        
        setError(err.message || "An unknown error occurred");
      });

    
     
  };
  const handleGoogleLoginClick = () => {
    handleGoogleLogin()
      .then((res) => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        
        setError(err.message || "Google login failed. Please try again.");
      });
    }

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <div className="form-control mt-4">
              <button
                type="button"
                onClick={handleGoogleLoginClick}
                className="btn btn-secondary w-full"
              >
                Google Login
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
