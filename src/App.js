import { useState } from "react";
import Header from "./components/Header.js";
import InputContainer from "./components/InputContainer.js";
import Result from "./components/Result.js";
import "./index.css";

function App() {
  const [inputValue, SetInputValue] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleUpdateInputValue(newInputValue) {
    SetInputValue((prevInput) => {
      return { ...prevInput, ...newInputValue };
    });
  }

  return (
    <>
      <Header />
      {console.log(inputValue.initialInvestment)}
      <InputContainer
        initialInput={inputValue}
        UpdateFn={handleUpdateInputValue}
      />
      {Object.values(inputValue).every((val) => val !== "") && (
        <Result inputValue={inputValue} />
      )}
    </>
  );
}

export default App;
