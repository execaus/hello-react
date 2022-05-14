import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import AuthBlock from "./components/AuthBlock";
import RegisterBlock from "./components/RegisterBlock";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={"/auth"} element={<AuthBlock />}/>
                <Route path={"/register"} element={<RegisterBlock />}/>
            </Routes>
        </div>
    )
}

export default App;
