import Navbar from './components/NavBar';
import Herobox from './components/Hero.js';
import './App.css';
import Scrollbox from './components/Scrollbox';
import swim from './assets/image 12.png';
import wedding from './assets/wedding-photography 1.png';
import bike from './assets/mountain-bike 1.png';

function App() {
  let carddata = [
    {
      img: swim,
      alter: 'swimmer',
      info: '5.0  (6) USA ',
      descrip: 'Life Lesson with Katie Zeferes',
      value: 'From $136/ person',
      openspot: 0,
    },
    {
      img: wedding,
      info: '5.0 (30) USA',
      alter: 'wedding photo',
      descrip: 'Learn wedding photography',
      value: 'From $125 / person',
      openspot: 0,
    },
    {
      img: bike,
      info: '5.0 (30) USA',
      alter: 'bike',
      descrip: 'Learn wedding photography',
      value: 'From $125 / person',
      openspot: 0,
    },
  ];

  const card = carddata.map((d) => <Scrollbox d={d} />);
  return (
    <div>
      <Navbar />
      <Herobox />
      <div className="gridbox">{card}</div>
    </div>
  );
}

export default App;
