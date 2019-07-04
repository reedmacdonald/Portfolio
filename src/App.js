import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PancakeStack from './Components/PancakeStack'
import Bacon from './Components/Bacon'
import Fork from './Components/Fork'
import Knife from './Components/Knife'
import Syrup from './Components/Syrup'
import Coffee from './Components/Coffee'

class App extends Component {
  state={

  }
  render(){
  return (
    <div id="greatBackground">
      <h1>My name is Reed MacDonald</h1>
      <h2>I am a <u>Full-Stack</u> Developer</h2>
      <div className="plate"/>
      <Coffee/>
      <PancakeStack/>
      <Bacon/>
      <Fork/>
      <Knife/>
      <Syrup/>
      <h2 className='headerTwo'>...who enjoys a <u>Full-Stack</u> of Pancakes!</h2>
      <h2 className='headerThree'><a target='_blank' href='https://github.com/reedmacdonald'><u>GitHub</u></a> <a target='_blank' href='https://linkedin.com/in/reed-macdonald'><u>LinkedIn</u></a></h2>
    </div>
  )}
}

export default App;
