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
import Resume from './Components/MacDonald_Resume.pdf'

class App extends Component {
  state={
    blend:undefined,
    amountOfBacon:3,
    amountOfPancakes:4,
    baconLeft:'13vw',
    baconTop:'50vh',
    backgroundBlendMode:undefined
  }
  pourSyrup=()=>{
    if (!this.state.backgroundBlendMode && !this.state.backgroundImage){this.setState({backgroundBlendMode:'lighten'})}
    if (this.state.backgroundBlendMode=='lighten'){
      this.setState({
        backgroundBlendMode:'darken'
      })
    }
    if (this.state.backgroundBlendMode=='darken'){
      this.setState({
        backgroundBlendMode:'luminosity'
      })
    }
    if (this.state.backgroundBlendMode=='luminosity'){
      this.setState({
        backgroundImage:'url(https://wallpapercave.com/wp/Uo7okHe.jpg)',
        backgroundBlendMode:undefined
      })
    }
    if (this.state.backgroundImage=='url(https://wallpapercave.com/wp/Uo7okHe.jpg)'){
      this.setState({
        backgroundImage:'url(http://i.imgur.com/na07Q76.jpg)',
        backgroundBlendMode:undefined
      })
    }
    if (this.state.backgroundImage=='url(http://i.imgur.com/na07Q76.jpg)'){
      this.setState({
        backgroundImage:undefined,
        backgroundBlendMode:undefined,
        
      })
    }
    console.log('Pouring Syrup')
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
      <h1 className='headerOne'>My name is Reed MacDonald</h1>
      <h2 className='headerOne'>I am a <u>Full-Stack</u> Developer</h2>
      <div className="plate"/>
      <Coffee/>
      <PancakeStack amountOfPancakes={this.state.amountOfPancakes}/>
      <Bacon amountOfBacon={this.state.amountOfBacon}/>
      <Fork removePancake={this.removePancake} removeBacon={this.removeBacon} baconLeft={this.state.baconLeft} baconTop={this.state.baconTop} amountOfBacon={this.state.amountOfBacon} amountOfPancakes={this.state.amountOfPancakes}/>
      <div style={{backgroundColor:this.state.backgroundColor,backgroundBlendMode:this.state.backgroundBlendMode,backgroundImage:this.state.backgroundImage||'url(https://previews.123rf.com/images/solarus/solarus1509/solarus150900101/45890231-blue-table-cloth-background-seamless-pattern-vector-illustration-of-traditional-gingham-dining-cloth.jpg)'}} id='tableCloth'/>
      <Syrup pourSyrup={this.pourSyrup} blendColor={this.blendColor}/>
      <PancakeTray addPancakes={this.addPancakes}/>
      <Butter/>
      <div id='justSayin'>2250 SAT <br/> Just Sayin'</div>
      <PlateOfBacon addBacon={this.addBacon}/>
      
      <h2 className='headerThree'>...who enjoys a <u>Full-Stack</u> of Pancakes!<br/><br/><a target='_blank' href='https://github.com/reedmacdonald'><u>GitHub</u></a> <a target='_blank' href='https://linkedin.com/in/reed-macdonald'><u>LinkedIn</u></a> <a target='_blank' href='https://reedmacdonald.com'><u>Old Portfolio</u></a> <a href = {Resume} target = "_blank">Resume</a> 
      <br/>
      <a href='mailto:reedpmacdonald@gmail.com'>reedpmacdonald@gmail.com</a></h2>
    </div>
  )}
}

export default App;
