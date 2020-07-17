import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ShowExpenseComponent } from './show-expense/show-expense.component';
import { SavingsComponent } from './savings/savings.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {GetDataService} from './get-data.service';
import { HttpClientModule } from '@angular/common/http';

const ROUTES:Routes = [
{path:'ShowDiary/AddExpense', component:AddExpenseComponent},
{path:'ShowDiary/ShowExpense', component:ShowExpenseComponent},
{path:'ShowDiary/ShowSavings', component:SavingsComponent},
{path:'ShowDiary', component:DiaryComponent},
]




@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    AddExpenseComponent,
    ShowExpenseComponent
  ],

 imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
