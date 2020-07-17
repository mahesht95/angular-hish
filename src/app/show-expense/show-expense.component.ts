import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service';
import {Fields} from '../fields';

@Component({
  selector: 'app-show-expense',
  templateUrl: './show-expense.component.html',
  styleUrls: ['./show-expense.component.css']
})
export class ShowExpenseComponent implements OnInit {

fields: any;
showCheckBox:boolean;
selectedRow:any;
selectedRows:any = [];

  constructor(private service:GetDataService) { 
     service.getTrans().subscribe((data)=>this.fields = (data));
    this.showCheckBox = false;
    this.selectedRow = [];
  }
      
  ngOnInit(): void {
  }
  updateRecords(){
      this.showCheckBox = true;
  }

  selectRow(index){
    this.selectedRows.push(index);
  }

}
