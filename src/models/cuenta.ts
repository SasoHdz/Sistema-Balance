import { ItemCuenta } from "./ItemCuenta";

export class Cuenta {
  tipo: string = '';
  cuentas: ItemCuenta[] = [];

  constructor(tipo: string, cuentas: ItemCuenta[]){
    this.tipo =  tipo,
    this.cuentas = cuentas;
  }

  getTotal(){
    return this.cuentas.reduce((sum, itemc) => sum + itemc.value, 0);
  }

}
