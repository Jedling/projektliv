// tslint:disable-next-line: quotemark
import { EventTypeModel } from '@/types/EventTypeModel.ts';

const eventTypeData: EventTypeModel[] = [
  {
    Time: 'kl 12-13',
    Location: 'Malmö Konsthall S:t Johannesgatan 7',
    Id: 1,
    Info: 'LIV boken release, se inbjudan/anmälan pdf länk',
    Date: '2019-11-08',
  },
  {
    Time: 'kl 19-20',
    Location: 'Fenix Rehabgrupp Möllevångsgatan 42 Malmö',
    Id: 2,
    Info: 'LIV presentation till anhöriggruppen',
    Date: '2019-11-05',
  },
  {
    Time: 'kl 12-15',
    Location: 'Kalendegatan 18 Malmö',
    Id: 3,
    Info: 'Workshop i Målgrupp leder målgrupp inbjudan/anmälan pdf länk',
    Date: '2019-11-09',
  },
  {
    Time: 'kl 18-20',
    Location: 'La Greppia Kajgatan 6 Lomma',
    Id: 4,
    Info: 'LIV metoddag',
    Date: '2019-11-20',
  },
  {
    Time: 'kl 10-15',
    Location: 'Stockholm',
    Id: 5,
    Info: 'LIV introduktions och utbildningsdag till nya LIV ledare',
    Date: '2019-11-30',
  },
];
const eventType: EventTypeModel[] = eventTypeData;

export default eventType;
