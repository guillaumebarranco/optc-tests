import { Component, OnInit } from '@angular/core';
import { dualLegends } from 'src/app/data/dual-legends';
import { singleLegends } from 'src/app/data/single-legends';
import { Legend } from 'src/app/models/legend.interface';
import { PvpBuff } from 'src/app/models/pvp.interface';

@Component({
  selector: 'app-pvp',
  templateUrl: './pvp.component.html',
  styleUrls: ['./pvp.component.scss'],
})
export class PvpComponent implements OnInit {
  public pvpCharacters: Legend[] = [];

  public ngOnInit(): void {
    this.pvpCharacters = singleLegends
      .concat(dualLegends)
      .filter(l => !!l.pvpData);
    console.log('this.pvpCharacters', this.pvpCharacters);
  }

  public _getTotalBuff(buff: PvpBuff, currentCharacter: Legend) {
    return this.pvpCharacters.reduce((total, character) => {
      const characterBoostsAtk = character.pvpData.capacityAttributes.find(
        a => a[buff]
      );

      if (characterBoostsAtk) {
        if (characterBoostsAtk[buff].targets.includes('ALL')) {
          return total + characterBoostsAtk[buff].value;
        }

        if (
          characterBoostsAtk[buff].targets.includes('SELF') &&
          currentCharacter.id === character.id
        ) {
          return total + characterBoostsAtk[buff].value;
        }

        if (currentCharacter.singleCharacterData) {
          const currentCharacterIsBoostedByClass =
            characterBoostsAtk[buff].targets.includes(
              currentCharacter.singleCharacterData.classes[0]
            ) ||
            characterBoostsAtk[buff].targets.includes(
              currentCharacter.singleCharacterData.classes[1]
            );

          if (currentCharacterIsBoostedByClass) {
            return total + characterBoostsAtk[buff].value;
          }

          const currentCharacterIsBoostedByColor = characterBoostsAtk[
            buff
          ].targets.includes(currentCharacter.singleCharacterData.type);

          if (currentCharacterIsBoostedByColor) {
            return total + characterBoostsAtk[buff].value;
          }
        }

        if (currentCharacter.dualCharacterData) {
          const currentCharacterIsBoostedByClass =
            characterBoostsAtk[buff].targets.includes(
              currentCharacter.dualCharacterData.finalForm.classes[0]
            ) ||
            characterBoostsAtk[buff].targets.includes(
              currentCharacter.dualCharacterData.finalForm.classes[1]
            );

          if (currentCharacterIsBoostedByClass) {
            return total + characterBoostsAtk[buff].value;
          }
        }
      }

      return total;
    }, 0);
  }

  public _getTotalAtk(characterId: string): number {
    const currentCharacter = this.pvpCharacters.find(c => c.id === characterId);
    return this._getTotalBuff(PvpBuff.ATK, currentCharacter);
  }

  public _getTotalDef(characterId: string): number {
    const currentCharacter = this.pvpCharacters.find(c => c.id === characterId);
    return this._getTotalBuff(PvpBuff.DEF, currentCharacter);
  }

  public _getTotalSpeed(characterId: string): number {
    const currentCharacter = this.pvpCharacters.find(c => c.id === characterId);
    return this._getTotalBuff(PvpBuff.SPEED, currentCharacter);
  }

  public _getTotalHp(characterId: string): number {
    const currentCharacter = this.pvpCharacters.find(c => c.id === characterId);
    return this._getTotalBuff(PvpBuff.HP, currentCharacter);
  }

  public _getTotalCtSpeed(characterId: string): number {
    const currentCharacter = this.pvpCharacters.find(c => c.id === characterId);
    return this._getTotalBuff(PvpBuff.CT_SPEED, currentCharacter);
  }
}
