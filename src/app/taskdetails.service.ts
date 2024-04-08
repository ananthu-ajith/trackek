import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskdetailsService {

  constructor() { }
  updated:any[]=[]


  task=[{taskname:'Task 1',
  description:'Lorem ipsum dolor sit amet'

  },
  {taskname:'Task 2',
  description:'Lorem ipsum dolor sit amet'

  },
  {taskname:'Task 3',
  description:'Lorem ipsum dolor sit amet'

  }]

  addtask(name:string, desc:string)
  {
    this.task.push({taskname:name,description:desc})
  }

}
