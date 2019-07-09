import React, {Component} from 'react'



class Syrup extends Component{
    state={
        syrupHeight:undefined,
        syrupWidth:undefined,
        syrupTop:undefined,
        syrupLeft:undefined
    }
    moveSyrup=()=>{
        this.setState({
            syrupHeight:'700px',
            syrupWidth:'600px',
            syrupTop:'100px',
            syrupLeft:'300px',
            skillsHeight:'250px',
            skillsWidth:'200px',
            skillsTop:'375px',
            skillsLeft:'500px',
            syrupIndex:'700'
        })
    }
    resetSyrup=()=>{
        this.setState({
            syrupHeight:undefined,
            syrupWidth:undefined,
            syrupTop:undefined,
            syrupLeft:undefined,
            skillsHeight:undefined,
            skillsWidth:undefined,
            skillsTop:undefined,
            skillsLeft:undefined,
            syrupIndex:undefined
        })
    }

  render(){
    return(
  <>
    <img onDoubleClick={this.props.pourSyrup} onClick={!this.state.syrupHeight?this.moveSyrup:this.resetSyrup} style={{height:this.state.syrupHeight,width:this.state.syrupWidth,top:this.state.syrupTop,left:this.state.syrupLeft,zIndex:this.state.syrupIndex}} id='syrup' src='http://sipplssugarbush.com/wp-content/uploads/2017/12/Maple-Syrup-Bottle-With-Handle.png'/>
    <div onDoubleClick={this.props.pourSyrup} onClick={!this.state.syrupHeight?this.moveSyrup:this.resetSyrup} id="skills" style={{height:this.state.skillsHeight,width:this.state.skillsWidth,top:this.state.skillsTop,left:this.state.skillsLeft,zIndex:this.state.syrupIndex}}>
        {!this.state.syrupHeight?<h3>Skills<h6>Double click to pour (cs)Syrup</h6></h3>:<><h3><u>Skills</u></h3><ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>NodeJs</li>
            <li>SQL and NoSQL</li>
            <li>etc...</li>
            
            </ul>
            
            </>}
    </div>
  </>
    )
  }
}

export default Syrup