import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "@stores/store";
import { BrowserRouter } from "react-router-dom";
import "moment/locale/vi";
import locale from "antd/lib/locale/vi_VN";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider locale={locale}>
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
