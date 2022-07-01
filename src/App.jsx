import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// importing screens
import HomeScreen from "./screens/HomeScreen";

function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;