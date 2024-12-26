import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile 
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config"; // Ensure auth is correctly imported from Firebase config
import axios from "axios";


export const authContext = createContext();

const AuthProvider = ({ routes }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register a new user
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in an existing user
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Send password reset email
  const handleResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Log out the current user
  const handleLogout = async () => {
    try {
      console.log("Attempting logout...");
      await signOut(auth);
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // Log in with Google
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Update user's profile
  const manageProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile,
    user,
    setUser,
    loading,
    handleResetPassword,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser);
      setUser(currentUser || null);

      console.log('state capture',currentUser?.email)
      if(currentUser?.email){
        const user={email: currentUser?.email}
        axios.post('https://historical-artifacts-tracker-server-umber.vercel.app/jwt',user,{withCredentials:true})
        .then(res=>{
          console.log('login token',res.data);
          setLoading(false);
        })
      }
      else{
        axios.post('https://historical-artifacts-tracker-server-umber.vercel.app/logout',{},{
          withCredentials:true
        })
        .then(res=>{
          console.log('logout',res.data);
          setLoading(false);
        })
      }

     
    });

    return () => unSubscribe();
  }, []);

  return (
    <authContext.Provider value={authInfo}>
      {routes}
    </authContext.Provider>
  );
};

export default AuthProvider;
