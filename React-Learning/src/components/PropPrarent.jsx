import React from 'react'
import Prop from './Prop'

const PropPrarent = () => {
    const users = [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Frontend Developer",
            location: "Pune",
            experience: "2 years",
            avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
            id: 2,
            name: "Anjali Patel",
            role: "Backend Developer",
            location: "Mumbai",
            experience: "3 years",
            avatar: "https://i.pravatar.cc/150?img=2"
        },
        {
            id: 3,
            name: "Vikram Singh",
            role: "Full Stack Developer",
            location: "Bangalore",
            experience: "4 years",
            avatar: "https://i.pravatar.cc/150?img=3"
        },
        {
            id: 4,
            name: "Sneha Gupta",
            role: "UI/UX Designer",
            location: "Delhi",
            experience: "2 years",
            avatar: "https://i.pravatar.cc/150?img=4"
        }
    ];
    return (
        <>
            {
                users.map((emp) => (
                    <>
                        <Prop id={emp.id}
                            name={emp.name}
                            role={emp.role}
                            location={emp.location}
                            experience={emp.experience}
                            avtar={emp.avatar} />
                    </>
                ))
            }
        </>
    )
}

export default PropPrarent