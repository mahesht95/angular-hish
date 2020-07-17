import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {Fields} from './fields';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  addTrans(fields:Fields[]){
    return this.http.post("http://localhost:8080/addtran",fields,{responseType:'text'});
  }

  getTrans(){
    return this.http.get("http://localhost:8080/getalltrans");
  }

}
