import React,{useEffect, useState} from 'react';
import firebase from "firebase"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { login } from "../actions/auth"
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import {PrivateRoute} from "./PrivateRoute"
import {PublicRoute} from "./PublicRoute"
import MainScreen from '../containers/MainScreen';


export const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user)=>{
            console.log(user);

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
            }else{
                setIsLoggedIn(false)
            }
            setChecking(false)


        })
    }, [dispatch, setChecking])

    if (checking) {
        return(
            <h1>
                Cragando...
            </h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute 
                        exact
                        path="/"
                        component={ MainScreen }
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}