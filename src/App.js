import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Welcome To ClimeLine.
        </p>
        <p>
          An Interactive interface where you can see the effects a various climate bills
        </p>
        </header>
      <body className="App-body">
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
        
        
        <img src="https://www.climate.gov/sites/default/files/styles/embedded_gif/public/2022-05/Screen%20Shot%202022-05-13%20at%204.05.00%20PM.png?itok=aw1T98fq" className="App-logo" alt="logo" />
     
    
     </body></div>
  );
}



export default App;
