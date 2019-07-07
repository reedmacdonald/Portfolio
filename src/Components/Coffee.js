import React, {Component} from 'react'



class Coffee extends Component{
    state={
        
        cupHeight:undefined,
        cupWidth:undefined,
        cupLeft:undefined,
        cupTop:undefined,
        cupIndex:undefined
    }
    moveCup=()=>{
        this.setState({
            cupLeft:'15vw',
            cupTop:'23vh',
            cupHeight:'50vh',
            cupWidth:'30vw',
            cupIndex:'90',
            cupTransform:'none'
        })
    }
    resetCup=()=>{
        this.setState({
            cupLeft:undefined,
            cupTop:undefined,
            cupHeight:undefined,
            cupWidth:undefined,
            cupIndex:undefined,
            cupTransform:undefined
        })

    }
  render(){
    return(
  <>
    <img  onClick={!this.state.cupHeight?this.moveCup:this.resetCup} /*onMouseOver={this.moveCup}*/ style={{position:'absolute',height:this.state.cupHeight,width:this.state.cupWidth,left:this.state.cupLeft,top:this.state.cupTop,zIndex:this.state.cupIndex,transform:this.state.cupTransform}} id='coffeeCup' src='http://pngimg.com/uploads/cup/cup_PNG1964.png'/>
    {this.state.cupHeight?<div onClick={this.resetCup} id='coffeeWords' ><h4>UCLA class of 2018</h4><h4>BA - Political Science</h4><h4>General Assembly - Software Engineering Immersive</h4></div>:<h1 style={{position:'absolute',top:'35.5vh',left:'35vw',zIndex:'32'}}><u>Education</u></h1>}
    {this.state.cupHeight?<><img className='steam' src='http://www.andycoffee.com/images/smoke.png'/>
    <img className='steam' id='steamTwo' src='http://www.andycoffee.com/images/smoke.png'/>
    <img className='steam' id='steamThree' src='http://www.andycoffee.com/images/smoke.png'/>
    <img className='steam' id='steamFour' src='http://www.andycoffee.com/images/smoke.png'/>
    </>:undefined}
  </>
    )
  }
}

export default Coffee