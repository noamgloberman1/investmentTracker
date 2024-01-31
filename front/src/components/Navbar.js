import logo from '../logo.svg';
import '../App.css';
import { checkPropTypes } from 'prop-types';


function Navbar(props) {

    const overview = () => {

        props.onChange("Overview");

    }

    const transactions = () => {

        props.onChange("Transactions");

    }

    const update = () => {

        props.onChange("Update");

    }

    return (
        <>
            <div className = {props.scrolled ? "scrolledNavbar" : "navbar"}>
            <a id = "overview" onClick={overview}>Overview</a> | 
            | <a id = "transactions" onClick={transactions}>Transactions</a> |
            | <a id = "Update" onClick={update}>Update</a>

            </div>
        </>
    );
}

export default Navbar;
