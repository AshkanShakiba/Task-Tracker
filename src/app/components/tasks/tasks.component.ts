import {Component, OnInit} from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  taskService: TaskService;

  //constructor(private taskService:TaskService) {}

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    });
  }

  delete(task: Task): void {
    this.taskService.deleteTask(task).subscribe((tasks) => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
    });
  }

  toggle(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.toggleTask(task).subscribe();
  }

  add(task:Task){
    this.taskService.addTask(task).subscribe((task) => {this.tasks.push(task)});
  }
}
