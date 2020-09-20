import { Component, ViewChild, ElementRef } from '@angular/core';

import * as html2canvas from 'html2canvas';

import { rrs } from '../../data/rr-list';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-rrs',
  templateUrl: './rare-recruits.component.html',
  styleUrls: ['./rare-recruits.component.scss'],
})
export class RareRecruitsComponent {
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  public tierS = [];
  public tierA = [];
  public tierB = [];
  public tierC = [];
  public tierD = [];
  public tierE = [];
  public tierF = [...rrs];

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public downloadImage() {
    html2canvas(this.screen.nativeElement, { useCORS: true }).then((canvas) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'rr-tier-list.png';
      this.downloadLink.nativeElement.click();
    });
  }
}
