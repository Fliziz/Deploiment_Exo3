import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule], //Import ses modules dans le html css ect... 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

    public formApp : FormGroup;

    public postArticle : FormGroup //Form group permet la liason avec le formulaire html

  constructor(private formBuilder : FormBuilder){
    this.formApp = new FormGroup({});
    this.postArticle = new FormGroup({});
  }

  onSubmit(){ // S'exécute quand on submit / on envoi / en l'occurence on envoie les valeurs du formulaire
    console.log(this.formApp.value)
  }

  ngOnInit(): void { //S'active au lancement de la page 
    this.formApp = this.formBuilder.group({
      Email: ["",Validators.required,Validators.email],
      password: ["",Validators.required]
      
    })

    this.formApp = this.formBuilder.group({
      name: ["",[Validators.required,Validators.minLength(2)]],
      Email: ["",Validators.required,Validators.email],
      message:["",Validators.required],
      terms: [false,Validators.requiredTrue],
      gendre: []
    })

    console.log(this.formApp.value)
  }
}
