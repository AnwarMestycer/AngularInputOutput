import { Component, OnInit } from '@angular/core';
import { Peripherique } from 'src/app/peripherique';
import { PeripheriqueService } from 'src/app/peripherique.service';

@Component({
  selector: 'app-listeperipheriques',
  templateUrl: './listeperipheriques.component.html',
  styleUrls: ['./listeperipheriques.component.css']
})
export class ListeperipheriquesComponent implements OnInit {
  list! : Peripherique[]
  x !: number;
  ttc = 0;
  constructor( private peripheriqueService : PeripheriqueService) { }

  ngOnInit(): void {
    this.getAllController()
   
    
  }
  getAllController(){
    return this.peripheriqueService.getProdService().subscribe((data) => {
      //console.log(data)
      this.list = data.ecom
      console.log(this.list)
    })
   
  }
  getx(y:number){
    console.log(` ttc = ${this.ttc += y}`)
  }
}
