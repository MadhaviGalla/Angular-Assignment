import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {

  @ViewChild('data') inputdata: any;

  form!: FormGroup;

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

  constructor(private fb: FormBuilder) { }

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
    this.inputdata.nativeElement.value = '';
    console.log(this.inputdata);
    // var deletebtn = confirm('do you want to delete');
    // if (deletebtn == true) {
    //   this.row.splice(event, 1)
    // }
  }






}
