import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class Practices extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            practices: []
        };
    }

    componentDidMount() {
        axios.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-87.6270172,100&skip=2&limit=10&user_key=53cf4cd56281775fc6fe713f4ab77bac')
            .then(response => {
                response.data.data.forEach(practice => {

                    practice.practices.forEach(practice => {
                        let joinedPractices = this.state.practices.concat(<p key={practice.uid}><b>{practice.name}</b>, {practice.visit_address.city}, {practice.visit_address.state}</p>);
                        this.setState({ practices: joinedPractices })
                    });


                });
            });
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Practices</h1>
                <div>{this.state.practices}</div>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { Practices };