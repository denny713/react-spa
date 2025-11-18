import React, {Component} from "react";
import {Routes, Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./home";
import Kontak from "./kontak";
import Transaksi from "./transaksi";
import Tentang from "./tentang";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1 className="title">React JS SPA</h1>
                    <ul className="header">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/transaksi">Transaksi</NavLink>
                        </li>
                        <li>
                            <NavLink to="/kontak">Kontak</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tentang">Tentang</NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/transaksi" element={<Transaksi/>}/>
                            <Route path="/kontak" element={<Kontak/>}/>
                            <Route path="/tentang" element={<Tentang/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
