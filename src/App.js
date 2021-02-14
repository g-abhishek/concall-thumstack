import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopView from './Components/TopView';
import ImageView from './Components/ImageView';
import PricingPlan from './Components/PricingPlan';
import EveryWhere from './Components/EveryWhere';
import CorporateSolution from './Components/CorporateSolution';
import Footer from './Components/Footer';
import NavBar from './Layouts/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <TopView />
        <ImageView />
        <PricingPlan />
        <EveryWhere />
        <CorporateSolution />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
