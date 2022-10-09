import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'

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
function App() {
  const [imgIdx, setImgIdx] = useState(0)
  let image = <img className="center-image" src={images[imgIdx]}/>
  const buttons = images.map((img,i) => <Button key={i} onClick={ () => setImgIdx(i) } >{imgNames[i]}</Button>)

  const [dataPoints, setDataPoints] = useState([]);
  useEffect(() => {
    let _dataPoints = []
    fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          for (var i = 0; i < data.length; i++) {
            _dataPoints.push({
                               x: new Date(data[i].x),
                               y: data[i].y
                             });
          }
          setDataPoints(_dataPoints);
          // console.log(dataPoints);
          // chart.render();
        });
  }, []);
  const options = {
    theme: "light2",
    title: {
      text: "Stock Price of NIFTY 50"
    },
    axisY: {
      title: "Price in USD",
      prefix: "$"
    },
    data: [{
      type: "line",
      xValueFormatString: "MMM YYYY",
      yValueFormatString: "$#,##0.00",
      dataPoints: dataPoints
    }]
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome To ClimeLine.</p>
        <p>An Interactive interface where you can see the effects a various climate bills</p>
      </header>
      <div style={{backgroundColor: '#FEE', textAlign: 'left', }}>
        <CanvasJSChart options = {options}
            // onRef={ref => this.chart = ref}
            /* You can get reference to the chart instance as shown above using onRef.
               This allows you to access all chart properties and methods*/
        />
        <pre>
          dataPoints: { JSON.stringify(dataPoints, null, 2)}
        </pre>
      </div>
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
            {buttons}
          </ButtonGroup>
        </Box>
        {image}
      </div>
    </div>

  );
}



export default App;

