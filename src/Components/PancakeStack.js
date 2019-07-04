import React, {Component} from 'react'



class PancakeStack extends Component{
    state={
        pancakeOne:undefined,
        pancakeOneHeight:undefined,
        pancakeOneWidth:undefined,
        pancakeTwo:undefined,
        pancakeTwoHeight:undefined,
        pancakeTwoWidth:undefined,
        pancakeThree:undefined,
        pancakeThreeHeight:undefined,
        pancakeThreeWidth:undefined,
        pancakeFour:undefined,
        pancakeFourHeight:undefined,
        pancakeFourWidth:undefined,
        pancakeOneLeft:undefined,
        pancakeTwoLeft:undefined,
        pancakeThreeLeft:undefined,
        pancakeFourLeft:undefined
    }
    changePancakeOne=()=>{
        this.setState({pancakeOne:true,pancakeOneHeight:'600px',pancakeOneWidth:'600px',pancakeOneLeft:'20%'})
        console.log('hitting pancake one')
    }
    undoPancakeOne=()=>{
        this.setState({pancakeOne:false,pancakeOneLeft:undefined,pancakeOneHeight:undefined,pancakeOneWidth:undefined})
        console.log('leaving pancake one')
    }
    changePancakeTwo=()=>{
        this.setState({pancakeTwo:true,pancakeTwoLeft:'20%',pancakeTwoHeight:'600px',pancakeTwoWidth:'600px'})
        console.log('hiiting pancake two')
    }
    undoPancakeTwo=()=>{
        this.setState({pancakeTwo:false,pancakeTwoLeft:undefined,pancakeTwoHeight:undefined,pancakeTwoWidth:undefined})
        console.log('leaving pancake two')
    }
    changePancakeThree=()=>{
        this.setState({pancakeThree:true,pancakeThreeLeft:'20%',pancakeThreeHeight:'600px',pancakeThreeWidth:'600px'})
        console.log('hitting pancake three')
    }
    undoPancakeThree=()=>{
        this.setState({pancakeThree:false,pancakeThreeLeft:undefined,pancakeThreeHeight:undefined,pancakeThreeWidth:undefined})
        console.log('leaving pancake three')
    }
    changePancakeFour=()=>{
        this.setState({pancakeFour:true,pancakeFourLeft:'20%',pancakeFourHeight:'600px',pancakeFourWidth:'600px'})
        console.log('hitting pancake four')
    }
    undoPancakeFour=()=>{
        this.setState({pancakeFour:false,pancakeFourLeft:undefined,pancakeFourHeight:undefined,pancakeFourWidth:undefined})
        console.log('leaving pancake four')
    }

  render(){

    return(
  <div className='pancakeStack'>
      <div  onClick={!this.state.pancakeOne?this.changePancakeOne:this.undoPancakeOne} /*onMouseOver={this.changePancakeOne}*/ style={{marginLeft:this.state.pancakeOneLeft,height:this.state.pancakeOneHeight,width:this.state.pancakeOneWidth}} id='pancakeOne' className="pancake">{this.state.pancakeOne?<><h5>Project One</h5><h5>Jurassic Pong</h5><a target='_blank' href='https://pages.git.generalassemb.ly/reedmacdonald/Jurassic-Pong/'><img className='projectImages' src='https://i.imgur.com/A3qxrdM.png'/></a><h5>This project incorporates JavaScript, HTML, CSS and JQuery to make a two player game full of animation and collision-detection.</h5></>:undefined}</div>
      <div  onClick={!this.state.pancakeTwo?this.changePancakeTwo:this.undoPancakeTwo} /*onMouseOver={this.changePancakeTwo}*/ style={{marginLeft:this.state.pancakeTwoLeft,height:this.state.pancakeTwoHeight,width:this.state.pancakeTwoWidth}} id='pancakeTwo' className="pancake">{this.state.pancakeTwo?<><h5>Project Two</h5><h5>ParTees</h5><a target='_blank' href='https://partee-rzk.herokuapp.com/home#'><img className='projectImages' src='https://i.imgur.com/9bW961Z.png'/></a><h5>A group project, ParTees is an app where people can network around a game of golf. I worked extensively on the RESTful routes in the backend. This project incorporates Mongoose, MongoDB, CSS, EJS, JavaScript, Bootstrap, and others.</h5></>:undefined}</div>
      <div  onClick={!this.state.pancakeThree?this.changePancakeThree:this.undoPancakeThree} /*onMouseOver={this.changePancakeThree}*/ style={{marginLeft:this.state.pancakeThreeLeft,height:this.state.pancakeThreeHeight,width:this.state.pancakeThreeWidth}} id='pancakeThree' className="pancake">{this.state.pancakeThree?<><h5>Project Three</h5><h5>Maze Page</h5><a target='_blank' href='https://mazepagereed.herokuapp.com/'><img className='projectImages' src='https://i.imgur.com/uGuJp6S.png'/></a><h5>In this project based off of a scene from 'Inception', a user builds mazes for other users to try to solve. This projects contains a separate backend API and utilizes CORS, MongoDB, Firebase, React and other programs.</h5></>:undefined}</div>
      <div  onClick={!this.state.pancakeFour?this.changePancakeFour:this.undoPancakeFour} /*onMouseOver={this.changePancakeFour}*/ style={{marginLeft:this.state.pancakeFourLeft,height:this.state.pancakeFourHeight,width:this.state.pancakeFourWidth}} id='pancakeFour' className="pancake">{this.state.pancakeFour?<><h5>Project Four</h5><h5>NewsWorthy</h5><a target='_blank' href='https://newsworthyreed.herokuapp.com/'><img className='projectImages' src='https://i.imgur.com/Jk5C84D.png'/></a><h5>I made this app using React, MongoDB, a third-party API, data-visualization libraries, and other technologies. In this web-app, a user tries to fill in the missing word on headlines spanning four categories. </h5></>:<h1 style={{lineHeight:'300px',marginLeft:'0%'}}><u>Projects</u></h1>}</div>
    
  </div>
    )
  }
}

export default PancakeStack