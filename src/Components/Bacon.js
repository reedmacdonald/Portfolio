import React, {Component} from 'react'



class Bacon extends Component{
    state={
        baconOneHeight:undefined,
        baconOneWidth:undefined,
        baconOneTransform:undefined,
        baconTwoHeight:undefined,
        baconTwoWidth:undefined,
        baconTwoTransform:undefined,
        baconThreeHeight:undefined,
        baconThreeWidth:undefined,
        baconThreeTransform:undefined,
        baconOneBlend:undefined,
        baconTwoBlend:undefined,
        baconThreeBlend:undefined
    }
    moveBaconOne=()=>{
        this.setState({
            baconOneHeight:'500px',
            baconOneWidth:'70px',
            baconOneTransform:'rotate(90deg)',
            baconOneBlend:'luminosity'
        })
    }
    moveBaconTwo=()=>{
        this.setState({
            baconTwoHeight:'500px',
            baconTwoWidth:'70px',
            baconTwoTransform:'rotate(90deg)',
            baconTwoBlend:'luminosity'
        })
    }
    moveBaconThree=()=>{
        this.setState({
            baconThreeHeight:'500px',
            baconThreeWidth:'70px',
            baconThreeTransform:'rotate(90deg)',
            baconThreeBlend:'luminosity'
        })
    }
    resetBaconOne=()=>{
        this.setState({
            baconOneHeight:undefined,
            baconOneWidth:undefined,
            baconOneTransform:undefined,
            baconOneBlend:undefined
        })
    }
    resetBaconTwo=()=>{
        this.setState({
            baconTwoHeight:undefined,
            baconTwoWidth:undefined,
            baconTwoTransform:undefined,
            baconTwoBlend:undefined
        })
    }
    resetBaconThree=()=>{
        this.setState({
            baconThreeHeight:undefined,
            baconThreeWidth:undefined,
            baconThreeTransform:undefined,
            baconThreeBlend:undefined
        })
    }
  render(){
    return(
  < >
      <div onClick={!this.state.baconOneHeight?this.moveBaconOne:this.resetBaconOne}  style={{height:this.state.baconOneHeight,width:this.state.baconOneWidth,transform:this.state.baconOneTransform,backgroundBlendMode:this.state.baconOneBlend}} className="bacon" id="baconOne">{this.state.baconOneBlend?<h5 class='baconWords'>Feinstein</h5>:undefined}</div>
      <div onClick={!this.state.baconTwoHeight?this.moveBaconTwo:this.resetBaconTwo}  style={{height:this.state.baconTwoHeight,width:this.state.baconTwoWidth,transform:this.state.baconTwoTransform,backgroundBlendMode:this.state.baconTwoBlend}}className="bacon" id="baconTwo">{this.state.baconTwoBlend?<h5 class='baconWords'>Congress</h5>:undefined}</div>
      <div onClick={!this.state.baconThreeHeight?this.moveBaconThree:this.resetBaconThree}  style={{height:this.state.baconThreeHeight,width:this.state.baconThreeWidth,transform:this.state.baconThreeTransform,backgroundBlendMode:this.state.baconThreeBlend}}className="bacon" id="baconThree">{this.state.baconThreeBlend?<h5 class='baconWords'>Variety Business Intelligence</h5>:undefined}</div>
      <h1 id='experience'><u>Experience</u></h1>
  </>
    )
  } 
}

export default Bacon