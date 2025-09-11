import { Component, output } from '@angular/core';


interface Results {
  year: number
  interest: number
  valueEndOfYear: number
  annualInvestment: number
  totalInterest: number
  totalAmountInvested: number
}

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  calculate = output<Results[]>()
  initialInvestment = 0
  annualInvestment = 0
  expectedReturn = 0
  duration = 0

  calculateInvestmentResults(): Results[] {
  const annualData: Results[] = [];
  let investmentValue = this.initialInvestment;

  for (let i = 0; i < this.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
    investmentValue += interestEarnedInYear + this.annualInvestment;
    const totalInterest =
      investmentValue - this.annualInvestment * year - this.initialInvestment;

    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: this.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
    });
  }

  return annualData;
}
  

  onCalculate() {
    const results = this.calculateInvestmentResults()
    this.calculate.emit(results)
  }
}

