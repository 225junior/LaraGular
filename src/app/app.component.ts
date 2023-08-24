import { Component } from '@angular/core';
import { IPerson } from './Models/PersonInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'LaraGular';
  updateSatus(person: IPerson): void {
    if (person.status === 1) {
      alert("Désactivation du Status");
    }else{
      alert("Activation du Status");
    }
  }

  persons: IPerson[] = [
    {
      name: "Yao yao Jules",
      sex: 1,
      status: 0,
      photo: null
    },
    {
      name: "Aïcha Diallo",
      sex: 0,
      status: 1,
      photo: null
    }

  ]


}
