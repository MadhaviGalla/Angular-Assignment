import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../dynamic/service.service';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {

  @ViewChild('data1') inputdata1: any;
  @ViewChild('data2') inputdata2: any;
  @ViewChild('data3') inputdata3: any;

  form!: FormGroup;
  formData!: FormGroup

  formFields: any = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      validators: [Validators.required]
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      validators: [Validators.required]
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      options: ['Male', 'Female', 'Other'],
      validators: [Validators.required]
    }
  ];


  row = [
    {
      id: '',
      name: '',
      email: ''
    },
    {
      id: '',
      name: '',
      email: ''
    },
    {
      id: '',
      name: '',
      email: ''
    }
  ];

  constructor(private fb: FormBuilder, 
    private router:ActivatedRoute,
    private service: ServiceService) { }

  ngOnInit(): void {
    const formControls: any = {};
    this.formFields.forEach((field: any) => {
      formControls[field.name] = ['', field.validators];
    });
    this.form = this.fb.group(formControls);
  }

  onSubmit() {
    console.log(this.form.value)
  }

  addrows() {
    const obj = {
      id: '',
      name: '',
      email: ''
    }
    this.row.push(obj);
  }

  delete() {
    let d = confirm("are u want to delte");
   if(d==true){
    this.inputdata1.nativeElement.value = '';
    this.inputdata2.nativeElement.value = '';
   this.inputdata3.nativeElement.value= '';
   }
    // var deletebtn = confirm('do you want to delete');
    // if (deletebtn == true) {
    //   this.row.splice(event, 1)
    // }
  }
  myData: string = '';

  // onInputChange(event: Event) {
  //   this.myData = '';
  // }

  deleteData(){
   this.myData = ''
  }

 

  user = '';
  newUser = ''

  ediUser(){

  }


}
