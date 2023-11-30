import { Outlet, Link } from "react-router-dom";
// import Counter from "./Components/Counter";
// import Bankomat from "./Components/Bankomati"
// import Calculator from "./Components/Calculator";
// import CounterEffect from "./Components/CounterEffect";
// import CountriesGame from "./Components/CountryCapitalGame";
// import ToDo from "./Components/ToDo";
// import ToDoCr from "./Components/ToDoCr";
// import UserReg from "./Components/UserReg";
// import NameSwitcher from './Components/NameSwitcher';


const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Bankomat">Bankomat</Link>
                    </li>
                    <li>
                        <Link to="/Calculator">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/Clicker">Clicker</Link>
                    </li>
                    <li>
                        <Link to="/CounterEffect">Effect</Link>
                    </li>
                    <li>
                        <Link to="/CountriesGame">CountriesGame</Link>
                    </li>
                    <li>
                        <Link to="/ToDo">ToDo</Link>
                    </li>
                    <li>
                        <Link to="/ToDoCr">ToDo V2</Link>
                    </li>
                    <li>
                        <Link to="/UserReg">UserReg</Link>
                    </li>
                    <li>
                        <Link to="/NameSwitcher">NameSwitcher</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;