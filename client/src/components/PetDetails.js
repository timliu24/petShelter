import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import '../App.css';

const PetDetails = (props) => {
    const {_id} = props;
    const [petDetail, setPetDetail] = useState({});
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/pets/${_id}`)
        .then((response) => {
            console.log(response.data);
            setPetDetail(response.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const deleteOne = () => {
        axios
            .delete(`http://localhost:8000/api/pets/${_id}`)
            .then((response) => {
                console.log(response.data);
                navigate("/");
            })
            .catch((err) => console.log(err));
        };

    // class PetDetails extends Component {
    //     state ={count: 0}
    //     incrementMe = () => {
    //         let newCount = this.state.count + 1
    //         this.setState({
    //             count: newCount
    //         })
    //     }
    // }
    return(
        <div>
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/"}>back to home</Link>
            </header>
            <h3>Details about: {petDetail.petName}</h3>
            <button className="button-adopt" onClick={deleteOne}>Adopt {petDetail.petName}</button>
            <div className="form-box">
                <div className="detail-box">
                <p>Pet type: {petDetail.petType}</p>
                <p>Description: {petDetail.petDescription}</p>
                <p>Skills: {petDetail.skillOne}, {petDetail.skillTwo}, {petDetail.skillThree}</p>
                </div>

            {/* <button onClick={this.incrementMe}>Likes {petDetail.petName}</button> {this.state.country} */}
            </div>

        </div>
    );
};

export default PetDetails;