import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Lists from './Test';
// import NameForm from './NameForm';
// import EssayForm from './EssayForm';
// import FlavorForm from './FlavorForm';
// import Reservation from './Reservation';
// import ContextApp from './Context';
// import ErrorApp from './ErrorBoundary';
// import ButtonApp from './ButtonApp';

// import MyProductsApp from './MyProductsApp';
// import ProductsListWithSearch from './ProductsListWithSearch';
// import MyRouter from './MyRouter';
// import MyMain from "./MyMain.js"
import TextAreaDeleteButton from "./TextAreaDeleteButton"

ReactDOM.render(
  <React.StrictMode>
      <TextAreaDeleteButton />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
