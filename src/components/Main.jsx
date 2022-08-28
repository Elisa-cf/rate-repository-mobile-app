import React from "react";
import { Text, View } from 'react-native'
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import LogInPage from "../pages/LogIn";
import { Redirect, Route, Switch } from 'react-router-native'

//documentation at https://reactrouter.com/en/main/getting-started/overview
const Main = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/signin' exact>
                    <LogInPage />
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    )
}

export default Main