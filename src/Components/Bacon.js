import React, {Component} from 'react'



class Bacon extends Component{
    state={
        baconOneHeight:undefined,
        baconOneWidth:undefined,
        baconOneTransform:undefined,
        baconOneIndex:undefined,
        baconOneFilter:undefined,
        baconTwoHeight:undefined,
        baconTwoWidth:undefined,
        baconTwoTransform:undefined,
        baconTwoIndex:undefined,
        baconThreeHeight:undefined,
        baconThreeWidth:undefined,
        baconThreeTransform:undefined,
        baconThreeIndex:undefined,
        baconOneBlend:undefined,
        baconTwoBlend:undefined,
        baconThreeBlend:undefined,
        experienceOne:'none',
        experienceTwo:'none',
        experienceThree:'none'
    }
    moveBaconOne=()=>{
        this.setState({
            baconOneHeight:'40vh',
            baconOneWidth:'50vw',
            baconOneTransform:'rotate(0deg)',
            baconOneIndex:'101',
            baconOneFilter:'brightness(500%)',
            experienceOne:'block'
        })
    }
    moveBaconTwo=()=>{
        this.setState({
            baconTwoHeight:'40vh',
            baconTwoWidth:'50vw',
            baconTwoTransform:'rotate(0deg)',
            baconTwoIndex:'101',
            baconTwoFilter:'brightness(500%)',
            experienceTwo:'block'
        })
    }
    moveBaconThree=()=>{
        this.setState({
            baconThreeHeight:'40vh',
            baconThreeWidth:'50vw',
            baconThreeTransform:'rotate(0deg)',
            baconThreeIndex:'101',
            baconThreeFilter:'brightness(500%)',
            experienceThree:'block'
        })
    }
    resetBaconOne=()=>{
        this.setState({
            baconOneHeight:undefined,
            baconOneWidth:undefined,
            baconOneTransform:undefined,
            baconOneIndex:undefined,
            baconOneFilter:undefined,
            experienceOne:'none'
        })
    }
    resetBaconTwo=()=>{
        this.setState({
            baconTwoHeight:undefined,
            baconTwoWidth:undefined,
            baconTwoTransform:undefined,
            baconTwoIndex:undefined,
            baconTwoFilter:undefined,
            experienceTwo:'none'
        })
    }
    resetBaconThree=()=>{
        this.setState({
            baconThreeHeight:undefined,
            baconThreeWidth:undefined,
            baconThreeTransform:undefined,
            baconThreeIndex:undefined,
            baconThreeFilter:undefined,
            experienceThree:'none'
        })
    }
  render(){
    return(
  < >
    {this.props.amountOfBacon>0?<img style={{transform:this.state.baconOneTransform,height:this.state.baconOneHeight,width:this.state.baconOneWidth,zIndex:this.state.baconOneIndex,filter:this.state.baconOneFilter}} onClick={!this.state.baconOneTransform?this.moveBaconOne:this.resetBaconOne}src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png' className='bacon' id='baconOne'/>:undefined}

      {this.props.amountOfBacon>1?<img style={{transform:this.state.baconTwoTransform,height:this.state.baconTwoHeight,width:this.state.baconTwoWidth,zIndex:this.state.baconTwoIndex,filter:this.state.baconTwoFilter}} onClick={!this.state.baconTwoTransform?this.moveBaconTwo:this.resetBaconTwo} src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconTwo'/>:undefined}
      {this.props.amountOfBacon>2?<img style={{transform:this.state.baconThreeTransform,height:this.state.baconThreeHeight,width:this.state.baconThreeWidth,zIndex:this.state.baconThreeIndex,filter:this.state.baconThreeFilter}} onClick={!this.state.baconThreeTransform?this.moveBaconThree:this.resetBaconThree} src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconThree'/>:undefined}
      {this.props.amountOfBacon>3?<img src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconFour'/>:undefined}
      {this.props.amountOfBacon>4?<img src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconFive'/>:undefined}
      {this.props.amountOfBacon>5?<img src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconSix'/>:undefined}
      {this.props.amountOfBacon>6?<img src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconSeven'/>:undefined}
        <div onClick={this.resetBaconOne}className='baconExperience' id='experienceOne' style={{display:this.state.experienceOne}}>
            Congress
            <br/>
            Capitol Hill Intern
            <br/>
            <ul>
                <li>Wrote over 60 letters to constituents promoting the Congressman’s ideas and voting record on different policy issues.</li>
                <li>Attended 10 briefings and wrote in-depth memos for the 12 person staff on the substance of the briefings.</li>
            </ul>
        </div>
        <div onClick={this.resetBaconTwo} className='baconExperience' id='experienceTwo' style={{display:this.state.experienceTwo}}>
            Variety Business Intelligence
            <br/>
            Marketing and Sales Intern
            <br/>
            <ul>
                <li>Helping streamline sales by keeping track of sales and account information for the Variety Business Intelligence team.</li>
                <li>Grew the social media presence by drafting social media posts and assisting with the copy on various marketing materials.</li>
            </ul>
        </div>
        <div onClick={this.resetBaconThree} className='baconExperience' id='experienceThree' style={{display:this.state.experienceThree}}>
            Senator Feinstein
            <br/>
            Constituents Correspondence Intern
            <br/>
            <ul>
                <li>Assisted in preparing Senator Feinstein’s visit to Los Angeles to speak on the topic of gun control.</li>
                <li>Corresponded daily with the DC office to relay problems and updates of the political developments of Los Angeles.</li>
            </ul>
        </div>

      <h1 id='experience'><u>Experience</u></h1>
  </>
    )
  } 
}

export default Bacon