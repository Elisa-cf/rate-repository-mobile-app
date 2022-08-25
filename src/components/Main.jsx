import React from "react";
import { Text, View } from 'react-native'
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Redirect, Route, Routes } from 'react-router-native'

//documentation at https://reactrouter.com/en/main/getting-started/overview
const Main = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <AppBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/list" element={<RepositoryList />} />
            </Routes>
        </View>
    )
}

export default Main