import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Menu/Home.js'
import Detail from '../Menu/Detail'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            <Scene key = "about" component = {Detail} title = "Detail" />
        </Scene>
    </Router>
)
export default Routes