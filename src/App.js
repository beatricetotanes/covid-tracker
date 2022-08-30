import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className="App">
          <div className="content">
            <Route exact path="/">

            </Route>
          </div>
        </div>
      </Router>
  );
}

export default App;
