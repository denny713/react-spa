import React from "react";
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
                    <hl className="title">React JS SPA</hl>
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
                        <Route exact path="/">component={Home}</Route>
                        <Route path="/transaksi">component={Transaksi}</Route>
                        <Route path="/kontak">component={Kontak}</Route>
                        <Route path="/tentang">component={Tentang}</Route>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
