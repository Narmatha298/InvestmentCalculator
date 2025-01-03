import Input from "./Input.js";

export default function InputContainer({ initialInput, UpdateFn }) {
  function handleOnChange(event, param) {
    if (param === "duration" && event.target.value < 1) {
      alert("Invalid Duration");
      return;
    }
    UpdateFn({ [param]: Number(event.target.value) });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="INITIAL INVESTMENT"
          value={initialInput.initialInvestment}
          handleOnChange={handleOnChange}
          param="initialInvestment"
        />
        <Input
          label="ANNUAL INVESTMENT"
          value={initialInput.annualInvestment}
          handleOnChange={handleOnChange}
          param="annualInvestment"
        />
      </div>
      <div className="input-group">
        <Input
          label="EXPECTED RETURN"
          value={initialInput.expectedReturn}
          handleOnChange={handleOnChange}
          param="expectedReturn"
        />
        <Input
          label="DURATION"
          value={initialInput.duration}
          handleOnChange={handleOnChange}
          param="duration"
        />
      </div>
    </div>
  );
}
