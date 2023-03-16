import { Component } from '@angular/core';

import { Cuenta } from 'src/models/cuenta';
import { ItemCuenta } from 'src/models/ItemCuenta';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {

/*   tableAct: Cuenta =
  {
    tipo: 'Activo',
    cuentas: [
      {
        code: '1100',
        nameCount:'Caja' ,
        value: 20000,
        itemTipo: 'C',
      },
      {
        code: '1200',
        nameCount: 'Bancos',
        value: 240000,
        itemTipo: 'C',
      },
      {
        code:'1300' ,
        nameCount:'Clientes' ,
        value: 245000,
        itemTipo: 'C',
      },
      {
        code:'1400' ,
        nameCount: 'Almacenes',
        value: 300000,
        itemTipo: 'C',
      },
      {
        code: '1500',
        nameCount: 'Deudores Diversos',
        value: 10000,
        itemTipo: 'C',
      },
      {
        code: '1600',
        nameCount: 'Edificios',
        value: 150000,
        itemTipo: 'F',
      },
      {
        code: '1700',
        nameCount: 'Equipo Transporte',
        value: 60000,
        itemTipo: 'F',
      }
    ]
  }

  tablePas: Cuenta =
  {
    tipo: 'Pasivo',
    cuentas: [
      {
        code: '2100',
        nameCount:'Proveedores' ,
        value: 125000,
        itemTipo: 'C',
      },
      {
        code: '2200',
        nameCount: 'Documentos por pagar',
        value: 70000,
        itemTipo: 'C',
      },
      {
        code:'2300' ,
        nameCount:'Acreedores Diversos' ,
        value: 10000,
        itemTipo: 'C',
      },
      {
        code:'2400' ,
        nameCount: 'Impuestos por pagar',
        value: 20000,
        itemTipo: 'C',
      },
      {
        code: '2500',
        nameCount: 'Acreedores hipotecarios',
        value: 60000,
        itemTipo: 'F',
      }
    ]
  }

  tableCa: Cuenta =
  {
    tipo: 'Capital',
    cuentas: [
      {
        code: '3100',
        nameCount:'Capital Social' ,
        value: 350000,
        itemTipo: 'C',
      },
      {
        code: '3200',
        nameCount: 'Utilidades Retenidas',
        value: 390000,
        itemTipo: 'C',
      },
    ]
  } */

  tablesCuentas: Cuenta[] = [
    {
      tipo: 'Activo',
      cuentas: [
        {
          code: '1100',
          nameCount:'Caja' ,
          value: 20000,
          itemTipo: 'C',
        },
        {
          code: '1200',
          nameCount: 'Bancos',
          value: 240000,
          itemTipo: 'C',
        },
        {
          code:'1300' ,
          nameCount:'Clientes' ,
          value: 245000,
          itemTipo: 'C',
        },
        {
          code:'1400' ,
          nameCount: 'Almacenes',
          value: 300000,
          itemTipo: 'C',
        },
        {
          code: '1500',
          nameCount: 'Deudores Diversos',
          value: 10000,
          itemTipo: 'C',
        },
        {
          code: '1600',
          nameCount: 'Edificios',
          value: 150000,
          itemTipo: 'F',
        },
        {
          code: '1700',
          nameCount: 'Equipo Transporte',
          value: 60000,
          itemTipo: 'F',
        }
      ]
    },
    {
      tipo: 'Pasivo',
      cuentas: [
        {
          code: '2100',
          nameCount:'Proveedores' ,
          value: 125000,
          itemTipo: 'C',
        },
        {
          code: '2200',
          nameCount: 'Documentos por pagar',
          value: 70000,
          itemTipo: 'C',
        },
        {
          code:'2300' ,
          nameCount:'Acreedores Diversos' ,
          value: 10000,
          itemTipo: 'C',
        },
        {
          code:'2400' ,
          nameCount: 'Impuestos por pagar',
          value: 20000,
          itemTipo: 'C',
        },
        {
          code: '2500',
          nameCount: 'Acreedores hipotecarios',
          value: 60000,
          itemTipo: 'F',
        }
      ]
    },
    {
      tipo: 'Capital',
      cuentas: [
        {
          code: '3100',
          nameCount:'Capital Social' ,
          value: 350000,
          itemTipo: 'C',
        },
        {
          code: '3200',
          nameCount: 'Utilidades Retenidas',
          value: 390000,
          itemTipo: 'C',
        },
      ]
    }

  ]

  totalCuenta(cuentas:ItemCuenta[]){
    return cuentas.reduce(
      (sum, itemc) => sum + itemc.value,
      0
    )
  }


}
