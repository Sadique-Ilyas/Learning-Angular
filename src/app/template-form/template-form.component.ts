import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Candidate } from './Candidate';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})

export class TemplateFormComponent {

  candidate: Candidate = new Candidate();
  
  techStack: string[] = [];

  addTechStack(event: any) {
    var value = event.target.value;
    var check = event.target.checked;
    console.log(value + " " + check);
    if(check) {
      this.techStack.push(value);
    }
    else{
      this.techStack.splice(this.techStack.indexOf(value), 1);
    }
  }

  saveFormData(form: any) {
    this.candidate = new Candidate(form.name, form.email, form.phoneNumber, form.country, form.gender, this.techStack, form.terms);
  }
}