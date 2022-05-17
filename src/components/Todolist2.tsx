import React from "react";
import {ScheduleArrType} from "../App";

export type Todolist2PropsType = {
    heading: string
    schedule: ScheduleArrType

}

export function Todolist2(props: Todolist2PropsType) {
    return (


       <div>
           <h3>props.heading</h3>
           {props.schedule}
       </div>
    )
};