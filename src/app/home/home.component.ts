import { Component, OnInit } from '@angular/core';
import { IProducts } from '../iproducts';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  productsData:IProducts[]=[]
  
  constructor(private _ProductsService:ProductsService){

  }
  ngOnInit(): void {
    this._ProductsService.getproducts().subscribe({
      next:(res)=>{
        this.productsData= res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
        
      },
    })
  }
}
