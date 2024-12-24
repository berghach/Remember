import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemoryGameModule } from './memory-game/memory-game.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MemoryGameModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Remember';
}
