import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../../Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task={id:0,text:"",day:"",reminder:false};

  constructor() { }

  ngOnInit(): void {
  }

}
