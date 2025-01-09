import { types } from "../types/types";
import { googleAuthProvider, firebase } from "../firebase/firebase-config";
import { startLoading, finishLoading, setError, removeError } from "./uiActions";

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.displayName));
      dispatch(removeError());
    } catch (e) {
      dispatch(setError(e.code));
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
      dispatch(login(user.uid, user.displayName));
      dispatch(removeError());
    } catch (e) {
      dispatch(setError(e.code));
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
      dispatch(removeError());
    } catch (e) {
      dispatch(setError(e.code));
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
      dispatch(removeError());
    } catch (e) {
      dispatch(setError(e.code));
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
