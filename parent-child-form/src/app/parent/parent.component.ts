import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name: string='';
  address: string='';
  email: string='';
  phone: string='';
  formData: any[] = [];

  submitForm() {
    const data = {
      name: this.name,
      address: this.address,
      email: this.email,
      phone: this.phone
    };

    this.formData.push(data);
    this.name = '';
    this.address = '';
    this.email = '';
    this.phone = '';
    alert(`Data submitted for ${data.name}`);
  }
}
