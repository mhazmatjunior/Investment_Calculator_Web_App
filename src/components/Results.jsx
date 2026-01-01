import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ resultData }) {
  //   console.log("results");
  //   console.log(resultData);
  const { duration } = resultData;
  //   console.log(duration);
  const results = calculateInvestmentResults(resultData);
  //   console.log(results);
  return (
    (duration >= 1 && (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Investment (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            {/* {console.log(
            initialInvestment,
            annualInvestment,
            expectedReturn,
            duration
          )} */}
          </tr>
        </thead>
        <tbody>
          {results.map((data) => {
            const totatInterest =
              data.valueEndOfYear -
              data.annualInvestment * data.year -
              resultData.initialInvestment;
            const totalAmmountInvested = data.valueEndOfYear - totatInterest;

            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totatInterest)}</td>
                <td>{formatter.format(totalAmmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )) || <p className="center">Please Choose a Correct Duration</p>
  );
}

export default Results;
