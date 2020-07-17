import { Component, OnInit } from '@angular/core';
import {Fields} from '../fields';
import {GetDataService} from '../get-data.service';



@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
 fields: Fields[] = [];
 newAttribute: any ={};
isIndexZero:boolean = false;
reponseMessage:string;
reposneSuccess:boolean;
constructor(private service:GetDataService) { 
  this.reposneSuccess=false;
}

  ngOnInit(): void {
  }

    addFieldValue() {      
        this.fields.push(this.newAttribute);
        this.newAttribute={};
        this.isIndexZero = true;
         this.reposneSuccess=false;
    }

    removeField(index){
          this.fields.splice(index, 1);
    }

    addData(){
      this.service.addTrans(this.fields).subscribe((data)=>this.reponseMessage=data);
       this.reposneSuccess=true;
    }

    
}
