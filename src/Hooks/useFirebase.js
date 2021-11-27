import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import initializeFirebase from "./../Components/Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  // Registration
  const handleRegistration = (email, password, name, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        history.push(destination);
        // set username to firebase
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUserToDatabase(email, name, "POST");

        updateProfile(auth.currentUser, {
          displayName: name,
        }).then((result) => {
          alert(`${name} registered successfully`);
        });

        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  // Log In
  const handleLogin = (email, password, location, history) => {
    console.log(email, password, location, history);
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // save user to database
  const saveUserToDatabase = (email, displayName, method) => {
    const user = { email, displayName };
    console.log("user", user);
    const url = `https://evening-escarpment-00745.herokuapp.com/users`;
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  // check if the logged in user is admin
  useEffect(() => {
    const url = `https://evening-escarpment-00745.herokuapp.com/users/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  // observe user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logout = () => {
    setIsLoading(true);
    console.log("logout");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    handleRegistration,
    handleLogin,
    auth,
    user,
    admin,
    isLoading,
    authError,
    logout,
  };
};
export default useFirebase;
