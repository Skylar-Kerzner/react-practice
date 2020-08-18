import React, { Component } from 'react'

class MyComponent extends Component {

    state = {
            'myname' : 'Skylar Kerzner',
            'myage' : '28'
        }

    render() {
    
        return(
            <div>
                <h2 class='title'> 
                    <em>{this.props.greeting}{this.props.audience}.</em>
                </h2> 
                <p class='paragraph'>
                    Created by {this.state.myname} <br></br>
                </p>
                
            </div>
        )
    }

}

export default MyComponent