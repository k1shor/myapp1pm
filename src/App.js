import { Provider } from "react-redux";
import MyRoutes from "./MyRoutes";
import './mystyle.css'
import { store } from "./components/reducer/store";


function App() {
  return (
    <div>
      <Provider store= {store}>
        <MyRoutes/>
      </Provider>
    </div>

  );
}

export default App;
