import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofPaymentGroupComponent } from './proof-payment-group.component';
import { FooterDefaultComponent } from 'src/app/shared/components/footer-default/footer-default.component';
import { PageComponent } from 'src/app/shared/components/components-atom/page/page.component';
import { VoucherGroupComponent } from 'src/app/shared/components/components-organisms/voucher-group/voucher-group.component';
import { BackButtonPageComponent } from 'src/app/shared/components/components-atom/back-button-page/back-button-page.component';
import { HeaderMainComponent } from 'src/app/shared/components/header-main/header-main.component';
import { ButtonComponent } from 'src/app/shared/components/components-atom/button/button.component';
import { ParagraphComponent } from 'src/app/shared/components/components-atom/paragraph/paragraph.component';
import { CardAccountDetailComponent } from 'src/app/shared/components/card-account-detail/card-account-detail.component';
import { MessagePaymentComponent } from 'src/app/shared/components/message-payment/message-payment.component';
import { CardVoucherComponent } from 'src/app/shared/components/card-voucher/card-voucher.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CardDefaultComponent } from 'src/app/shared/components/components-atom/card-default/card-default.component';
import { CheckboxComponent } from 'src/app/shared/components/components-atom/checkbox/checkbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CapsuleComponent } from 'src/app/shared/components/capsule/capsule.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ParametroService } from '../../../domain/parametro.service';
import { InputComponent } from 'src/app/shared/components/components-atom/input/input.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { ModalTitleComponent } from 'src/app/shared/components/components-atom/modal-title/modal-title.component';
import { ImageComponent } from 'src/app/shared/components/components-atom/image/image.component';
import { Button2Component } from 'src/app/shared/components/button/button2/button2.component';
import { PageTitleComponent } from 'src/app/shared/components/components-atom/page-title/page-title.component';
import { ModalIconComponent } from 'src/app/shared/components/modal-icon/modal-icon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProofPaymentGroupComponent', () => {
  let component: ProofPaymentGroupComponent;
  let fixture: ComponentFixture<ProofPaymentGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProofPaymentGroupComponent,
        FooterDefaultComponent,
        PageComponent,
        VoucherGroupComponent,
        BackButtonPageComponent,
        HeaderMainComponent,
        ButtonComponent,
        ParagraphComponent,
        CardAccountDetailComponent,
        MessagePaymentComponent,
        CardVoucherComponent,
        IconComponent,
        SidebarComponent,
        CardDefaultComponent,
        CheckboxComponent,
        CapsuleComponent,
        InputComponent,
        ModalComponent,
        ModalTitleComponent,
        ImageComponent,
        Button2Component,
        PageTitleComponent,
        ModalIconComponent
      ],
      imports: [
        NgbModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ParametroService, useClass: ParametroServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofPaymentGroupComponent);
    component = fixture.componentInstance;
    component.data = {
      isSingle: true,
      detail: [{
        name: "Nº de cliente",
        value: "185617600",
      }],
      message: "El pago de tu cuenta se realizó con éxito",
      value: 9990,
      from: "Cuenta RUT N° 18362578"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class ParametroServiceMock {
  mapParametros = new Map<string, any>();
  public addParametro(key: string, valor: any): void {
    this.mapParametros.set(key, valor);
  }
  public getParametro(key: string): any {
    const comprobante : any = 
      {
        comprobante : [{
          "idTransaccion" : 135792468,
          "montoTotalPagado": 9990,
          "cuentaPago": 18362578,
          "nroDocumentos": 1,
          "fecha": "",
          "hora": "",
          "detalle": [
            {
              "idCliente": "185617600",
              "nombreAlias": "Usuario Serviestado",
              "empresa": "Movistar",
              "servicio": "Movistar Hogar",
              "nroDocumento": 99969999,
              "montoPagado": 9990,
              "correlativo": 1
            }
          ]
      }]};
    return comprobante;
  }
  public deleteParametro(key: string): void {

  }
}
