import {Component, Input, OnInit} from '@angular/core';
import {UIService} from "../../services/ui.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  uiService: UIService;

  constructor(uiService: UIService) {
    this.uiService = uiService;
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleSubject();
  }

  getShowAdd(): boolean {
    return this.uiService.getShowAdd();
  }
}
