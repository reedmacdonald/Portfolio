import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PancakeStack from './Components/PancakeStack'
import Bacon from './Components/Bacon'
import Fork from './Components/Fork'
import Knife from './Components/Knife'
import Syrup from './Components/Syrup'
import Coffee from './Components/Coffee'
import Butter from './Components/Butter'
import PlateOfBacon from './Components/PlateOfBacon'
import PancakeTray from './Components/PancakeTray'

class App extends Component {
  state={
    blend:undefined,
    amountOfBacon:3,
    amountOfPancakes:4,
    baconLeft:'13vw',
    baconTop:'50vh'
  }
  removeBacon=()=>{
    if (this.state.amountOfBacon>0){
    if (this.state.amountOfBacon==1){
    this.setState({
      amountOfBacon:this.state.amountOfBacon-1,
      baconLeft:'13vw',
      baconTop:'50vh'
    })}
    if (this.state.amountOfBacon==2){
      this.setState({
        amountOfBacon:this.state.amountOfBacon-1,
        baconLeft:'13vw',
        baconTop:'50vh'
      })}
      if (this.state.amountOfBacon==3){
        this.setState({
          amountOfBacon:this.state.amountOfBacon-1,
          baconLeft:'13vw',
          baconTop:'50vh'
        })}
        if (this.state.amountOfBacon==4){
          this.setState({
            amountOfBacon:this.state.amountOfBacon-1,
            baconLeft:'13vw',
            baconTop:'50vh'
          })}
          if (this.state.amountOfBacon==5){
            this.setState({
              amountOfBacon:this.state.amountOfBacon-1,
              baconLeft:'13vw',
              baconTop:'50vh'
            })}
            if (this.state.amountOfBacon==6){
              this.setState({
                amountOfBacon:this.state.amountOfBacon-1,
                baconLeft:'13vw',
                baconTop:'50vh'
              })}
              if (this.state.amountOfBacon==7){
                this.setState({
                  amountOfBacon:this.state.amountOfBacon-1,
                  baconLeft:'13vw',
                  baconTop:'50vh'
                })}}
    console.log('removing bacon')
  }
  removePancake=()=>{
    if (this.state.amountOfPancakes>0){
    this.setState({
      amountOfPancakes:this.state.amountOfPancakes-1
    })}
    console.log('removing Pancake')
  }
  addPancakes=()=>{
    if (this.state.amountOfPancakes<4){
    this.setState({
      amountOfPancakes:this.state.amountOfPancakes+1
    })}
  }

  addBacon=()=>{
    if (this.state.amountOfBacon<7){
    if (this.state.amountOfBacon==1){
      this.setState({
        amountOfBacon:this.state.amountOfBacon+1,
        baconLeft:'13vw',
        baconTop:'50vh'
      })}
      if (this.state.amountOfBacon==2){
        this.setState({
          amountOfBacon:this.state.amountOfBacon+1,
          baconLeft:'13vw',
          baconTop:'50vh'
        })}
        if (this.state.amountOfBacon==3){
          this.setState({
            amountOfBacon:this.state.amountOfBacon+1,
            baconLeft:'13vw',
            baconTop:'50vh'
          })}
          if (this.state.amountOfBacon==4){
            this.setState({
              amountOfBacon:this.state.amountOfBacon+1,
              baconLeft:'13vw',
              baconTop:'50vh'
            })}
            if (this.state.amountOfBacon==5){
              this.setState({
                amountOfBacon:this.state.amountOfBacon+1,
                baconLeft:'13vw',
                baconTop:'50vh'
              })}
              if (this.state.amountOfBacon==6){
                this.setState({
                  amountOfBacon:this.state.amountOfBacon+1,
                  baconLeft:'13vw',
                  baconTop:'50vh'
                })}}
    console.log('adding bacon')
  }
  blendColor=()=>{
    this.setState({blend:'darken'})
    console.log('blending color!')
  }
  render(){
  return (
    <div style={{backgroundBlendMode:this.state.blend}} id="greatBackground">
      <h1>My name is Reed MacDonald</h1>
      <h2>I am a <u>Full-Stack</u> Developer</h2>
      <div className="plate"/>
      <Coffee/>
      <PancakeStack amountOfPancakes={this.state.amountOfPancakes}/>
      <Bacon amountOfBacon={this.state.amountOfBacon}/>
      <Fork removePancake={this.removePancake} removeBacon={this.removeBacon} baconLeft={this.state.baconLeft} baconTop={this.state.baconTop} amountOfBacon={this.state.amountOfBacon} amountOfPancakes={this.state.amountOfPancakes}/>
      <img src='https://previews.123rf.com/images/solarus/solarus1509/solarus150900101/45890231-blue-table-cloth-background-seamless-pattern-vector-illustration-of-traditional-gingham-dining-cloth.jpg' id='tableCloth'/>
      <Syrup blendColor={this.blendColor}/>
      <PancakeTray addPancakes={this.addPancakes}/>
      <Butter/>
      <PlateOfBacon addBacon={this.addBacon}/>
      <h2 className='headerTwo'>...who enjoys a <u>Full-Stack</u> of Pancakes!</h2>
      <h2 className='headerThree'><a target='_blank' href='https://github.com/reedmacdonald'><u>GitHub</u></a> <a target='_blank' href='https://linkedin.com/in/reed-macdonald'><u>LinkedIn</u></a> <a target='_blank' href='https://reedmacdonald.com'><u>Old Portfolio</u></a></h2>
    </div>
  )}
}

export default App;
