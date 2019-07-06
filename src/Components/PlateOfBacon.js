import React, {Component} from 'react'



class PlateOfBacon extends Component{
  render(){
    return(
  < >
    <img onClick={this.props.addBacon} id='plateOfBacon' src='https://i.ya-webdesign.com/images/plate-of-bacon-png.png'/>
  </>
    )
  }
}

export default PlateOfBacon