import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import React, {useState} from 'react';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const images = [
  "https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/2022-03/PHOTO-Climate-Collage-Diagonal-Design-NOAA-Communications-NO-NOAA-Logo.jpg",
  "https://www.climate.gov/sites/default/files/styles/embedded_gif/public/2022-05/Screen%20Shot%202022-05-13%20at%204.05.00%20PM.png?itok=aw1T98fq",
  "https://static01.nyt.com/images/2021/01/29/us/global-climate-risks-promo-1611263845212/global-climate-risks-promo-1611263845212-superJumbo-v3.jpg",
]
const imgNames = [
    "first one",
    "second one",
    "third one",

]
var dps = [
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
  { x:2050 , y :4795.6089}];/*

   //datapoints million mega tones co2 per year
   var c = new CanvasJS.Chart("first",
   {
   zoomEnabled: true,
   title:{
   text: "Co2 Emissions by year"
   },
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
   data: [
   {
   type: "line",
     //formats the data as number number number number ex 12345 instead of 12,345.
   xValueFormatString: "#####",
   
   dataPoints: dps
   }
   ]
   });
var updateChart = function(){
 for(let i=0; i<dps.length; i++){
    dps[i].y=dps[i].y*1;
 };
}

//this runs the function
updateChart();
//and updates the chart
c.render();
*/
var updateChart = function(){
  for(let i=0; i<dps.length; i++){
     dps[i].y=dps[i].y*2;
  };}
function App() {
  console.log("what's going on?")
  const [imgIdx, setImgIdx] = useState(0)
  let image = <img className="center-image" src={images[imgIdx]}/>

  //const buttons = images.map((img,i) => <Button key={i} onClick={ () => setImgIdx(i) } >{imgNames[i]}</Button>)


  const options = {
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

    ]}]
 }  
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
            <Button onClick={ () => updateChart() } ></Button>

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


  

//this function controls how the data is edited


  //this function controls how the data is edited

export default App;

