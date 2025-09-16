import { Injectable, signal } from "@angular/core";

import { type Results, type Input } from "./app.model";

@Injectable({ providedIn: 'root'})
export class InvestmentService {
    resultsData = signal<Results[] | undefined>([])
    calculateInvestmentResults(results: Input) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = results
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;

            annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        
        }
        this.resultsData.set(annualData)
    }
}