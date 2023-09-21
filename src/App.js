import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <div className="card">
        <h1>NBA Superstar</h1>
        <img src="https://thumbs.dreamstime.com/b/michael-jordan-chicago-bulls-superstar-image-taken-color-slide-73861883.jpg" alt="Jordan" />
        <div className="content">
          <h2><b>Michael Jordan</b></h2>
            <p>Michael Jeffrey Jordan (born February 17, 1963), also known by his initials MJ, is an American former professional basketball player and businessman. Widely considered the greatest basketball player of all time, the official National Basketball Association (NBA) website states that "by acclamation, Michael Jordan is the greatest basketball player of all time." He played fifteen seasons in the NBA, winning six NBA championships with the Chicago Bulls. He was integral in popularizing the sport of basketball and the NBA around the world in the 1980s and 1990s, becoming a global cultural icon.</p>
        <div className="button1">
          <button id="detail1">Details</button>
          <button id="cloneButton1">CloneCard</button>
          <button id="color1">ColorCard</button>
          <button id="heading1">ChangeHeading</button>
          <button id="delete1">Delete</button>  
        </div> 
        </div>
      </div>
    );
}

export default App;
