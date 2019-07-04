import React, {Component} from 'react'



class Butter extends Component{
    state={
        numButters:0
    }
    addButters = () => {
        this.setState({
            numButters:this.state.numButters+1
        })
    }

    
  render(){
    return(
  < >
    {this.state.numButters>0?<img className='butterSlice' id='butterSliceOne' src='http://pngimg.com/uploads/butter/butter_PNG19.png'/>:undefined}
    {this.state.numButters>1?<img className='butterSlice' id='butterSliceTwo' src='http://pngimg.com/uploads/butter/butter_PNG19.png'/>:undefined}
    {this.state.numButters>2?<img className='butterSlice' id='butterSliceThree' src='http://pngimg.com/uploads/butter/butter_PNG19.png'/>:undefined}
    {this.state.numButters>3?<img className='butterSlice' id='butterSliceFour' src='http://pngimg.com/uploads/butter/butter_PNG19.png'/>:undefined}
    {this.state.numButters>4?<img className='butterSlice' id='butterSliceFive' src='http://pngimg.com/uploads/butter/butter_PNG19.png'/>:undefined}
    <img onClick={this.addButters} id='butterStick' src='https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0ae.png'/>
  </>
    )
  }
}

export default Butter