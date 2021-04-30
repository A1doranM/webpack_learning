import * as $ from "jquery";
import Post from "@models/Post";
import json from "@/assets/json";
import xml from "@/assets/data.xml";
import csv from "./assets/data.csv";
import WebpackLogo from "@/assets/webpack-logo.png";
import "@/styles/styles.css";
import "@/styles/less.less";
import "@/styles/scss.scss"
import "@/babel";
import React from "react";
import {render} from "react-dom"

const post = new Post("Webpack Post Title", WebpackLogo);

const checkEslintUnusedVars = "";

const App = () => {
    return (
        <div className="container">
            <h1>Webpack course</h1>
            <hr/>
            <div className="logo"/>
            <hr/>
            <pre className="code"/>
            <hr/>
            <div className="box">
                <h2>LESS</h2>
            </div>
            <hr/>
            <div className="card">
                <h2>SCSS</h2>
            </div>
        </div>

    );
};

render(<App/>, document.getElementById("app"));

console.log("Post: ", post.toString());

console.log("JSON: ", json);

console.log("XML: ", xml);

console.log("CSV: ", csv);