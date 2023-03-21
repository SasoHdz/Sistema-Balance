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

  deleteSubElement(name:string){
    let indice = this.cuentas.findIndex(c=>c.nameCount===name);

    if(indice>-1)
          this.cuentas.splice(indice,1)

    return (indice>-1);
  }

}
