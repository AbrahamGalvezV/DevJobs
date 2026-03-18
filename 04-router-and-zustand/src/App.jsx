import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { Route } from './components/Route'
import { RegisterPage } from "./pages/RegisterPage";



function App() {


  return (
    <>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path= "/contacto" component={RegisterPage} />
      <Footer />
    </>
  );
}

export default App;
