import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { FormsModule } from '@angular/forms';
import { CursosComponentComponent } from './components/cursos-component/cursos-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent,
            ParentDataComponent, DirectivesComponent,
            IfRenderComponent, EventosComponent,
            EmitterComponent, ChangeNumberComponent,
            ListRenderComponent, PipesComponent,
            TwoWayBindingComponent, FormsModule ,
            CursosComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Example variable
  username: String = 'Gabriel Setznagl';

  title = 'AngularMatheusBattistiClasses';
}
