export class Todo{
  sno: number
  title: String
  description: String
  active: boolean

  constructor(){
    this.sno = 0;
    this.title = "";
    this.description = "";
    this.active = false
  }
}
