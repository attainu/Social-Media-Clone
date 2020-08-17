import React, { Component } from "react";


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
            <div>
              
            <button onClick={this.incrementMe}>{this.state.count} </button>
            </div>

            
        )
}
}
export default LikeButton;
