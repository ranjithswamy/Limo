import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostemailService } from '../services/postemail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pickUPlocation: string;
  public pickUpDate: string;
  public pickUpTime: string;
  public dropLocation: string;
  public dropDate: string;

  form: FormGroup = new FormGroup({
    pickUPlocation: new FormControl(''),
    pickUpDate: new FormControl(''),
    pickUpTime: new FormControl(''),
    dropLocation: new FormControl(''),
    dropDate: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder,
    private postemail: PostemailService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group(
      {
        pickUPlocation: [''],
        pickUpDate: [''],
        pickUpTime: [''],
        dropLocation: [''],
        dropDate: [''],
      }
    );
  }

  onSubmit() {
    console.log("Form details : ", this.form.value);
    this.postemail.sendEmail(this.form.value)
      .subscribe(
        result => {
          console.log(result);
        }
      );
  }

}
