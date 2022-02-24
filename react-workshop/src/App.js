import StockComponent from './classComponents/MoneyControlActivity/StockComponent';
import Footer from './components/MoneyControlActivity/Footer';
import Header from './components/MoneyControlActivity/Header';

var sbiurl= "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI";
var nlcurl = "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC";
function App() {
  return (
    <>
    <Header/>
    <StockComponent url = {sbiurl}/>
    <StockComponent url = {nlcurl}/>
    <Footer/>
    </>
  );
}
export default App