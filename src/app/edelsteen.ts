import { GemsListComponent } from './gems-list/gems-list.component';

export class Edelsteen {
    constructor(public naam: string, public prijs: number, public teKoop: boolean, public uitverkocht: boolean, public schittering: any, public toegevoegdOp: Date){
        
    }
}
