import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {id: 0, text: "", day: "", reminder: false};
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteTask.emit();
  }

  toggle(): void {
    this.toggleTask.emit();
  }
}
