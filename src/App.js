import './App.css';
import image from '../src/Images/dark.jpg'
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <div className='header'>
      <img src={image} alt="" />
      <Courses></Courses>
    </div>
  );
}

export default App;
