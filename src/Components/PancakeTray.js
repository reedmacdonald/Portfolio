import React, {Component} from 'react'



class PancakeTray extends Component{
  render(){
    return(
  < >
    <img onClick={this.props.addPancakes} id='pancakeTray' src='https://www.pngarts.com/files/3/Pancake-PNG-Transparent-Image.png'/>
  </>
    )
  }
}

export default PancakeTray