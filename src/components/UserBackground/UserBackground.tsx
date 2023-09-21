import React, { useEffect} from "react";
import { FileInput } from "../UserAvatar/UserAvatar.style";
import { string } from "yup";

interface UserBackgroundProps {
    backgroundUrl: string
    onBackgroundClick: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const UserBackground = ({ backgroundUrl, onBackgroundClick}: UserBackgroundProps) => {
    useEffect(() =>{
        if(!backgroundUrl) {

        }
    }, [backgroundUrl])

    return (
        <>
        {backgroundUrl?
            (<img src={backgroundUrl}/>):
            (<div className="profile-background"></div>)        
        }
        <FileInput type="file" onChange={onBackgroundClick}/>
        </>
    )
}