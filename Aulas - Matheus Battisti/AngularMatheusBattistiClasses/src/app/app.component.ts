import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Example variable
  username: String = 'Gabriel Setznagl';

  title = 'AngularMatheusBattistiClasses';
}
