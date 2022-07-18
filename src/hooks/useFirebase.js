import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});



    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
        });
    }, [])


    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;