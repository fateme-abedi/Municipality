
import './App.css';
import Charge from './components/charge/Charge';
import Payment from './components/payment services/Payment';
import BuyInternet1 from './components/buy internet/BuyInternet1';
import BuyInternet2 from './components/buy internet/BuyInternet2';
import BuyInternet3 from './components/buy internet/BuyInternet3';
import PayBill1 from './components/pay the bill/PayBill1';
import PayBill2 from './components/pay the bill/PayBill2';
import Naji from './components/Naji Services/Naji'


function App() {
  return (
    <div className=" App">
     {/* <PayBill1/> */}
     {/* <PayBill2/> */}
     {/* <Payment/> */}
     {/* <Naji/> */}
     {/* <BuyInternet1/> */}
     {/* <BuyInternet2/> */}
     {/* <BuyInternet3/> */}
     <Charge/>
     
    </div>
  );
}

export default App;
