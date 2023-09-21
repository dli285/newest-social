import { type } from "os"
import React, {useState, useEffect} from "react"


type UserParameterProps = {
    persons: string
    numberOfPeople: number
}

export const UserParameter = ({ persons, numberOfPeople} : UserParameterProps) => {
   return (
        <div className="parameter">
            <span className="key">{persons}</span>
            <span className="value">{numberOfPeople}</span>
        </div>
   ) 
}
