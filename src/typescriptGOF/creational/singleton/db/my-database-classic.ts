import { User } from "../interfaces/user";

export class MydatabaseClassic {
  private static _instance: MydatabaseClassic | null = null;
  private users: User[] = [];


  private constructor() {}

  static get instance(): MydatabaseClassic {
    if (MydatabaseClassic._instance === null){
      MydatabaseClassic._instance = new MydatabaseClassic();
    }
    return MydatabaseClassic._instance;
  }

  add(user: User): void{
    this.users.push(user);
  }

  remove(index: number): void{
    this.users.splice(index, 1);
  }

  show(): void{
    for(const user of this.users){
      console.log(user);
    }
  }
}
