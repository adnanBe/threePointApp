import { Transcation } from './transaction.model';

export const TRANSACTION: Transcation[] =
[
    {
        date: '21 Nov.',
        issue: 'Vir SEPA SRT FRANCE',
        type: 'Virements reçus',
        amount: 621.50
    },
    {
        date: '21 Nov.',
        issue: 'Retrait CB*1321',
        type: 'Retrait cash',
        amount: -10
    },
    {
        date: '16 Nov.',
        issue: 'Carte 15112018 CB*1321',
        type: 'Alimentation',
        amount: -23.70
    },
    {
        date: '14 Nov.',
        issue: 'Vir SEPA SRT FRANCE',
        type: 'Virements reçus',
        amount: 649.90
    },
    {
        date: '14 Nov.',
        issue: 'Retrait CB*1321',
        type: 'Retrait cash',
        amount: -10.00
    },
    {
        date: '14 Nov.',
        issue: 'Carte 13112018 CB*1321',
        type: 'Alimentation',
        amount: -2.86
    },
    {
        date: '12 Nov.',
        issue: 'Carte 11112018 CB*1321',
        type: 'Coffe',
        amount: -6.50
    }
];
