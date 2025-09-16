import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Input } from '../app.model';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  userInitialInvestment = signal("0")
  userAnnualInvestment = signal("0")
  userExpectedReturn = signal("5")
  userDuration = signal("10")
  
  private investmentService = inject(InvestmentService)

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.userInitialInvestment(),
      annualInvestment: +this.userAnnualInvestment(),
      expectedReturn: +this.userExpectedReturn(),
      duration: +this.userDuration()
  });
  }
}

