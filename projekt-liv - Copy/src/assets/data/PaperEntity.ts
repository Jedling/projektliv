import { PaperTypeModel } from '@/types/PaperTypeModel.ts';

const paperTypeData: PaperTypeModel[] = [
  {
    Name: 'Stroketidningen, 2018',
    Id: 1,
    Description: '',
    Url: 'http://www.projektliv.se/artiklar/LIV%20i%20StrokeKontakt%201%202018.pdf',
  },
  {
    Name: 'Parkinsontidningen, 2018',
    Id: 2,
    Description: '',
    Url: 'http://www.projektliv.se/artiklar/LIV%20i%20Parkinson%20Sk%C3%A5ne%20Mars%202018.pdf',
  },
  {
    Name: 'Lommabladet, september 2019',
    Id: 3,
    Description: 'Lyssna på P1 och Pyramiden som deltog på ett LIV pass. Samt intervjuer med LIV deltagare Rita Sant samt Tomas Deierborg, docent i neurovetenskap vid Lunds universitet.',
    Url: 'https://lommabladet.lokaltidningen.se/nyheter/2019-09-19/-Ny-kurs-vill-ge-verktyg-till-Parkinson-och-strokedrabbade-5780463.html',
  },
];
const paperType: PaperTypeModel[] = paperTypeData;

export default paperType;
