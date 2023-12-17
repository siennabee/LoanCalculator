it('should calculate the monthly rate correctly', () => {
  let values = {
    amount: 75000,
    years: 10,
    rate: 6
  }
  expect(calculateMonthlyPayment(values)).toEqual("832.65");
});

it('should return a result with 2 decimal places', () => {
  let values = {
    amount: 30000,
    years: 5,
    rate: 11
  }
  expect(calculateMonthlyPayment(values)).toEqual("652.27");
});

describe("invalid inputs", () => {
  it('should return NaN if invalid inputs are submitted', () => {
  let values = {
    amount: 0,
    years: 0,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toEqual("NaN");
  values = {
    amount: "testing",
    years: "incorrect",
    rate: false
  }
  expect(calculateMonthlyPayment(values)).toEqual("NaN");
  })})
