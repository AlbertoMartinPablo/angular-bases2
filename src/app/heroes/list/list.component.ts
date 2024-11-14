import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thror'];
  public heroeBorrado?:string;

  public borrarUltimoHeroe(): void {
    this.heroeBorrado = this.heroNames.pop();
    console.log(this.heroeBorrado);

  }
}
