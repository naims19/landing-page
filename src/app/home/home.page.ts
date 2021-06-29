/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild, ElementRef} from '@angular/core';
import { AnimationController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('fade1', { read: ElementRef }) fade1: ElementRef;
  @ViewChild('fade2', { read: ElementRef }) fade2: ElementRef;
  @ViewChild('fade3', { read: ElementRef }) fade3: ElementRef;
  @ViewChild('fade4', { read: ElementRef }) fade4: ElementRef;
  @ViewChild('fade5', { read: ElementRef }) fade5: ElementRef;
  @ViewChild('fade6', { read: ElementRef }) fade6: ElementRef;
  @ViewChild('fade7', { read: ElementRef }) fade7: ElementRef;
  @ViewChild('fade8', { read: ElementRef }) fade8: ElementRef;

  constructor(private animationCtrl: AnimationController) {}

  ionViewDidEnter(){
    this.FadeIn();
  }
  FadeIn(){
    const FadeIn1 = this.animationCtrl.create('fade-in-animation')
    .addElement(this.fade1.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    const FadeIn2 = this.animationCtrl.create('fade-in-animation')
    .addElement(this.fade2.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    const FadeIn3 = this.animationCtrl.create('fade-in-animation')
    .addElement(this.fade3.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    const FadeIn4 = this.animationCtrl.create('fade-in-animation')
    .addElement(this.fade4.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    const FadeIn5 = this.animationCtrl.create('fade-in-animation')
    .addElement(this.fade5.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    const FadeIn6 = this.animationCtrl.create('fade-in-animation')
    .addElement(this.fade6.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    const FadeIn7 = this.animationCtrl.create('fade-in-animation')
    .addElement(this.fade7.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    const FadeIn8 = this.animationCtrl.create('fade-in-animation')
    .addElement(this.fade8.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    FadeIn1.play();
    FadeIn2.play();
    FadeIn3.play();
    FadeIn4.play();
    FadeIn5.play();
    FadeIn6.play();
    FadeIn7.play();
    FadeIn8.play();
  }
}