import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopView from './Components/TopView';
import ImageView from './Components/ImageView';
import PricingPlan from './Components/PricingPlan';
import EveryWhere from './Components/EveryWhere';
import CorporateSolution from './Components/CorporateSolution';
import ScheduleMeeting from './Components/ScheduleMeeting';
import Footer from './Components/Footer';
import NavBar from './Layouts/NavBar';
import PaymentSuccess from './Components/Payment/PaymentSuccess';
import PaymentHistory from './Components/Payment/PaymentHistory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        

        <Switch>
          <Route exact path="/">
            <NavBar />
            <TopView />
            <ImageView />
            <PricingPlan />
            <ScheduleMeeting />
            <EveryWhere />
            <CorporateSolution />
            <Footer />
          </Route>
            <Route exact path="/payment">
                <PaymentSuccess />
            </Route>
            <Route exact path="/history">
                <PaymentHistory />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
