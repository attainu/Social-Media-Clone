import React from 'react'


const PostSummary = () => {
    return (
            <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src="https://picsum.photos/id/237/200/300" alt=" " />
                    </div>
                    <div className="card-content">
                    <span className="card-title"><strong>Name</strong></span>    
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    <p className="grey-text">09th August 2020</p>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default PostSummary;