import './App.css';
import BarcodeScanner from './components/barcodeScanner';

function App() {
  return (
    <div className="App">
      <body>
        <BarcodeScanner 
          width={80}
          height={80} 
        />
      </body>
    </div>
  );
}

export default App;
