import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { ServicePruebaService } from '../../../service/servicioprueba.service';
import { model } from '../../../model/model';
import * as echarts from 'echarts';


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
export class HotelesDasboardComponent implements OnInit, AfterViewInit {


  @Input('nombreDeHotel')
  nombre: string;
  userListInfo = [];
  BBVAcatalogue = [];
  title: string;
  texto: string;
  show: boolean = false;

  registroHotelFormGroup: FormGroup;


  dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
  data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
  yMax = 500;
  dataShadow = [];

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
  ngAfterViewInit(): void {
    this.cargarGrafica();
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

  mostrarTitleAndText() {
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

  cargar(lenguaje: string) {
    console.log(lenguaje)

    const objToSend: model = new model();

    objToSend.languagecode = lenguaje;
    this.service.postBBVACatalogueWhitObj(objToSend).subscribe(data => {
      console.log('Funciono mi data es: ', data)
      const dataResponse: any = data;
      this.BBVAcatalogue = dataResponse.response.labels;
    },
      error => {
        console.log(error.message);
      });
  }


  cargarGrafica() {
    for (var i = 0; i < this.data.length; i++) {
      this.dataShadow.push(this.yMax);
    }
    const option = {
      title: {
        text: '特性示例：渐变色 阴影 点击缩放',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
      },
      xAxis: {
        data: this.dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(0,0,0,0.05)' }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: this.dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' }
                ]
              )
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ]
              )
            }
          },
          data: this.data
        }
      ]
    };

    const myChart = echarts.init(document.getElementById('graficaDePruebaID'));
    const zoomSize = 6;
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
  }

}
