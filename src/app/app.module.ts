import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ButtonComponent} from './components/button/button.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {TaskComponent} from './components/task/task.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddComponent} from './components/add/add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

let routes: Routes = [
  {
    path: "",
    component: TasksComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskComponent,
    AddComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
