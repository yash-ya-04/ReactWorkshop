import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GetComponent from '../localApiWithHooks/apiComponents/GetComponent';

export default function MainComponent() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={GetComponent}> </Route>
            </div>
        </BrowserRouter>
    );   
}