"use client"

export default function Error({error, reset}) {
    return (
        <div>
            This shit is not working: {error.message}
            <button onClick={()=>reset()}>Reset!</button>
        </div>
    )
}