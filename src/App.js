import './App.css';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import React, {useState} from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var policyEffect = function(x,options,reduction,years) {
  x = x - 2010;
  let dps = initialDataPts();
  for(let i=0;i<dps.length;i++){
      if(i>=x&&i<=x+years){
      dps[i].y=dps[i].y-(reduction/years)*(i-x);
      };
      if(i>x+years){
          dps[i].y =dps[i].y -reduction;
      };
  };
  let newOptions = {}
  Object.keys(options).forEach(key => {
    newOptions[key] = options[key];
  })
  newOptions.data[0].dataPoints = dps;
  return newOptions;
}
function policyOption(i) {
  const policyOptions = [
    {
      shortName: 'SAFE Vehicle Rule',
      name: "The Safer Affordable Fuel-Efficient (SAFE) Vehicles Rule",
      url: "https://www.nhtsa.gov/corporate-average-fuel-economy/safe",
      description: "need description",
      reduction: 284,
      years: 12,
    },
    {
      shortName: "Inflation Reduction Act",
      name: "Inflation Reduction Act and Bipartisan Infrastructure Law",
      url: "https://www.eesi.org/articles/view/how-the-inflation-reduction-act-and-bipartisan-infrastructure-law-work-together-to-advance-climate-action",
      description: "The Inflation Reduction Act aims to reduce the federal deficit, lower healthcare costs, and make the tax code fairer, while also reducing impacts from climate change. This bill includes $369 billion in funding for clean technology manufacturing facilities, energy research, carbon capture, climate-smart agriculture practices, and environmental justice initiatives. The National Highway Traffic Safety Administration and Environmental Protection Agency issued the Safer Affordable Fuel-Efficient (SAFE) Vehicles Rule, which reduces the standards for greenhouse gas emissions for passenger cars and light trucks by 1.5% each year for model years 2021–2026.",
      reduction: 1150,
      years: 25,
    },
    {
      shortName: "Infrastructure Investment and Job Act",
      name: "The Infrastructure Investment and Jobs Act",
      url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiNm5WXpuX6AhWApokEHQMrAoEQFnoECAgQAw&url=https%3A%2F%2Ftransportation.house.gov%2Fcommittee-activity%2Fissue%2Finfrastructure-investment-and-jobs-act&usg=AOvVaw08fe_yzAEji9yZUIa3jSV6",
      description:
          `The Infrastructure Investment and Jobs Act plans to improve roads, bridges, transit, rail, ports, airports, broadband, and
           drinking water and wastewater infrastructure. It provides 15 billion dollars for electric vehicle charging and clean school buses
           and ferries, as well as hundreds of billions for improving public transportation, which will reduce carbon emissions from cars
           over time for supporting America's goal of net-zero emissions by 2050`,
      reduction: 270,
      years: 12,
    },
  ]
  return policyOptions[i];
}

const marks = [2010, 2020, 2030, 2040, 2050].map(d => ({value: d, label: (d.toString())}))
function App() {
  const [options, setOptions] = useState(initialOptions(initialDataPts()));
  const [startYear, setStartYear] = useState(2010);
  const [optionChosen, setOptionChosen] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome To ClimeLine.</p>
        <p>An Interactive interface where you can see the effects a various climate bills</p>
      </header>
      <div className="App-body">
        <Box
          sx={{
            display: 'flex',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            orientation="horizontal"
            aria-label="horizontal outlined button group"
          >
            {
              [0,1,2].map((i) => {
                const po = policyOption(i)
                return  <Button key={i} onClick= { () => {
                          setOptionChosen(i);
                          setOptions(policyEffect(startYear, options, po.reduction, po.years));
                         }} >{po.shortName}</Button>
              })
            }
          </ButtonGroup>
          <ButtonGroup orientation="horizontal" aria-label="horizontal outlined button group" >
            <Button key={'s'} onClick= { () => {
            }} >Contact senator</Button>
          </ButtonGroup>
          {senatorButton()}
        </Box>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', }}>
          <div style={{minWidth: '60vw', margin: '20px'}}>
            <CanvasJSChart options = {options} />
            <Box sx={{  width: '83%', marginTop: '40px', marginLeft:'13%',}}>
              <Slider
                sx={{color: 'blue',}}
                min={2010}
                max={2050}
                aria-label="Custom marks"
                defaultValue={2010}
                getAriaValueText={d => ''}
                step={1}
                valueLabelDisplay="on"
                marks={marks}
                onChange={(evt,year) => setStartYear(year)}
              />
            </Box>
          </div>
          <div style={{
              color: 'black', border: '1px solid green',
              width: '300px', margin: '10px',
              padding: '10px',
              fontSize: '20px',
          }}>
            <strong>{policyOption(optionChosen).name} starting {startYear}</strong>
            <p style={{textAlign: 'left', bottomPadding: '0px', }}>{policyOption(optionChosen).description}</p>
          </div>
        </div>
      </div>
    
     </div>


  );
}
function initialOptions(dataPts) {
  let options = {
      zoomEnabled: true,
      title:{
        text: "Co2 Emissions by year"
      },
      type: "line",
      xValueFormatString: "#####", //formats the data as number number number number ex 12345 instead of 12,345.
      axisX:{ //this formats the x axis
        labelFormatter: function(e){
        //takes e.value(the value meant to be displayed(a number) and returns it as a string.
          return  e.value;
        }
      },
      //this formats the y axis
      axisY:{
        labelFormatter: function(e){
          return (e.value) +"MMMt";
        }
      },
      data: [{
        type: "line",
        dataPoints: dataPts,
      }]
  }
  // options.data[0].dataPoints = updateChart(options.data[0].dataPoints)
  return options
}

/*
function valuetext(value) {
  return value.toString();
}
*/

function initialDataPts(cumulative=false) {
  let dps = [{ x: 2010, y :5573.1706},
    { x: 2011, y :5434.1628},
    { x: 2012, y :5217.1308},
    { x: 2013, y :5344.5545},
    { x: 2014, y :5401.6867},
    { x: 2015, y :5251.3557},
    { x: 2016, y :5158.8624},
    { x: 2017, y :5119.4868},
    { x: 2018, y :5269.8881},
    { x: 2019, y :5130.5859},
    { x: 2020, y :4552.1061},
    { x: 2021, y :4714.6078},
    { x:2022 , y :4834.2646},
    { x:2023 , y :4758.1949},
    { x:2024 , y :4677.29},
    { x:2025 , y :4612.3765},
    { x:2026 , y :4639.3753},
    { x:2027 , y :4604.467},
    { x:2028 , y :4595.6341},
    { x:2029 , y :4590.4629},
    { x:2030 , y :4572.8731},
    { x:2031 , y :4559.9913},
    { x:2032 , y :4547.4693},
    { x:2033 , y :4547.2663},
    { x:2035 , y :4542.0345},
    { x:2036 , y :4548.3172},
    { x:2037 , y :4552.7192},
    { x:2038 , y :4553.6289},
    { x:2039 , y :4567.9183},
    { x:2040 , y :4584.7103},
    { x:2041 , y :4598.6028},
    { x:2042 , y :4623.9396},
    { x:2043 , y :4649.0391},
    { x:2044 , y :4668.539},
    { x:2045 , y :4679.895},
    { x:2046 , y :4695.8719},
    { x:2047 , y :4714.6283},
    { x:2048 , y :4742.219},
    { x:2049 , y :4768.1163},
    { x:2050 , y :4795.6089}]
  if (cumulative) {
    for(let i=1; i<dps.length; i++){
      dps[i].y=dps[i].y+dps[i-1].y;
    };
  }
  return dps;
}
function senatorButton() {
  return "get the senator thing working";
  return (
    <div className="dropdown">
      <button className="dropbtn" type="button" /* onMouseOver="showForm()" */ >Contact Senator</button>
      <form id="formElement" /* method="GET" */ style={{display:'none'}}>
        <label htmlFor="states">
          <h5>
            <center>Choose your state:</center>
          </h5>
        </label>
        <select name="states" id="state" value="value">
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
        </select>
        <button className="dropbtn" type="button" onClick={() => alert("set up getChoice function")} >Submit</button>
      </form>
    </div>)
}

export default App;

