import React, { Component } from 'react'

import PostList from "../posts/PostList";



class Dashboard extends Component {
    render () {
        return (
            <div className="dashbord conatiner">
                <div className="row">
                    <div className="col s12 m6">
                        <PostList/>
                    </div>
                    
                   
                </div>
            </div>
        )
    }
}
export default Dashboard;