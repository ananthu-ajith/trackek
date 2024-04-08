import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskdetailsService {

  constructor() { }
  updated:any[]=[]


  task=[{taskname:'abc',
  description:'ascsdw'

  }]

  addtask(name:string, desc:string)
  {
    this.task.push({taskname:name,description:desc})
  }

}
