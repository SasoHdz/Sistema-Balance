export class ItemCuenta {
  code: string = '';
  nameCount: string = '';
  value: number = 0;
  itemTipo: string = '';

  constructor(code: string, nameCount: string, value: number, itemTipo: string ){
    this.code = code,
    this.nameCount = nameCount,
    this.value = value,
    this.itemTipo = itemTipo
  }

  addValue(cantidad:number){
    this.value += cantidad;
  }

  resValue(cantidad:number){
    this.value -= cantidad;
  }
}
