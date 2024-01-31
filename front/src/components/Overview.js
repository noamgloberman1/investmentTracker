import logo from '../logo.svg';
import '../App.css';


function Overview(props) {

    const portfolioValue = 42;
    const portfolioNIS = (42 * 3.7).toFixed(2);
    const currency = "USD";
    const invested = 26;


    return (
        <>
            <h1>Overview</h1>
            <span id = "overviewInfo" className = "totalsum">Portfolio Value: {portfolioValue} {currency} => {portfolioNIS} NIS.</span>
            <br />
            <span id = "overviewInfo" className = "invested">Money Invested: {invested}{currency}</span>
        </>
    );
}

export default Overview;
