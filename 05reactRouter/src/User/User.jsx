import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userId} = useParams()
    return(
        <div className="text-center text-2xl text-white bg-gray-700">
            User: {userId}
        </div>
    )
}

export default User