import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { ServicePruebaService } from '../../../service/servicioprueba.service';
import { model } from '../../../model/model';

export const datosDeHotel = {
  nombre: '',
  correo: ''
};

@Component({
  selector: 'app-hoteles-dashboard',
  templateUrl: './hoteles-dashboard.component.html',
  styleUrls: ['./hoteles-dashboard.component.css'],
  providers: [ServicePruebaService]
})
export class HotelesDasboardComponent implements OnInit {

  @Input('nombreDeHotel')
  nombre: string;
  userListInfo = [];
  BBVAcatalogue = [];
  title: string;
  texto: string;
  show: boolean = false;

  registroHotelFormGroup: FormGroup;
  constructor(private navegator: Router, private activeRoute: ActivatedRoute,
    private formBuild: FormBuilder, private service: ServicePruebaService) { }


  ngOnInit() {

    this.registroHotelFormGroup = this.formBuild.group({
      hotelsNameForm: ['Default', [Validators.maxLength(8), Validators.minLength(3)]],
      phoneNumberForm: ['', Validators.required],
      mailForm: [null, Validators.email],
      idUserForm: ['', Validators.required],
      idBBVAForm: ['', Validators.required]
    });


    this.service.getUsersCatalogue().subscribe(
      data => {
        console.log(data);
        const dataResponse: any = data;
        this.userListInfo = dataResponse;
      },
      error => console.log('Ups Tuve un error ', error));

    this.registroHotelFormGroup.controls.mailForm.setValue('josue@gmail.com');
  }

  /* Accion de navegacion*/
  btnAction() {
    console.log('Estoy en hoteles component y voy a navegar!');
    let nombre = this.registroHotelFormGroup.controls.hotelsNameForm;
    let correo = this.registroHotelFormGroup.controls.mailForm;

    if (nombre.valid && correo.valid) {
      this.navegator.navigate(['hola_dashboard/' + nombre.value + '/' + correo.value]);
    } else {
      this.registroHotelFormGroup.controls.hotelsNameForm.setValue('');
      this.registroHotelFormGroup.controls.mailForm.setValue('');
    }
    //this.navegator.navigate(['hola_dashboard',nombre,correo]);
  }

  btnActionSinParamsInURL() {
    datosDeHotel.nombre = this.registroHotelFormGroup.controls.hotelsNameForm.value;
    datosDeHotel.correo = this.registroHotelFormGroup.controls.mailForm.value;

    this.navegator.navigate(['sindatosinurl']);
  }


  validarCampos() {

    let nombre = this.registroHotelFormGroup.controls.hotelsNameForm;
    let correo = this.registroHotelFormGroup.controls.mailForm;
    console.log('Valor de Nombre', nombre);
    console.log('Valor de Correo', correo);
    if (nombre.value !== '' && correo.value !== '') {
      console.log('Campos con info');
    }
    if (nombre.valid && correo.valid) {
      console.log('Campos validaos');
    } else {
      console.log('Un campos no es valido ');
    }
  }

  mostrarTitleAndText(){
    const id = this.registroHotelFormGroup.controls.idUserForm.value;
    const obj = this.findText(this.userListInfo, id);
    this.title = obj.title;
    this.texto = obj.body;
  }

  findText(array: Array<any>, idvalue) {
    let found = array.find(function (element) {
      return element.id == idvalue;
    });
    return found;
  }

  cargar(lenguaje: string){
    console.log(lenguaje)

    const objToSend: model = new model();

    objToSend.languagecode = lenguaje;
    this.service.postBBVACatalogueWhitObj(objToSend).subscribe(data => {
      console.log('Funciono mi data es: ', data)
      const dataResponse: any = data;
      this.BBVAcatalogue = dataResponse.response.labels;
    },
  error =>{
    console.log(error.message);
  });
  }
}
