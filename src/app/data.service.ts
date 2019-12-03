import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private helper : HttpClient )

  {  }

  select()
  {
    return this.helper.get("http://172.18.4.224:8080/product")
  }
}
