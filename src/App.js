import './App.css';
import Navbar from './components/navbar/Navbar';
import Firstsection from './components/first_section/Firstsection'
import Secondsection from './components/second_section/Secondsection'
import Thirdrow from './components/third_row/Thirdrow'
import Fourthrow from './components/fourth_section/Fourthsection';
import Fifthrow from './components/fifth_section/Fifthsection';
import Sixthsection from './components/sixth_section/Sixthsection';
import Seventhsection from './components/seventh_section/Seventhsection';
import Eighthsection from './components/eighth_section/Eigthsection';

function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Firstsection></Firstsection>
      <Secondsection></Secondsection>
      <Thirdrow></Thirdrow>
      <Fourthrow></Fourthrow>
      <Fifthrow></Fifthrow>
      <Sixthsection></Sixthsection>
      <Seventhsection></Seventhsection>
      <Eighthsection></Eighthsection>
    </div>
  );
}

export default App;
