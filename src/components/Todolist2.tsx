import React from "react";
import {ScheduleArrType} from "../App";

export type Todolist2PropsType = {
    heading: string
    schedule: ScheduleArrType

}

export function Todolist2(props: Todolist2PropsType) {

    const itemArr = props.schedule.map(item => {
        return <li key={item.id}>
            <input type='checkbox' checked={item.isDone} />
               <span>{item.item}</span>
        </li>
    })
    return (
       <div>
           <h3>props.heading</h3>
           <div>
           {itemArr}
           </div>
       </div>
    )
};