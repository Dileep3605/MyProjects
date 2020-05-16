import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  employeeForm: FormGroup;
  showPhoneMsg: boolean = false;
  validationMessages = {
    'fullName': {
      'required': 'Full name is required',
      'minlength': 'Full name must be greater than 2 characters.',
      'maxlength': 'Full name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required',
      'pattern': 'please add correct email address eg. abc@instancy.com',
      'emailDomain': 'Email domain must be instancy.com'
    },
    'phone': {
      'required': 'Phone is required',
      // 'minlength': 'Phone Number must be greater than 5 digit',
      'maxlength': 'Phone Number must be equal to 10 digit',
      'pattern': 'Please enter only number, characters are not allowed'
    },
    'skillName': {
      'required': 'Skill Name is required'
    },
    'experienceInYears': {
      'required': 'Experience is required'
    },
    'proficiency': {
      'required': 'Proficiency is required'
    }
  }
  formErrors = {
    'fullName': '',
    'contactPrefernce': '',
    'email': '',
    'phone': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''

  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      contactPrefernce: ['emailPref'],
      email: ['Email', [Validators.required, emailDomain('instancy.com'), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      phone: ['', [Validators.pattern(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)]],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      })
    });
    this.employeeForm.get('contactPrefernce').valueChanges.subscribe(data => {
      this.setContactPrefValidation(data);
    })
    this.employeeForm.valueChanges.subscribe((value) => {
      this.logKeyValuePairs(this.employeeForm);
    })
  }

  logKeyValuePairs(group: FormGroup = this.employeeForm) {

    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
      } else {
        // console.log('key = ' + key + ', ' + 'value = ' + abstractControl.value);
        // abstractControl.disable();
        //abstractControl.markAsDirty();
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + '  ';
            }
          }
        }
      }
    })

  }

  onLoadDataClick() {
    // this.employeeForm.patchValue({
    //   fullName: 'Dileep Singh',
    //   email: 'dileep@instancy.com',
    //   skills: {
    //     skillName: 'Angular',
    //     experienceInYears: '2',
    //     proficiency: 'beginner'
    //   }
    // });
    // this.logKeyValuePairs(this.employeeForm);
    // console.log(this.formErrors);
  }
  onResetClick() {
    this.employeeForm.patchValue({
      fullName: [''],
      email: [''],
      phone: [''],
      skills: {
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['']
      }
    })
  }
  saveEmpoyee(): void {
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);
  }

  setContactPrefValidation(value: string) {
    debugger;
    const phoneControl = this.employeeForm.get('phone');
    if (value === 'phonePref') {
      phoneControl.setValidators([Validators.required, Validators.maxLength(10), Validators.pattern(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)]);
      this.showPhoneMsg = true;
    } else {
      phoneControl.clearValidators();
      this.showPhoneMsg = false;
    }
    phoneControl.updateValueAndValidity();
  }

}


function emailDomain(domainName: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email: string = control.value;
    const emailDomain = email.substring(email.lastIndexOf('@') + 1);
    if (emailDomain == '' || emailDomain.toLocaleLowerCase() === domainName.toLocaleLowerCase()) {
      return null;
    } else {
      return { 'emailDomain': true };
    }
  }
}