import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Peripherique } from 'src/app/peripherique';
import { PeripheriqueService } from 'src/app/peripherique.service';


@Component({
  selector: 'app-peripherique',
  templateUrl: './peripherique.component.html',
  styleUrls: ['./peripherique.component.css']
})
export class PeripheriqueComponent implements OnInit {
listproduit! : Peripherique[]
produit! : Peripherique;
@Input() ref !: string;
@Output() prix :EventEmitter<number> = new EventEmitter();
  constructor( private peripheriqueService :  PeripheriqueService ) { }

  ngOnInit(): void {
    console.log(this.getProdController())
  
    
  }
  getProdController(){
   return this.peripheriqueService.getProdService().subscribe((data) => {
    this.listproduit = data.ecom
    this.produit = this.listproduit.filter(elem => elem.refProd === this.ref )[0]
   })
  }

calculPrix( value :  number){
  
  this.prix.emit(value)
  
}
}
