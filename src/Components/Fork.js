import React, {Component} from 'react'



class Fork extends Component{
    state={
        x:undefined,
        y:undefined
    }
    
  render(){
    return(
  < >
    <img style={{marginTop:this.state.y,marginLeft:this.state.x}}id='fork' src='http://pngimg.com/uploads/fork/fork_PNG3066.png'/>
  </>
    )
  }
}

export default Fork