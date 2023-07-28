import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: any = {};
  ageAlert: string = ''; // Variable to store the age alert message

  validateForm() {
    const dob = new Date(this.userData.dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();

    if (age < 18) {
      this.ageAlert = 'Age must be greater than 18';
      this.openAgeAlertModal();
    } else {
      this.ageAlert = 'Successful!';
      this.openAgeAlertModal();
      // You can perform further actions here, such as submitting the form to a server
    }
  }

  openAgeAlertModal() {
    const modal = document.getElementById('ageAlertModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeAgeAlertModal() {
    const modal = document.getElementById('ageAlertModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
}
