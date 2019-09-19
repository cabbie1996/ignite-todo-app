import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ApiServiceService } from '../api-service.service';
import { EditContactComponent } from '../edit-contact/edit-contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  dataColumn: string[] = ['1','2', '3', '4','5']
  DataSource = new MatTableDataSource()
 
  constructor(public service:ApiServiceService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.service.getAllContact().subscribe(res => {
    this.DataSource.data = res  
  })
}
deleteContact(id){
  this.service.deleteContact(id).subscribe(res=>{
    alert("Contact deleted for ID " +id)
    this.ngOnInit()
  })
}
openDialog(item){
  let dialogRef=this.dialog.open(EditContactComponent, {
    data: item
  })
  dialogRef.afterClosed().subscribe(res=>{
    this.ngOnInit()
  }) 
}
}
