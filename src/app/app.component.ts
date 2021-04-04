import { Component, AfterViewInit, ElementRef ,ViewEncapsulation} from '@angular/core';
import { MatDialog}  from '@angular/material';
import { PopupComponent } from './popup/popup.component';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  transactionDate: string;
  referenceNumber: string;
  transactionDescription: number;
  debit: number;
  credit : number;
  status: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transactionDate: '2020-28-03', referenceNumber:'TX1000', transactionDescription: 12345,debit:20 ,credit :0   ,status: 'success'},
  {transactionDate: '2020-26-03', referenceNumber:'TX1245', transactionDescription: 12347,debit:20 ,credit :0  ,status: 'success'},
  {transactionDate: '2020-25-03', referenceNumber:'TX1256', transactionDescription: 12349,debit:0 ,credit :10  ,status: 'success'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
  title = 'BankApplication';
  displayedColumns: string[] = ['transactionDate', 'referenceNumber', 'transactionDescription','debit','credit','status'];
  dataSource = ELEMENT_DATA;

   constructor(public dialog:MatDialog){

  }


  
  openDialog(){
    this.dialog.open(PopupComponent,{
      height: '550px',
      width: '600px',
    });
  }
  
  


}





