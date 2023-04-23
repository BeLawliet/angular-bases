import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {id: '', name: '', power: 0};

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    const newCharacter = {id: uuid(), name: this.character.name, power: this.character.power};
    this.onNewCharacter.emit(newCharacter);
    this.character = {id: '', name: '', power: 0};
  }
}
