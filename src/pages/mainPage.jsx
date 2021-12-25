import React from "react";
import CustomButton from "../components/buttons/customButton";
import CustomeImage from "../components/customimg/customImage";
import '../utils/utils.css'
import './style.css'
class MainPage extends React.Component{
    state={counter:0,likes:0,dislikes:0}

    countClick= async (e)=>{
        if(this.state.counter<10){
        const {name}=e.target;
        this.setState({[name]:this.state[name]+1});
        this.setState({counter:this.state.counter+1});
        }
    }
    zeroState=()=>{
        this.setState({counter:0,likes:0,dislikes:0});
    }

    render(){
        return (
            <div className="flexing-center col main-box">
                <div className="flexing-center space box">
                     <h1>{this.state.likes}</h1>
                     <h1>{this.state.dislikes}</h1>
                </div>
                <div className="flexing-center">
                     <CustomeImage counter={this.state.counter} zeroState={this.zeroState} likes={this.state.likes} dislikes={this.state.dislikes} />
                </div>
                <div className="flexing-center space box">
                    <CustomButton text={'Like'} color='green' name='likes' callback={this.countClick}/>
                    <CustomButton text={'Dislike'} color='red'name='dislikes' callback={this.countClick}/>
                </div>
                          
            </div>
        )
    }
}
export default MainPage;