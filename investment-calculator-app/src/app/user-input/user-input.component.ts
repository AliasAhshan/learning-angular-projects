import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Results } from '../app.model';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  calculate = output<Results>()

  userInitialInvestment = "0"
  userAnnualInvestment = "0"
  userExpectedReturn = "5"
  userDuration = "10"
  

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.userInitialInvestment,
      annualInvestment: +this.userAnnualInvestment,
      expectedReturn: +this.userExpectedReturn,
      duration: +this.userDuration
  })
  }
}

