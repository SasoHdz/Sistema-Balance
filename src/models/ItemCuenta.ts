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

  setCode(newCode:string){
    this.code = newCode;
  }

  getCode(){
    return this.code;
  }

  setNameCount(newNameC:string){
    this.nameCount = newNameC;
  }

  getNameCount(){
    return this.nameCount;
  }

  setValue(n:number){
    this.value = n;
  }

  getValue(){
    return this.value;
  }

  addValue(cantidad:number){
    this.value += cantidad;
  }

  resValue(cantidad:number){
    if (this.value < cantidad) {
      throw new Error('No puedes retirar más de lo que tienes');
    }
    this.value -= cantidad;
  }
}
