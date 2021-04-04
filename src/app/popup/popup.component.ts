import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {



  
  constructor(private fb:FormBuilder, private service : DataServiceService) { 

  }

  ngOnInit() {
  }

  get firstName(){
    return this.submitForm.get('firstName');
  }

  get lastName(){
    return this.submitForm.get('lastName');
  }

submitForm= this.fb.group({
  firstName: ['',Validators.required],
  lastName :['',Validators.required]

});

onSubmit(){
  console.log(this.submitForm.value);

  this.service.sendData(this.submitForm.value).subscribe(
     respsonse => console.log('sucess' ,respsonse),
     error => console.log('error in ',error)
  );

  
}

}

