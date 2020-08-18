import React, { Component } from 'react'

class MyComponent extends Component {

    state = {
            'myname' : 'Skylar Grant Kerzner',
            'myage' : '28'
        }

    render() {
    
        return(
            <div>
                <h2 class='title'> 
                    <em>{this.props.greeting}{this.props.audience}.</em>
                </h2> 
                <p class='paragraph'>
                    My name is {this.state.myname} <br></br>
                    I am {this.state.myage} years old <br></br>
                    And this is my React component. 
                </p>
                
            </div>
        )
    }

}

export default MyComponent