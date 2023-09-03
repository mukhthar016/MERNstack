import logo from './logo.svg';
import './App.css';
import './App.css';
import './external.css'
import Arrowfunction from './component/Arrowfunction'
import Test from './component/test'
import Variable from './component/variable'
import Array from './component/Array'
import Destructing from './component/Destructing'
import Spreadoperator from './component/spreadoperator';
import Ternaryoperator from './component/Ternaryoperator'
import Image from './abd.jpg'
import Imp from './component/Imp'
import Props from './component/props';
import Usestate from './component/Usestate'
import Router from './component/router'
import Miui from './component/mui'


function App() {
  let mystyle={
    color:"blue",
    backgroundColor:"brown"
  }
  let bodyStyle = {
    backgroundColor: ""}
  function Click() {
    alert("you have clicked on button")
  }
   let name= "rahul";
  return (
    <div style={bodyStyle}>
    
    course<h1>
    
    course</h1>
    <h2 style={mystyle}>hello this is react2</h2>
     <img src={Image} height="1000px"width={1250}/> 
    <button onClick={Click}>click here</button>
    <h1>{name}</h1> 
      <Arrowfunction/> 
      <Test/>
     <Variable/>
     <Array/>
     <Destructing/>
     <Spreadoperator/>
     <Ternaryoperator/>
     <Props/>
     <Imp/>
     <Usestate/>
     <Router/>
     <Miui/>
   
    <hr/>
    </div>
  );
}

export default App;
