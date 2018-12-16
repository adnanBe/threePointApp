import { TRANSACTION } from './transaction';
import { Transcation } from './transaction.model';

export class Data {
    solde: number;
    mouvementComeUp: number;
    soldeComeUp: number;
    debitedAmount: number;
    creditedAmount: number;
    epargneAccount: number;
    lastMove: Transcation[];
    constructor() {
        this.solde = this.solde || 2996.26;
        this.mouvementComeUp = this.mouvementComeUp || 0;
        this.soldeComeUp = this.soldeComeUp || this.solde;
        this.debitedAmount = this.debitedAmount || -833.44;
        this.creditedAmount = this.creditedAmount || 1713.90;
        this.epargneAccount = this.epargneAccount || 10.03;
        this.lastMove = TRANSACTION;
    }
}
