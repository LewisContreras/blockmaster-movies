import { types } from "../types/types";
import { googleAuthProvider, firebase } from "../firebase/firebase-config";
import { startLoading, finishLoading, setError } from "./uiActions";

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading()); // Start loading state
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.displayName));
    } catch (e) {
      console.error("Error logging in:", e);
      dispatch(setError(e.message)); // Set the error state
    } finally {
      dispatch(finishLoading()); // Finish loading state
    }
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
      dispatch(login(user.uid, user.displayName));
    } catch (e) {
      console.error("Error with Google login:", e);
      dispatch(setError(e.message)); // Handle Google login errors
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await user.updateProfile({ displayName: name });
      dispatch(login(user.uid, user.displayName));
    } catch (e) {
      console.error("Error registering user:", e);
      dispatch(setError(e.message)); // Handle registration errors
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      await firebase.auth().signOut();
      dispatch(logout());
    } catch (e) {
      console.error("Error logging out:", e);
      dispatch(setError(e.message)); // Handle logout errors
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => ({
  type: types.logout,
});
