import { Data, DataJson } from './variable';

export const DATAS: Data[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

// JSON data
export const  DATASJSON =  {
  // chart settings
  chart: {
    // chart type
    type: "pie",
    // chart data
    data: [
      {x:"2000", value: 10048, qtrBreakdown: [["Q1", 761], ["Q2", 530], ["Q3", 890], ["Q4", 979]]},
      {x:"2001", value: 10938, qtrBreakdown: [["Q1", 886], ["Q2", 580], ["Q3", 990], ["Q4", 997]]},
      {x:"2002", value: 9989,  qtrBreakdown: [["Q1", 832], ["Q2", 740], ["Q3", 912], ["Q4", 850]]},
      {x:"2003", value: 10226, qtrBreakdown: [["Q1", 904], ["Q2", 912], ["Q3", 914], ["Q4", 899]]},
      {x:"2004", value: 11004, qtrBreakdown: [["Q1", 886], ["Q2", 980], ["Q3", 109], ["Q4", 812]]},
      {x:"2005", value: 10934, qtrBreakdown: [["Q1", 902], ["Q2", 867], ["Q3", 830], ["Q4", 993]]},
      {x:"2006", value: 11275, qtrBreakdown: [["Q1", 104], ["Q2", 839], ["Q3", 854], ["Q4", 993]]},
      {x:"2007", value: 11945, qtrBreakdown: [["Q1", 855], ["Q2", 103], ["Q3", 982], ["Q4", 100]]},
      {x:"2008", value: 12245, qtrBreakdown: [["Q1", 934], ["Q2", 982], ["Q3", 973], ["Q4", 999]]},
      {x:"2009", value: 12056, qtrBreakdown: [["Q1", 134], ["Q2", 873], ["Q3", 109], ["Q4", 903]]},
      {x:"2010", value: 11734, qtrBreakdown: [["Q1", 928], ["Q2", 103], ["Q3", 793], ["Q4", 887]]},
      {x:"2011", value: 12337, qtrBreakdown: [["Q1", 934], ["Q2", 982], ["Q3", 973], ["Q4", 124]]},
      {x:"2012", value: 12761, qtrBreakdown: [["Q1", 982], ["Q2", 965], ["Q3", 100], ["Q4", 183]]},
      {x:"2013", value: 13390, qtrBreakdown: [["Q1", 182], ["Q2", 110], ["Q3", 995], ["Q4", 999]]},
      {x:"2014", value: 13818, qtrBreakdown: [["Q1", 400], ["Q2", 507], ["Q3", 380], ["Q4", 620]]},
      {x:"2015", value: 13188, qtrBreakdown: [["Q1", 156], ["Q2", 120], ["Q3", 100], ["Q4", 890]]}
    ],
  }
};

export const DATASPIE = {
  // chart settings
  chart: {
    // chart type
    type: "pie",
      // chart data
    data: [
      {x:"2000", value: 10048},
      {x:"2001", value: 10938},
      {x:"2002", value: 9989},
      {x:"2003", value: 10226},
      {x:"2004", value: 11004},
      {x:"2005", value: 10934},
      {x:"2006", value: 11275},
      {x:"2007", value: 11945},
      {x:"2008", value: 12245},
      {x:"2009", value: 12056},
      {x:"2010", value: 11734},
      {x:"2011", value: 12337},
      {x:"2012", value: 12761},
      {x:"2013", value: 13390},
      {x:"2014", value: 13818},
      {x:"2015", value: 13188}
    ]
  }
};

export const DATASLINE = {
  // chart settings
  chart: {
    // chart type
    type: "line",
      // chart data
    data: [
      {x:"2000", qtrBreakdown: [["Q1", 761], ["Q2", 530], ["Q3", 890], ["Q4", 979]]},
      {x:"2001", qtrBreakdown: [["Q1", 886], ["Q2", 580], ["Q3", 990], ["Q4", 997]]},
      {x:"2002", qtrBreakdown: [["Q1", 832], ["Q2", 740], ["Q3", 912], ["Q4", 850]]},
      {x:"2003", qtrBreakdown: [["Q1", 904], ["Q2", 912], ["Q3", 914], ["Q4", 899]]},
      {x:"2004", qtrBreakdown: [["Q1", 886], ["Q2", 980], ["Q3", 109], ["Q4", 812]]},
      {x:"2005", qtrBreakdown: [["Q1", 902], ["Q2", 867], ["Q3", 830], ["Q4", 993]]},
      {x:"2006", qtrBreakdown: [["Q1", 104], ["Q2", 839], ["Q3", 854], ["Q4", 993]]},
      {x:"2007", qtrBreakdown: [["Q1", 855], ["Q2", 103], ["Q3", 982], ["Q4", 100]]},
      {x:"2008", qtrBreakdown: [["Q1", 934], ["Q2", 982], ["Q3", 973], ["Q4", 999]]},
      {x:"2009", qtrBreakdown: [["Q1", 134], ["Q2", 873], ["Q3", 109], ["Q4", 903]]},
      {x:"2010", qtrBreakdown: [["Q1", 928], ["Q2", 103], ["Q3", 793], ["Q4", 887]]},
      {x:"2011", qtrBreakdown: [["Q1", 934], ["Q2", 982], ["Q3", 973], ["Q4", 124]]},
      {x:"2012", qtrBreakdown: [["Q1", 982], ["Q2", 965], ["Q3", 100], ["Q4", 183]]},
      {x:"2013", qtrBreakdown: [["Q1", 182], ["Q2", 110], ["Q3", 995], ["Q4", 999]]},
      {x:"2014", qtrBreakdown: [["Q1", 400], ["Q2", 507], ["Q3", 380], ["Q4", 620]]},
      {x:"2015", qtrBreakdown: [["Q1", 156], ["Q2", 120], ["Q3", 100], ["Q4", 890]]}
    ]
  }
};