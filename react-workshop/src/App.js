import StockComponent from './classComponents/MoneyControlActivity/StockComponent';
import Footer from './components/MoneyControlActivity/Footer';
import Header from './components/MoneyControlActivity/Header';

const sbiurl= 'https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI'
const nlcurl = 'https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC'
function App() {
  return (
    <>
    <Header/>
    <StockComponent url={sbiurl} style={{width: '40%', marginLeft: '40px', marginTop: '40px', float: 'left'}}/>
    <StockComponent url={nlcurl} style={{width: '40%', marginRight: '40px', marginTop: '40px', float: 'right'}}/>
    <Footer/>
    </>
  );
}
export default App;
