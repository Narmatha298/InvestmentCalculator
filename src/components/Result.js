import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ inputValue }) {
  const data = calculateInvestmentResults(inputValue);
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>YEAR</th>
          <th>INVESTMENT VALUE</th>
          <th>INTEREST(YEAR)</th>
          <th>TOTAL INTEREST</th>
          <th>INVESTED CAPITAL</th>
        </tr>
      </thead>
      <tbody>
        {data.map(function (value, index) {
          totalInterest = totalInterest + value.interest;

          return (
            <tr key={index}>
              <td>{value.year}</td>
              <td>{formatter.format(value.valueEndOfYear)}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>
                {formatter.format(
                  Math.abs(value.valueEndOfYear - totalInterest)
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
