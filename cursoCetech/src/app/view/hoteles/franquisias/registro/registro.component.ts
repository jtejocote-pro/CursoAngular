import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroHotelFormGroup: FormGroup;
  textoDevariables: string;
  constructor(private formBilder: FormBuilder) { }

  ngOnInit() {
    this.registroHotelFormGroup = this.formBilder.group({
      hotelsNameForm: [''],
      phoneNumberForm: ['', Validators.required],
      mailForm: ['', Validators.email]
    });
  }

  print(){
    const controlsForm = this.registroHotelFormGroup.controls;
    console.log('Fomrularion Controls: ', controlsForm);
    if (controlsForm.hotelsNameForm.value !== '' 
      && controlsForm.phoneNumberForm.value !== ''
      && controlsForm.mailForm.value !== ''){
        this.textoDevariables = 'Mi nombre es : '+ controlsForm.hotelsNameForm.value
        + ' Mi nummero es: ' + controlsForm.phoneNumberForm.value + ' Mi correo es: '
        + controlsForm.mailForm.valid ;
    }else {
      this.textoDevariables = 'No haz capturado nada weon';
    }

  }

}
