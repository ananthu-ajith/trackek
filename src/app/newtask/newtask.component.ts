import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskdetailsService } from '../taskdetails.service';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.scss'
})
export class NewtaskComponent {

  form!:FormGroup


  constructor(public taskdetails:TaskdetailsService,private fb:FormBuilder){}

  ngOnInit()
  {
    this.form=this.fb.group({
      taskname:['',Validators.required],
      description:['',Validators.required]
    })
  }
    submit(a:string,b:string)
  {
  this.taskdetails.addtask(a,b)
  this.form.reset()
  console.log(this.taskdetails.updated);
  
  
  }

  abcd(a:string,b:string)
  {
    this.taskdetails.addtask(a,b)
    this.form.reset()
    console.log(this.taskdetails.updated);
    this.taskdetails.updated.splice(0,1)
  }

  
}
