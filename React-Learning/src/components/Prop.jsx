import React from 'react'

const Prop = ({ id, name, avtar, role, location, experience }) => {
    return (
        <div>

            <div style={
                {
                    border: "2px solid black",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "20px"
                }

            }>
                <h4>emp_id: {id}</h4>

                <h4>Name: {name}</h4>
                <img src={avtar} alt="emp" />
                <h4>Role: {role}</h4>
                <h4>location: {location}</h4>
                <h4>experience: {experience}</h4>
            </div>
        </div>
    )
}

export default Prop