import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import Whatsapp from './components/common/Whatsapp';
import { FiltersProvider } from './contexts/filters/filtersContext';


const App = () => {
  return (
    <>
    
      <CommonProvider>
        <FiltersProvider>
          <CartProvider>
            <Header />
            <RouterRoutes />
            <Whatsapp />
            <Footer />
            <BackTop />
          </CartProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;
