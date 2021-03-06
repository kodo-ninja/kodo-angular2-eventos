/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'evento-de-click-sem-bubble'
})
@View({
    template: `
        <hr />
        <h3>CLICK - <strong>sem</strong> bubble</h3>

        <button type="button"
                (click)="fuiClicado()">clique aqui</button>

        <p [inner-text]="logDoClick"></p>
    `
})

export class EventoDeClickSemBubbleCmp {
    logDoClick: string = '';

    fuiClicado() {
        this.logDoClick = `Fui clicado em: ${new Date()}. O click aconteceu no elemento pai (evento-de-click-sem-bubble)).`;
    }
}
