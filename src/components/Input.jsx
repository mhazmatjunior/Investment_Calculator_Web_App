// import { useState } from "react";

function Input({ inputLabel, onChange, ...props }) {
  //   const [value, setValue] = useState(0);
  function handleChange(event) {
    // setValue(event.target.value);
    let inputObject = {};
    let inputSymbol = "";
    let number = parseInt(event.target.value);
    // if (!isNaN(value[symbol])) {
    //   value[symbol] = "";
    // }
    if (inputLabel === "Innitial Investment") {
      inputObject = { initialInvestment: number };
      inputSymbol = "initialInvestment";
    } else if (inputLabel === "Annual Investment") {
      inputObject = { annualInvestment: number };
      //   console.log(inputObject);
      inputSymbol = "annualInvestment";
    } else if (inputLabel === "Expected Return") {
      inputObject = { expectedReturn: number };
      inputSymbol = "expectedReturn";
    } else {
      inputObject = { duration: number };
      inputSymbol = "duration";
    }
    onChange(inputSymbol, inputObject);
    // console.log(value);
  }
  return (
    <label>
      {inputLabel}
      <input {...props} type="number" required onChange={handleChange}></input>
    </label>
  );
}

export default Input;
