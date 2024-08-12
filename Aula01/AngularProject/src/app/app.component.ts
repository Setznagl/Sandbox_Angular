import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectiveComponent } from "./components/directive/directive.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventComponent } from "./components/event/event.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectiveComponent, IfRenderComponent, EventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parentTitle = 'Este título foi enviado de outro componente!';
}
