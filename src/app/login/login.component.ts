import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  myForm: FormGroup;
  email: any;
  userName: any;
  password: any;
  showPassword: boolean = false;
  get fc(){
  return this.myForm.controls;
  }
  
  constructor(private taskService: TaskService, private fb:FormBuilder){
    this.myForm = this.fb.group({
      userName:new FormControl('', Validators.required),
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl ('', [Validators.required, Validators.maxLength(12),Validators.minLength(5)]), 
    });
  }
 
  
ngOnInit(): void {
 
 this.getData();
}

 
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.postFormData(formData);
      alert("You have Successfully Log In")
    }else{
      alert("Please enter valid data")
    }

  }
  // togglePasswordVisibility(){
  //   this.showPassword = !this.showPassword;
  // }
  postFormData(data: any){
  this.taskService.createTask(data).subscribe(
    (response) => {
      console.log('API response:', response);
    },
    (error) => {
      console.error('API error:', error);
    }
  );
}
getData(){
  this.taskService.getAllTasks().subscribe((tasks:any) => {
    this.userName = tasks;
    console.log(this.userName)
  });
}
}
