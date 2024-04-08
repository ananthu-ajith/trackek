import { Component } from '@angular/core';
import { TaskdetailsService } from '../taskdetails.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatetask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './updatetask.component.html',
  styleUrl: './updatetask.component.scss'
})
export class UpdatetaskComponent {

  abc:any[]=['']
  constructor(private taskdetail:TaskdetailsService){}

  ngOnInit()
  {this.abc=this.taskdetail.task;
  console.log(this.abc);
  
  }

  delete(i:number)
  {
    this.taskdetail.task.splice(i,1)
    console.log(this.taskdetail.task);
    
  }

  update(i:number)
  {
    if (i === 0) {
      this.taskdetail.updated = this.taskdetail.task.slice(0, 1);
    } else {
      this.taskdetail.updated = this.taskdetail.task.slice(i,i+1);
    }
    console.log(this.taskdetail.updated);
    this.taskdetail.task.splice(i,1)

  }
  

}
