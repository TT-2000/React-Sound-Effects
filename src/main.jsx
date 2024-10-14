import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from "./conponents/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import reduxConfig from "./store";
import { Provider } from "react-redux";

const { store } = reduxConfig();
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GlobalStyle>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyle>
  </Provider>
)
