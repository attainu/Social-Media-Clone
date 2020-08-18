import React, { Component } from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


class LikeButton extends (Component) {
    state = {
        count: 27
    }

    incrementMe = ()=>{
        // let newCount = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {

        return (
            <div style={{width:"27px",marginTop:"40px"}}>
              
                    <FavoriteBorderIcon onClick={this.incrementMe}/>{this.state.count}
            </div>

            
        )
}
}
export default LikeButton;
