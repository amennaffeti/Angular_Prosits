import { Component , inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  fb=inject(FormBuilder);
  userForm=this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.maxLength(6)]]
  })
  submit(){
    console.log(this.userForm.value);
  }
//     userForm = new FormGroup({
//         name: new FormControl(''),
//         email: new FormControl(''),
//         password: new FormControl('')
//     });

//     submit() {
//         console.log(this.userForm.value);
//     }
}
