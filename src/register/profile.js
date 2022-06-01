/*
By Ahmed Al-Ghezi
 */

import React, {Component} from "react";
import {useNavigate} from 'react-router-dom';
import PostSignup from "../DB/postSignup";
export class MyProfile extends Component {


    constructor(props) {
        super(props);
        this.state = {isCoachAdmin:false,  isAdmin:false};
        this.updateProfile = this.updateProfile.bind(this);
    }

    componentDidMount() {
        PostSignup.isLogin().then(response => {
            if (response.data.res === "error")
                alert("some error has happened");
            if (response.data.res === "no") {
                alert("You are not logged in, please login");
                return
            }
            if(response.data.res === "ok"){
                if(response.data.role.toUpperCase().includes("ADMIN"))
                    this.setState({isAdmin:true});
                if(response.data.role === "trainerAdmin")
                    this.setState({isCoachAdmin:true});
            }

        }).catch(e => {
            console.log(e);
            alert("some error has happened");
        });
    }


    handleSubmit(event) {
        window.location.href = "https://inprove-sport.info/limesurvey";
        event.preventDefault();
    }

    updateProfile() {
        this.props.navigate('/reg/updateProfile');
    }

    goToCoaches = (event) =>{
        event.preventDefault();
        this.props.navigate('/trainer/adminMain');
    }

    goToCSV = (event) =>{
        event.preventDefault();
        this.props.navigate('/csv/reader');
    }

    goToLime = (event) =>{
        event.preventDefault();
        this.props.navigate('/lime/control');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Welcome to your page!</h3>
                <button type="submit" className="btn btn-primary btn-block">Continue to Surveys</button>
                <button onClick={this.updateProfile}> update profile</button>
                <button onClick={this.goToCoaches} hidden={!this.state.isCoachAdmin}> Coaches interface</button>
                <button onClick={this.goToCSV} hidden={!this.state.isAdmin}> CSV interface</button>
                <button onClick={this.goToLime} hidden={!this.state.isAdmin}> LimeSurvery control</button>
            </form>
        );
    }



}

function Profile(props) {
    let navigate = useNavigate();
    return <MyProfile {...props} navigate={navigate} />
}

export default Profile;