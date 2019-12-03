import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit 
{
  product : any;
  constructor( public service : DataService) 
  { }

  ngOnInit() 
  {
    let observableResult = this.service.select();
    observableResult.subscribe((result) => {

      if(result['status']==='success')
      {
        this.product = result['data'];
      }
      
      
    })
  }

}
