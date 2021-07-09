import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch } from "react-router-dom" 

function App() {
  const HatsPage = () => {
    return (
      <div>
        HATS PAGE
      </div>
    )
  }
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
