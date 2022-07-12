
import './App.css';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div className="App">

      <div className='navbar'>
        <nav>
          <ul>
            <li> <a href='#'> Home </a></li>
            <li> <a href='#'> Projects </a></li>
            <li> <a href='#'> TechStack </a></li>
            <li> <a href='#'> Contact  </a></li>
          </ul>
        </nav>
      </div>

      <div className='col col-1'>
        <h1> Colum 1 Content </h1>
        <ProfileImage />
      </div>

      <div className='col col-2'>
      <h1> Colum 2 Content </h1>
      </div>

      <div className='col col-3'>
      <h1> Colum 3 Content </h1>
      </div>



    </div>
  );
}

export default App;
