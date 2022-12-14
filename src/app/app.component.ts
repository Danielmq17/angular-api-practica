import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personas:Array<any> = [];

  constructor(private personaService: PersonaService) {
    this.personaService.getPersonas().subscribe((res:any) => {
      this.personas = res;
    })
  }

}
