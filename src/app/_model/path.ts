import { Path } from './path.model';

export const PATH: Path[] =
[
    {
        name: 'Tableau de board',
        url: '/dashboard/default',
        icone: 'dashboard',
        active: true
    },
    {
        name: 'Mes comptes',
        url: '/dashboard/account',
        icone: 'account_balance_wallet',
        active: false
    },
    {
        name: 'Mes documents',
        url: '/dashboard/document',
        icone: 'note',
        active: false
    },
    {
        name: 'Mes virements & prélèvements',
        url: '/dashboard/transfer',
        icone: 'compare_arrows',
        active: false
    },
    {
        name: 'Mon RIB',
        url: '/dashboard/rib',
        icone: 'receipt',
        active: false
    },
    {
        name: 'Ma carte bancaire',
        url: '/dashboard/card',
        icone: 'credit_card',
        active: false
    },
    {
        name: 'Mes chèques et espèces',
        url: '/dashboard/check',
        icone: 'web',
        active: false
    },
];
