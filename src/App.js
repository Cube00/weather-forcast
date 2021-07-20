//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//pages
import Home from "./pages/home";

const middleware = [thunk];

function App() {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
