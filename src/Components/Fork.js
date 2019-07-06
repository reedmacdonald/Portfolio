import React, {Component} from 'react'



class Fork extends Component{
    state={
        height:undefined,
        width:undefined,
        transform:undefined,
        top:undefined,
        left:undefined
    }
    moveFork=()=>{
        this.setState({
            height:'900px',
            width:'900px',
            transform:'rotate(90deg)',

        })
        console.log('Moving fork!')
    }
    resetFork=()=>{
        this.setState({
            height:undefined,
            width:undefined,
            transform:undefined,
            top:undefined,
            left:undefined
        })
    }
    forkOnBacon=()=>{
        this.setState({
            height:undefined,
            width:undefined,
            transform:'rotate(45deg)',
            top:this.props.baconTop,
            left:this.props.baconLeft
        })
        setTimeout(this.props.removeBacon, 2000);
        setTimeout(this.resetFork, 2000);
        //this.props.removeBacon()
        console.log('forkingOn bacon')
        console.log(this.props.baconLeft,'     this.props.baconLeft')
        console.log(this.props.baconTop,'     this.props.baconTop')
    }
    
  render(){
    return(
  < >
    <img 
    onClick={!this.state.width?this.moveFork:this.resetFork}
    style={{height:this.state.height,width:this.state.width,transform:this.state.transform,top:this.state.top,left:this.state.left}}id='fork' src='http://pngimg.com/uploads/fork/fork_PNG3066.png'/>
    {this.state.width?<><h4 onClick={this.forkOnBacon} id='eatBacon'>Eat Bacon</h4><h4 onClick={this.props.removePancake} id='eatPancake'>Eat Pancake</h4></>:undefined}
  </>
    )
  }
}

export default Fork