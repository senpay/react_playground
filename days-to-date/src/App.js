import Number from './components/Number';
import ProgressBar from './components/ProgressBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Number startDate="2019-08-15" endDate="2024-07-26" />
        <div>
          <ProgressBar startDate="2019-08-15" endDate="2024-07-26" />
        </div>
      </header>
    </div>
  );
}

export default App;
