import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import { useState } from "react";
import Results from "./components/Results";

const inputValues = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};
// const resultValues = { ...inputValues };
// console.log(resultValues);

function App() {
  const [resultValues, setResultValues] = useState(inputValues);
  function handleInputValues(symbol, value) {
    setResultValues((prevValues) => {
      prevValues = { ...prevValues, [symbol]: value[symbol] };
      return prevValues;
    });
  }
  // console.log("Input value changed:");
  // <input type="text" />
  // console.log(resultValues)
  return (
    <div>
      <Header />
      <UserInputs onHandle={handleInputValues} inputValues={resultValues} />
      <Results resultData={resultValues} />
      {/* {console.log(inputValues)} */}
    </div>
  );
}

export default App;
