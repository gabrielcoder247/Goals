import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  goals = [
    new Goal(1,'watch Finding Nemo'),
    new Goal(2,'Buy Cookies'),
    new Goal(3,'Get new phone case'),
    new Goal(4,'Get Dog Food'),
    new Goal(5,'Solve math homework'),
    new Goal(6,'plot my world domination plans')
   ]
}

