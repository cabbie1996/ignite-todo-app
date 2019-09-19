import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  Form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  })
  
  constructor(public service:ApiServiceService) { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.Form.valid){
      let obj=this.Form.value
      this.service.createContact(obj).subscribe(res => {
        alert("Contact Created Successfully")
      })
    }
  }
}
