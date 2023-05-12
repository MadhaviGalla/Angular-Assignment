import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../dynamic/service.service';
import { Subject } from 'rxjs';

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
    private router: ActivatedRoute,
    private service: ServiceService) {

      this.exampleForm.valueChanges.subscribe((value)=>{
        this.formValuSubject.next(value);
        console.log(value, "name")
      })

     
     }

  ngOnInit(): void {
    const formControls: any = {};
    this.formFields.forEach((field: any) => {
      formControls[field.name] = ['', field.validators];
    });
    this.form = this.fb.group(formControls);

    this.check()
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
    if (d == true) {
      this.inputdata1.nativeElement.value = '';
      this.inputdata2.nativeElement.value = '';
      this.inputdata3.nativeElement.value = '';
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

  deleteData() {
    this.myData = ''
  }

  user = '';
  newUser = ''

  ediUser() {

  }
  /////////////////////////////////////////////

  items: any = ['apple', 'banana', 'cherry'];

  removeItem(i: string) {
    const index = this.items.indexOf(i)
    if (index! == -1) {
      this.items.splice(index, 2)
    }
    else {
      alert()
    }
  }


  originalObject = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
    }
  };
  clonedObject = JSON.parse(JSON.stringify(this.originalObject));

  convert() {
    this.clonedObject.name = 'Jane';
    this.clonedObject.address.street = '456 Elm St';

    console.log(this.originalObject, "originalObject");
    console.log(this.clonedObject, "clonedObject");


  }
  ////////////////////////////

 person:any = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
  };

check(){
  for (const key of Object.keys(this.person)) {
    console.log(`${key}: ${this.person[key]}`);
    
  }
}




  //////////////////

  formValuSubject = new Subject<any>()

  exampleForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl()
  })

  nameChanges$ = this.exampleForm.get('name')?.valueChanges
  ageChanges$ = this.exampleForm.get('age')?.valueChanges;


  
}
