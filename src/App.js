import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Validation from './components/Validation';
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div>
      <Validation/>
    </div>
  );
}

export default App;
