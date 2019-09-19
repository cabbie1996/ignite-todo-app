import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  Form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  })
  constructor(public dialogRef: MatDialogRef<EditContactComponent>,public service:ApiServiceService, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.setValue()
  }
setValue(){
  this.Form.controls.name.setValue(this.data.name)
  this.Form.controls.phone.setValue(this.data.phone)
  this.Form.controls.email.setValue(this.data.email)
}
  onSubmit(){
    if(this.Form.valid){
      let obj=this.Form.value
      obj.id=this.data.id
      this.service.updateContact(obj,obj.id).subscribe(res => {
       this.dialogRef.close()
      })
    }
  }
}
