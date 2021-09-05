import {Component, Input, OnInit} from '@angular/core';
import {UIService} from "../../services/ui.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  uiService: UIService;
  router: Router;

  constructor(uiService: UIService, router: Router) {
    this.uiService = uiService;
    this.router = router;
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleSubject();
  }

  getShowAdd(): boolean {
    return this.uiService.getShowAdd();
  }

  showButton(): boolean {
    return this.router.url==="/";
  }
}
