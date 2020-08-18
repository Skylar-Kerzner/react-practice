import React, { Component } from 'react'
import $, { data } from "jquery"
import dotenv from 'dotenv'

class FormComponent extends Component {

    state = {
        field1: '',
        field2: '',
        field3: '',
        isImageReady: false,
        image_url: '',
        html_link: '',
        unsplashApiKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    async getImage(url) {
        const response = await fetch(url)
        const data = await response.json()
    }

    thenGetImage(url) {
        const response = fetch(url)
        .then(response => response.json())
        .then(data => 
            this.setState({
            image_url: data.urls.small,
            html_link: data.links.html,
            isImageReady: true,
            })
        ) 
    }
   

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        $( 'h3' ).remove()
        $ ('#form1').remove()
        $( 'div.submit_holder' ).append('Submitted. <br><br>')
        const url = 'https://api.unsplash.com/photos/random?' + 'client_id=' + this.state.unsplashApiKey + '&query=' + this.state.field1
        $( 'div.submit_holder' ).append(url+'<br><br>')
        this.thenGetImage(url)
    }

    render() {
        let {field1, field2, field3, isImageReady} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler} id="form1">
                    <div>
                        <input
                            type="text"
                            name="field1"
                            value={field1}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            form="form1"
                            value="Submit"
                            onChange={this.changeHandler}
                        >Submit</button>
                    </div>
                </form>
                <h3> {field1} </h3>
                <div class="debug_holder">
                    {isImageReady ? <h6>{this.state.image_url}</h6> : <h6>debug will go here</h6>} 
                </div>
                <div class="submit_holder"></div>
                
                <div class="image_holder"> 
                    {isImageReady ? <img src={this.state.image_url} /> : <h6>image will go here</h6>} 
                </div>
                <div class="link_holder invisible">
                    {isImageReady ? <h6>{this.state.html_link}</h6> : <h6>link will go here</h6>} 
                </div>
                
            </div>
        )
        }
    }

export default FormComponent