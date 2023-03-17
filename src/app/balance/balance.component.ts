import { Component, OnInit } from '@angular/core';

import { Cuenta } from 'src/models/cuenta';
import { ItemCuenta } from 'src/models/ItemCuenta';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent {
  debe: string = '';
  haber: string = '';
  tdebe: string = '';
  thaber: string = '';
  monto: number = 0;
  keyStorage = 'balance';
  activo = 0;
  pasivo = 0;
  capital = 0;
  sameCount = false;
  message :string = '';
  codigo:string = '';
  nombre: string = '';
  tipo: string = '';
  montonew: number = 0;

  tablesCuentasInfo: Cuenta[] = [
    new Cuenta('Activo', [
      new ItemCuenta('1100', 'Caja', 20000, 'C'),
      new ItemCuenta('1200', 'Bancos', 240000, 'C'),
      new ItemCuenta('1300', 'Clientes', 245000, 'C'),
      new ItemCuenta('1400', 'Almacenes', 300000, 'C'),
      new ItemCuenta('1500', 'Deudores Diversos', 10000, 'C'),
      new ItemCuenta('1600', 'Edificios', 150000, 'F'),
      new ItemCuenta('1700', 'Equipo Transporte', 60000, 'F'),
    ]),
    new Cuenta('Pasivo', [
      new ItemCuenta('2100', 'Proveedores', 125000, 'C'),
      new ItemCuenta('2200', 'Documentos por pagar', 70000, 'C'),
      new ItemCuenta('2300', 'Acreedores Diversos', 10000, 'C'),
      new ItemCuenta('2400', 'Impuestos por pagar', 20000, 'C'),
      new ItemCuenta('2500', 'Acreedores hipotecarios', 60000, 'F'),
    ]),
    new Cuenta('Capital', [
      new ItemCuenta('3100', 'Capital Social', 350000, 'C'),
      new ItemCuenta('3200', 'Utilidades Retenidas', 390000, 'C'),
    ]),
  ];

  tablesCuentas: Cuenta[] = [];

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

  ngOnInit(): void {
    //debugger

    const localStorageItem = localStorage.getItem(this.keyStorage);
    if (!localStorageItem) {
      localStorage.setItem(
        this.keyStorage,
        JSON.stringify(this.tablesCuentasInfo)
      );
      this.tablesCuentas = this.tablesCuentasInfo;
    } else {
      //debugger
      this.tablesCuentasInfo = JSON.parse(localStorageItem);
      let listCuentas: ItemCuenta[] = [];
      this.tablesCuentas = this.tablesCuentasInfo.map((c) => {
        listCuentas = c.cuentas.map((lc) => {
          return new ItemCuenta(lc.code, lc.nameCount, lc.value, lc.itemTipo);
        });

        return new Cuenta(c.tipo, listCuentas);
      });
    }

    this.totalCuenta();
  }

  totalCuenta() {
    this.activo = this.tablesCuentas[0].getTotal();
    this.pasivo = this.tablesCuentas[1].getTotal();
    this.capital = this.tablesCuentas[2].getTotal();
  }

  verificarMov(disminuye: string, monto: number) {
    let valor = 0;
    this.tablesCuentas.forEach((cuenta) => {
      let i = cuenta.cuentas.findIndex((c) => c.nameCount === disminuye);
      if (i) {
        valor = cuenta.cuentas[i].value;
      }
    });
    return monto <= valor;
  }

  movimiento(nombreC: string, monto: number, op: number) {

    let indice = this.tablesCuentas[0].cuentas.findIndex(
      (c) => c.nameCount === nombreC
    );
    console.log(indice);
    if (indice >= 0) {
      //console.log(indice + "If 1");
      //debugger
      op === 1
      if(op===1){
        this.tablesCuentas[0].cuentas[indice].addValue(monto)
      }
      else {
        try {
         this.tablesCuentas[0].cuentas[indice].resValue(monto);
        } catch (error) {
          this.message="Error no puedes sacar mas de lo que tienes";
          console.log(error);
        }
      }

        console.log(this.tablesCuentas[0].cuentas[indice]);

      //debugger
    } else {
      indice = this.tablesCuentas[1].cuentas.findIndex(
        (c) => c.nameCount === nombreC
      );
      if (indice >= 0) {
        //console.log(indice + "If 2");
        op === 1
      if(op===1){
        this.tablesCuentas[1].cuentas[indice].addValue(monto)
      }
      else {
        try {
         this.tablesCuentas[1].cuentas[indice].resValue(monto);
        } catch (error) {
          this.message="Error no puedes sacar mas de lo que tienes";
          console.log(error);
        }
      }

          console.log(this.tablesCuentas[1].cuentas[indice]);
      } else {
        indice = this.tablesCuentas[2].cuentas.findIndex(
          (c) => c.nameCount === nombreC
        );
        //console.log(indice + "Else final");
        op === 1
      if(op===1){
        this.tablesCuentas[2].cuentas[indice].addValue(monto)
      }
      else {
        try {
         this.tablesCuentas[2].cuentas[indice].resValue(monto);
        } catch (error) {
          this.message="Error no puedes sacar mas de lo que tienes";
          console.log(error);
        }
      }
          console.log(this.tablesCuentas[2].cuentas[indice]);

      }
    }
    this.totalCuenta();
    //console.log(this.tablesCuentas);
  }

  isActive(cuenta: string) {
    return this.tablesCuentas[0].cuentas.find((c) => c.nameCount === cuenta);
  }

  modificarCuenta(debe: string, haber: string, monto: number) {
    //Debe se sumara la cantidad de haber
    //Verifica que la cantidad haber, es valida
    if(debe===haber){
      this.sameCount=true;
    }
    else {
      this.sameCount=false;
      debugger
      this.isActive(debe)
      ? this.movimiento(debe, monto, 1)
      : this.movimiento(debe, monto, 0);

      this.isActive(haber)
        ? this.movimiento(haber, monto, 0)
        : this.movimiento(haber, monto, 1);

      localStorage.setItem(this.keyStorage, JSON.stringify(this.tablesCuentas));
    }

  }

  mostrar() {
    console.log(this.tablesCuentas);
  }

  addCuenta(code:string, nombre:string, monto:number,tipo:string){
    const c = new ItemCuenta(code,nombre,monto,'C');
    this.tablesCuentas.map(e=>{
      if(e.tipo === tipo) e.cuentas.push(c);
    });

    this.totalCuenta()
  }
}
