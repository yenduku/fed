import React, { useState } from "react";

function EMICalc() {
    const [emi, setEmi] = useState(0);
    const [loan, setLoan] = useState(0);
    const [tenure, setTenure] = useState(0); // Corrected spelling of 'tenure'
    const [rate, setRate] = useState(0);
    const [type, setSelectType] = useState("");

    const calculateEMI = () => {
        let r = rate / 12 / 100; // Monthly interest rate
        let t = type === "Years" ? tenure * 12 : tenure; // Convert tenure to months if in years
        let em = loan * r * (Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
        setEmi(em.toFixed(2)); // Calculate EMI and set to state
    };

    const submitMe = (e) => {
        e.preventDefault();
        calculateEMI();
    };

    const myselect = () => {
        const item = document.getElementById("tenureType");
        setSelectType(item.options[item.selectedIndex].text);
        console.log(type);
    };

    const handleLoanAmount = (e) => {
        setLoan(e.target.value);
    };

    const handleTenure = (e) => {
        setTenure(e.target.value);
    };

    const handleInterestRate = (e) => {
        setRate(e.target.value);
    };

    const clear = () => {
        setLoan(0);
        setTenure(0);
        setRate(0);
        setEmi(0);
        setSelectType("");
    };

    return (
        <div className="App">
            <h1>EMI Calculator</h1>
            <form onSubmit={submitMe}>
                <table border="0px" align="Center" style={{ width: "50%" }}>
                    <tbody>
                        <tr>
                            <td><label>Loan Amount:</label></td>
                            <td><input type="number" value={loan} onChange={handleLoanAmount} /></td>
                        </tr>
                        <tr>
                            <td><label>Loan Tenure:</label></td>
                            <td><input type="number" value={tenure} onChange={handleTenure} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <select name="tenureType" id="tenureType" onChange={myselect}>
                                    <option value="Months">Months</option>
                                    <option value="Years">Years</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Interest Rate:</label></td>
                            <td><input type="number" value={rate} onChange={handleInterestRate} /></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" onClick={clear}>Clear</button>
                            </td>
                            <td>
                                <button type="submit">Calculate</button>
                            </td>
                        </tr>
                        <tr>
                            <td><label>EMI:</label></td>
                            <td><input type="text" value={emi} readOnly /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default EMICalc;
