import React, {Component} from 'react'



class Coffee extends Component{
    state={
        
        cupHeight:undefined,
        cupWidth:undefined,
        cupMarginLeft:undefined,
        cupMarginTop:undefined,
        cupIndex:undefined
    }
    moveCup=()=>{
        this.setState({
            cupMarginLeft:'300px',
            cupMarginTop:'-450px',
            cupHeight:'500px',
            cupWidth:'600px',
            cupIndex:'50'
        })
    }
    resetCup=()=>{
        this.setState({
            cupMarginLeft:undefined,
            cupMarginTop:undefined,
            cupHeight:undefined,
            cupWidth:undefined,
            cupIndex:undefined
        })

    }
  render(){
    return(
  <>
    <img  onClick={!this.state.cupHeight?this.moveCup:this.resetCup} /*onMouseOver={this.moveCup}*/ style={{height:this.state.cupHeight,width:this.state.cupWidth,marginLeft:this.state.cupMarginLeft,marginTop:this.state.cupMarginTop,zIndex:this.state.cupIndex}} id='coffeeCup' src='http://pngimg.com/uploads/cup/cup_PNG1964.png'/>
    {this.state.cupHeight?<div onClick={this.resetCup} id='coffeeWords' ><h4>UCLA class of 2018</h4><h4>BA - Political Science</h4><h4>General Assembly - Software Engineering Immersive</h4></div>:<h1 style={{position:'absolute',top:'10%',right:'30%',zIndex:'32'}}><u>Education</u></h1>}
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