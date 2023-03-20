import './App.css';
import Brick from './Brick.js';

function App() {
	let brickArray = new Array(48); // 12 bricks per row
	brickArray.fill(1);
  return (
    <div className="App">
      <div className="bricks">
				{
					brickArray.map((b) => (
						(b === 1) ? <Brick /> : null
					))
				}
      </div>
    </div>
  );
}

export default App;
