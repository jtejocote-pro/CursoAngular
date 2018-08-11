import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';

export const datosDeHotel = {
  nombre: '',
  correo: ''
};

@Component({
  selector: 'app-hoteles-dashboard',
  templateUrl: './hoteles-dashboard.component.html',
  styleUrls: ['./hoteles-dashboard.component.css']
})
export class HotelesDasboardComponent implements OnInit {

  @Input('nombreDeHotel')
  nombre: string;

  registroHotelFormGroup: FormGroup;
  constructor(private navegator:Router, private activeRoute: ActivatedRoute,
  private formBuild: FormBuilder) { }


  ngOnInit() {
    
    this.registroHotelFormGroup = this.formBuild.group({
      hotelsNameForm: ['Default',[ Validators.maxLength(8), Validators.minLength(3)] ],
      phoneNumberForm: ['', Validators.required],
      mailForm: [null, Validators.email]
    });

    this.registroHotelFormGroup.controls.mailForm.setValue('josue@gmail.com');
  } 

  /* Accion de navegacion*/
  btnAction()
  {
    console.log('Estoy en hoteles component y voy a navegar!');
    let nombre = this.registroHotelFormGroup.controls.hotelsNameForm;
    let correo = this.registroHotelFormGroup.controls.mailForm;

    if (nombre.valid && correo.valid){
      this.navegator.navigate(['hola_dashboard/'+nombre.value+'/'+correo.value]);
    }else{
      this.registroHotelFormGroup.controls.hotelsNameForm.setValue('');
      this.registroHotelFormGroup.controls.mailForm.setValue('');
    }
    //this.navegator.navigate(['hola_dashboard',nombre,correo]);
  }

  btnActionSinParamsInURL(){
     datosDeHotel.nombre = this.registroHotelFormGroup.controls.hotelsNameForm.value;
     datosDeHotel.correo = this.registroHotelFormGroup.controls.mailForm.value;

    this.navegator.navigate(['sindatosinurl']);
  }


  validarCampos(){
    
    let nombre = this.registroHotelFormGroup.controls.hotelsNameForm;
    let correo = this.registroHotelFormGroup.controls.mailForm;
    console.log('Valor de Nombre', nombre);
    console.log('Valor de Correo', correo);
    if (nombre.value !== '' && correo.value !== ''){
      console.log('Campos con info');
    }
    if (nombre.valid && correo.valid){
      console.log('Campos validaos');
    } else {
      console.log('Un campos no es valido ');
    }
  }
}
