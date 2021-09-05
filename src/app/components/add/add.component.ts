import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {UIService} from "../../services/ui.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  @Output() onSubmit: EventEmitter<Task> = new EventEmitter();

  uiService: UIService;

  constructor(uiService: UIService) {
    this.uiService = uiService;
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (!this.text || !this.day) {
      window.alert("Please fill all fields!");
      return;
    }

    let task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onSubmit.emit(task);

    this.text = "";
    this.day = "";
    this.reminder = false;
    this.uiService.toggleSubject();
  }

  getShowAdd(): boolean {
    return this.uiService.getShowAdd();
  }
}
