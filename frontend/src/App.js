import Containter from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Helmet } from 'react-helmet-async';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <Helmet>
          <title>Amazona</title>
        </Helmet>
        <header>
          <Navbar bg="dark" variant="dark">
            <Containter>
              <LinkContainer to="/">
                <Navbar.Brand>Amazona</Navbar.Brand>
              </LinkContainer>
            </Containter>
          </Navbar>
        </header>
        <main>
          <Containter className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Containter>
        </main>
        <footer>
          <div className='text-center'>@All Rights Reserve</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
