import "./App.css";
import Header from "./mainElement/Head";
import Main from "./mainElement/Main";
import Footer from "./mainElement/Footer";
import { ScrollProvider } from "./mainElement/ScrollContext";

function App() {
  return (
    <div className="wrapper">
      <ScrollProvider>
        <Header />
        <Main />
        <Footer />
      </ScrollProvider>
    </div>
  );
}

export default App;
