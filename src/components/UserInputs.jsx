import Input from "./Input";
function UserInputs({ onHandle, inputValues }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          inputLabel="Innitial Investment"
          value={inputValues.initialInvestment}
          onChange={onHandle}
        />
        <Input
          inputLabel="Annual Investment"
          value={inputValues.annualInvestment}
          onChange={onHandle}
        />
      </div>
      <div className="input-group">
        <Input
          inputLabel="Expected Return"
          value={inputValues.expectedReturn}
          onChange={onHandle}
        />
        <Input
          inputLabel="Duration"
          value={inputValues.duration}
          onChange={onHandle}
        />
      </div>
    </section>
  );
}

export default UserInputs;
