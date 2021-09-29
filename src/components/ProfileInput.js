import React from 'react';

function ProfileInput(props) {
    return (
        <div>
            <input placeholder={props.name}></input>
        </div>
    )
}

export default ProfileInput;