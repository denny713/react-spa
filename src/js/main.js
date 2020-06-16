import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
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
                            <NavLink to="transaksi">Transaksi</NavLink>
                        </li>
                        <li>
                            <NavLink to="kontak">Kontak</NavLink>
                        </li>
                        <li>
                            <NavLink to="tentang">Tentang</NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/transaksi" component={Transaksi}/>
                        <Route path="/kontak" component={Kontak}/>
                        <Route path="/tentang" component={Tentang}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
