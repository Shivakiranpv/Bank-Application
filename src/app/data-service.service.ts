import { Injectable } from '@angular/core';

import{  HttpClient }  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

 

 
  url='http://localhost:8080/hello'
  constructor(private http : HttpClient) { }


  sendData(userData){
   return  this.http.post<any>(this.url,userData,);
  }
}
