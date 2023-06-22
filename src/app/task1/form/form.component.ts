import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  rupeesAmount: any;
  public myForm: any;
  show: boolean = false;
  public isSubmitted:boolean= false;
  public allData:any;
  constructor(private fb: FormBuilder, private ser : RegisterService) {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone :['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
      pass: ['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      d1 :['',[Validators.required]],
      d2 :['',[Validators.required]],
      d3 :[''],
      onlineFee:[''],
      personFee:['']
    })
    
  }
 

  showbutton() {
    this.show = true;
  }
  
  
  onSubmitData() {
   
      this.isSubmitted = true;
   this.ser.postData(this.myForm.value).subscribe((res:any)=>{console.log(res);
  alert("Data added successfully");})
   
  
  
  }

  get f(){
    // console.log(this.myForm.controls);
    console.log(this.myForm.controls['email']);
    return this.myForm.controls;
  }

}
