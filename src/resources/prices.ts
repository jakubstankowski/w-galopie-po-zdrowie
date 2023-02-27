import pricesList from 'src/interfaces/pricesList'

export const prices: pricesList[] = [
  {
    category: 'Indywidualne konsultacje',
    cards: [
      {
        title: 'Pierwsza wizyta',
        price: 200,
        descriptionTitle: 'Konsultacja z dietetykiem obejmująca m.in.:',
        descriptionList: [
          'Analizę składu ciała na profesjonalnym analizatorze medycznym wraz z omówieniem wyników',
          'Pomiary antropometryczne',
          'Dokładny wywiad żywieniowy',
        ],
      },
      {
        title: 'Wizyta kontrolna',
        price: 100,
        descriptionTitle: 'Konsultacja z dietetykiem obejmująca:',
        descriptionList: [
          'Analizę składu ciała i omówienie wyników',
          'Monitorowanie postępu dietoterapi',
          'Ewentualne skorygowanie diety',
        ],
      },
    ],
  },
  {
    category: 'Indywidualny jadłospis',
    cards: [
      {
        title: 'Jadłospis 7 dni',
        price: 179,
        descriptionList: ['Indywidualny jadłospis na 7 dni wraz z przepisami'],
      },
      {
        title: 'Jadłospis 14 dni',
        price: 249,
        descriptionList: ['Indywidualny jadłospis na 14 dni wraz z przepisami'],
      },
    ],
  },
  {
    category: 'Konsultacje online',
    cards: [
      {
        title: 'Pierwsza konsultacja online',
        price: 200,
        descriptionTitle: 'Pierwsza konsultacja online obejmuje:',
        descriptionList: [
          'Konsultację z dietetykiem przez internet (ZOOM) lub telefon do 60 min',
        ],
      },
      {
        title: 'Konsultacja kontrolna online',
        price: 100,
        descriptionTitle: 'Konsultacja kontrolna online obejmuje:',
        descriptionList: [
          'Każdą następną konsultację z dietetykiem przez internet (skype, facetime, google hangouts) lub telefon do 30 min',
        ],
      },
    ],
  },
]
