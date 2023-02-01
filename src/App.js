import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action';

// import { addCollectionAndDocuments } from './utils/firebase/firebase.utils';
// import SHOP_DATA from './shop-data';

const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const CheckoutSuccess = lazy(() => import('./routes/checkout-success/checkout-success.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Auth = lazy(() => import('./routes/auth/auth.component'));
const Navigation = lazy(() =>
  import('./routes/navigation/navigation.component')
);

const App = () => {
  const dispatch = useDispatch();

  // run once, when the component mounts
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout">
            <Route index element={<Checkout />} />
            <Route path="success" element={<CheckoutSuccess />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
