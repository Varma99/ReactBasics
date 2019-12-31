import React, { Component } from 'react';
import './Avatar.css'
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component {
    constructor () {
        super();
        this.state = {
            name : "Bye Bye 2019 !!!"
        }
    }

    namechange() {
        this.setState({
            name : "Welcome 2020 !!!"
        })
    }

    render () {
        const avatarlistarray = [
            {
                id : "1", name : "VishnuPriya", work : "Web Developer"
            },
            {
                id : "1", name : "Krishna", work : "Cyber Ninja"
            },
            {
                id : "1", name : "Sindhu", work : "Techie"
            },
            {
                id : "1", name : "Surya", work : "NeuroScience"
            }
        ]
    
        const arrayavatarcard = avatarlistarray.map((avatarcard,i) => {
           return <Avatarlist 
                      key = {i}
                      id = {avatarlistarray[i].id} 
                      name = {avatarlistarray[i].name} 
                      work = {avatarlistarray[i].work}/>
        })
        return (
            <div className = "mainpage">
              <h1>{this.state.name}</h1>
              {arrayavatarcard}
            <button onClick = {() => this.namechange()}>Liked it ?</button>
            </div>
        )
    }
}

export default Avatar;