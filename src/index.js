import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "firebase/database";
import rootReducer from "./reducers/index";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";
import firebase from "./firebase";
import { createFirestoreInstance } from "redux-firestore";
import { createStore } from "redux";

const rrfConfig = {
  userProfile: "users",
  useFireStoreForProfile: true,
};

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
