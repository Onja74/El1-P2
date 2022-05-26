import './App.css';
import React from 'react';
import {useState} from 'react';
const [accumule,]

class App extends React.Component{
        constructor(props: any){
            super(props);
            this.state = {accumule: 0}
        }
        render(){
            const {label} = props;
            const [acc, accumule]=useState(0)
          
            return (
              <div>
                <h1>{acc}</h1>
                <button onClick={function(){ accumule(acc +1) }}>{label}</button>
              </div>
              
            );
          }
        App(props) {
           return(
             <button label = "Incrèmenter"></button>
           );
}


  }
  
  export default App;
  