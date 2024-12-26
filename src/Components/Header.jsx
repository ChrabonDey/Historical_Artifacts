import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import logo from "../assets/Untitled_design__1_-removebg-preview.png";

const Header = () => {
  const { user, handleLogout } = useContext(authContext);

  return (
    <div className="text-center my-4">
      <div className="navbar w-11/12 mx-auto rounded-lg p-4">
      
        <div className="navbar-start flex items-center gap-4">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Website Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold ml-2">Historical Tracker</span>
          </NavLink>
        </div>

       
        <div className="navbar-center hidden lg:flex gap-6">
          <NavLink to="/" className="hover:text-teal-400">
            Home
          </NavLink>
          <NavLink to="/all-artifacts" className="hover:text-teal-400">
            All Artifacts
          </NavLink>
          {user && (
            <NavLink to="/add-artifact" className="hover:text-teal-400">
              Add Artifacts
            </NavLink>
          )}
        </div>

        {/* Login/Logout Section */}
        <div className="navbar-end flex items-center gap-4">
          {!user ? (
            <NavLink to="/login">
              <button className="btn bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-2 rounded-md">
                Login
              </button>
            </NavLink>
          ) : (
            <div className="dropdown dropdown-end relative">
              {/* User Avatar */}
              <div
                tabIndex={0}
                role="button"
                className="avatar cursor-pointer"
                title={user.displayName || "User"}
              >
                <div className="w-10 h-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </div>
              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white text-black rounded-md w-40 shadow-md mt-2 z-50"
              >
                <li>
                  <NavLink to="/my-artifacts" className="hover:text-blue-600">
                    My Artifacts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/liked-artifacts"
                    className="hover:text-blue-600"
                  >
                    Liked Artifacts
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={async () => {
                      await handleLogout();
                    }}
                    className="w-full text-left px-4 py-2 hover:text-red-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
