import React, { Component } from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Badge from '@material-ui/core/Badge';
import './PostSummery.css';


class LikeButton extends (Component) {
    state = {
        count: 2
    }

    incrementMe = ()=>{
        // let newCount = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {

        return (
            <div className="like-btn" style={{width:"27px",marginTop:"40px"}}>
              <Badge badgeContent={this.state.count} color="secondary">
                    <FavoriteBorderIcon onClick={this.incrementMe}/>
              </Badge>
            </div>
)}}


export default LikeButton;
