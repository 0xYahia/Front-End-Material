import Details from "./components/Details";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Menu newProp="Hi Ui" />
        </div>
        <div className="col">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
