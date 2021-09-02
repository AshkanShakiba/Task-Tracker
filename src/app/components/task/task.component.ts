import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task={id:0,text:"",day:"",reminder:false};
  faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
