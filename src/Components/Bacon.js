import React, {Component} from 'react'



class Bacon extends Component{
    state={
        baconOneHeight:undefined,
        baconOneWidth:undefined,
        baconOneTransform:undefined,
        baconOneIndex:undefined,
        baconOneFilter:undefined,
        baconOneAnimation:undefined,
        baconTwoHeight:undefined,
        baconTwoWidth:undefined,
        baconTwoTransform:undefined,
        baconTwoIndex:undefined,
        baconTwoAnimation:undefined,
        baconThreeHeight:undefined,
        baconThreeWidth:undefined,
        baconThreeTransform:undefined,
        baconThreeIndex:undefined,
        baconThreeAnimation:undefined,
        baconOneBlend:undefined,
        baconTwoBlend:undefined,
        baconThreeBlend:undefined,
        experienceOne:'none',
        experienceTwo:'none',
        experienceThree:'none',
        experienceFour:'none',
        experienceFive:'none',
        experienceSix:'none',
        experienceSeven:'none'
    }
    moveBaconOne=()=>{
        this.setState({
            baconOneHeight:'40vh',
            baconOneWidth:'50vw',
            baconOneTransform:'rotate(0deg)',
            baconOneIndex:'101',
            baconOneFilter:'brightness(500%)',
            experienceOne:'block',
            transform:'none'
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
    moveBaconFour=()=>{
        this.setState({
            baconFourHeight:'40vh',
            baconFourWidth:'50vw',
            baconFourTransform:'rotate(0deg)',
            baconFourIndex:'101',
            baconFourFilter:'brightness(500%)',
            experienceFour:'block'
        })
    }
    moveBaconFive=()=>{
        this.setState({
            baconFiveHeight:'40vh',
            baconFiveWidth:'50vw',
            baconFiveTransform:'rotate(0deg)',
            baconFiveIndex:'101',
            baconFiveFilter:'brightness(500%)',
            experienceFive:'block'
        })
    }
    moveBaconSix=()=>{
        this.setState({
            baconSixHeight:'40vh',
            baconSixWidth:'50vw',
            baconSixTransform:'rotate(0deg)',
            baconSixIndex:'101',
            baconSixFilter:'brightness(500%)',
            experienceSix:'block'
        })
    }
    moveBaconSeven=()=>{
        this.setState({
            baconSevenHeight:'40vh',
            baconSevenWidth:'50vw',
            baconSevenTransform:'rotate(0deg)',
            baconSevenIndex:'101',
            baconSevenFilter:'brightness(500%)',
            experienceSeven:'block'
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
    resetBaconFour=()=>{
        this.setState({
            baconFourHeight:undefined,
            baconFourWidth:undefined,
            baconFourTransform:undefined,
            baconFourIndex:undefined,
            baconFourFilter:undefined,
            experienceFour:'none'
        })
    }
    resetBaconFive=()=>{
        this.setState({
            baconFiveHeight:undefined,
            baconFiveWidth:undefined,
            baconFiveTransform:undefined,
            baconFiveIndex:undefined,
            baconFiveFilter:undefined,
            experienceFive:'none'
        })
    }
    resetBaconSix=()=>{
        this.setState({
            baconSixHeight:undefined,
            baconSixWidth:undefined,
            baconSixTransform:undefined,
            baconSixIndex:undefined,
            baconSixFilter:undefined,
            experienceSix:'none'
        })
    }
    resetBaconSeven=()=>{
        this.setState({
            baconSevenHeight:undefined,
            baconSevenWidth:undefined,
            baconSevenTransform:undefined,
            baconSevenIndex:undefined,
            baconSevenFilter:undefined,
            experienceSeven:'none'
        })
    }
  render(){
    return(
  < >
    {this.props.amountOfBacon>0?<img style={{transform:this.state.baconOneTransform,height:this.state.baconOneHeight,width:this.state.baconOneWidth,zIndex:this.state.baconOneIndex,filter:this.state.baconOneFilter}} onClick={!this.state.baconOneTransform?this.moveBaconOne:this.resetBaconOne}src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png' className='bacon' id='baconOne'/>:undefined}

      {this.props.amountOfBacon>1?<img style={{transform:this.state.baconTwoTransform,height:this.state.baconTwoHeight,width:this.state.baconTwoWidth,zIndex:this.state.baconTwoIndex,filter:this.state.baconTwoFilter}} onClick={!this.state.baconTwoTransform?this.moveBaconTwo:this.resetBaconTwo} src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconTwo'/>:undefined}
      {this.props.amountOfBacon>2?<img style={{transform:this.state.baconThreeTransform,height:this.state.baconThreeHeight,width:this.state.baconThreeWidth,zIndex:this.state.baconThreeIndex,filter:this.state.baconThreeFilter}} onClick={!this.state.baconThreeTransform?this.moveBaconThree:this.resetBaconThree} src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconThree'/>:undefined}
      {this.props.amountOfBacon>3?<img style={{transform:this.state.baconFourTransform,height:this.state.baconFourHeight,width:this.state.baconFourWidth,zIndex:this.state.baconFourIndex,filter:this.state.baconFourFilter}} onClick={!this.state.baconFourTransform?this.moveBaconFour:this.resetBaconFour} src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconFour'/>:undefined}
      {this.props.amountOfBacon>4?<img style={{transform:this.state.baconFiveTransform,height:this.state.baconFiveHeight,width:this.state.baconFiveWidth,zIndex:this.state.baconFiveIndex,filter:this.state.baconFiveFilter}} onClick={!this.state.baconFiveTransform?this.moveBaconFive:this.resetBaconFive} src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconFive'/>:undefined}
      {this.props.amountOfBacon>5?<img style={{transform:this.state.baconSixTransform,height:this.state.baconSixHeight,width:this.state.baconSixWidth,zIndex:this.state.baconSixIndex,filter:this.state.baconSixFilter}} onClick={!this.state.baconSixTransform?this.moveBaconSix:this.resetBaconSix} src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconSix'/>:undefined}
      {this.props.amountOfBacon>6?<img style={{transform:this.state.baconSevenTransform,height:this.state.baconSevenHeight,width:this.state.baconSevenWidth,zIndex:this.state.baconSevenIndex,filter:this.state.baconSevenFilter}} onClick={!this.state.baconSevenTransform?this.moveBaconSeven:this.resetBaconSeven}src='http://pngriver.com/wp-content/uploads/2017/11/Bacon-food-transparent-png-images-free-download-BaconFest_WebSlider_baconslice.png'className='bacon' id='baconSeven'/>:undefined}
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
        <div onClick={this.resetBaconThree} className='baconExperience' id='experienceFour' style={{display:this.state.experienceFour}}>
            Los Angeles World Affairs Council
            <br/>
            Development Intern
            <br/>
            <ul>
                <li>Researched and formally invited over a dozen speakers to various networking events organized by the LAWAC.</li>
                <li>Troubleshooted problems for members and helped manage payment and scheduling.</li>
            </ul>
        </div>
        <div onClick={this.resetBaconFive} className='baconExperience' id='experienceFive' style={{display:this.state.experienceFive}}>
            California State Senate
            <br/>
            Legislative Intern
            <br/>
            <ul>
                <li>Researched and formally invited over a dozen speakers to various networking events organized by the LAWAC.</li>
                <li>Troubleshooted problems for members and helped manage payment and scheduling.</li>
            </ul>
        </div>
        <div onClick={this.resetBaconSix} className='baconExperience' id='experienceSix' style={{display:this.state.experienceSix}}>
            UCLA Radio
            <br/>
            Radio Host
            <br/>
            <ul>
                <li>Researched and formally invited over a dozen speakers to various networking events organized by the LAWAC.</li>
                <li>Troubleshooted problems for members and helped manage payment and scheduling.</li>
            </ul>
        </div>
        <div onClick={this.resetBaconSeven} className='baconExperience' id='experienceSeven' style={{display:this.state.experienceSeven}}>
            Daily Bruin
            <br/>
            Writer
            <br/>
            <ul>
                <li>Researched and formally invited over a dozen speakers to various networking events organized by the LAWAC.</li>
                <li>Troubleshooted problems for members and helped manage payment and scheduling.</li>
            </ul>
        </div>

      <h1 id='experience'><u>Experience</u></h1>
  </>
    )
  } 
}

export default Bacon