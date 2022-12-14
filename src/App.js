import logo from "./logo.svg";
import "./App.css";
import * as PAGES from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <PAGES.Home />
      </Layout>
    </div>
  );
}

export default App;
