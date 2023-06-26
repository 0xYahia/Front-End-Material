import Menu from "./components/Menu";
import Details from "./components/Details";
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Menu />
          </div>
          <div className="col">
            <Details />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
