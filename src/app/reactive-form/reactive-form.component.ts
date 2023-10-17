import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Candidate } from './Candidate';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  techStack: string[] = [];

  addTechStack(event: any) {
    var value = event.target.value;
    var check = event.target.checked;
    if(check) {
      this.techStack.push(value);
    }
    else{
      this.techStack.splice(this.techStack.indexOf(value), 1);
    }
  }
  
  form = new FormGroup({
    "name": new FormControl("Messi", Validators.required),
    "email": new FormControl("Messi123@gmail.com", Validators.required),
    "phoneNumber": new FormControl("45545625", Validators.required),
    "country": new FormControl("Argentina", Validators.required),
    "gender": new FormControl("", Validators.required),
    "technology": new FormControl(false, Validators.requiredTrue),
    "terms": new FormControl(false, Validators.requiredTrue),
  });

  // get formControl() {
  //   return this.form.controls;
  // }

  candidate: Candidate = new Candidate();
  
  saveFormData() {
    this.candidate = new Candidate(this.form.controls.name.value!,
                                   this.form.controls.email.value!,
                                   this.form.controls.phoneNumber.value!,
                                   this.form.controls.country.value!,
                                   this.form.controls.gender.value!,
                                   this.techStack,
                                   this.form.controls.terms.value!);
                                   
    console.log(this.candidate);
  }
}