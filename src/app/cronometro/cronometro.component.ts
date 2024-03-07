import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {

  valor: number = 0;
  bool: boolean = true;
  async sumar(){
    while(this.bool==true){
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    }
  }

  async pausar(){
    await new Promise(f => stop);
  }

}
