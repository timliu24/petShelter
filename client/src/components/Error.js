import React from 'react';
import {Link} from '@reach/router';

const Error = (props) => {
    return (
    <div>
            <p>We're sorry, pet name already exist in our database. Would you like to add a new pet?</p>
            <Link to={"/new"}>Add Pet</Link>
    </div>
    )
}

export default Error;