import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import React, {useState} from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var updateChart = function(options) {
  let dps = options.data[0].dataPoints;
  for(let i=0; i<dps.length; i++){
     dps[i].y=dps[i].y*2;
  };
  let newOptions = {}
  Object.keys(options).forEach(key => {
    newOptions[key] = options[key];
  })
  newOptions.data[0].dataPoints = dps;
  return newOptions;
}

function App() {
  const [options, setOptions] = useState(initialOptions());

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
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            <Button onClick= { () => {
              console.log(options.data[0].dataPoints[0])
              setOptions(updateChart(options));
              console.log(options.data[0].dataPoints[0])
             }} >Update chart</Button>
          </ButtonGroup>
        </Box>
        <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
      </div>
    
     </div>


  );
}
function initialOptions() {
  let options = {
      zoomEnabled: true,
      title:{
        text: "Co2 Emissions by year"
      },
      type: "line",
          //formats the data as number number number number ex 12345 instead of 12,345.
          xValueFormatString: "#####",
        //this formats the x axis
        axisX:{
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
          dataPoints: [
            { x: 2010, y :5573.1706},
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
            { x:2050 , y :4795.6089}
          ]
        }]
  }
  // options.data[0].dataPoints = updateChart(options.data[0].dataPoints)
  return options
}

export default App;

