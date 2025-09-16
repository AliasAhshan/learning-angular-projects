export interface Input {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}

export interface Results {
  year: number
  interest: number
  valueEndOfYear: number
  annualInvestment: number
  totalInterest: number
  totalAmountInvested: number
}