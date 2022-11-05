import {
      createUserWithEmailAndPassword,
      getAuth,
      signInWithPopup,
      updateProfile,
      signInWithEmailAndPassword
} from 'firebase/auth';

import { googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
      return (dispatch) => {
            dispatch(startLoading())

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                  .then(({ user }) => {
                        console.log(user.displayName);
                        dispatch(login(user.uid, user.displayName))

                        dispatch(finishLoading())
                  })
                  .catch(err => {
                        console.log(err)
                        dispatch(finishLoading())
                  });
      }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
      return (dispatch) => {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                  .then(async ({ user }) => {

                        await updateProfile(user, { displayName: name });

                        dispatch(
                              login(user.uid, user.displayName)
                        )

                        // console.log(user.uid);
                  })
            // .catch(err => console.log(err));
      }
}


export const startGoogleLogin = () => {
      return (dispatch) => {
            const auth = getAuth();
            signInWithPopup(auth, googleAuthProvider)
                  .then(({ user }) => {
                        dispatch(login(user.uid, user.displayName));
                        // console.log({user});
                  })
                  .catch(err => { console.log(err) })
      }
}

export const login = (uid, displayName) => ({
      type: types.login,
      payload: {
            uid,
            displayName
      }
})

