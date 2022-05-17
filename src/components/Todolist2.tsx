import React from "react";
import {FilterType, ScheduleArrType} from "../App";

export type Todolist2PropsType = {
    heading: string
    itemList: ScheduleArrType
    deleteItem: (id: number) => void
    filterListHandler: (filter: FilterType) => void
}

export function Todolist2(props: Todolist2PropsType) {

    const itemArr = props.itemList.map(item => {

        const deleteClickHandler = (id: number) => {
            props.deleteItem(id)
        }

        return <li key={item.id}>
            <input type='checkbox' checked={item.isDone} />
               <span>{item.item}</span>
                <button type='button' onClick={() => {deleteClickHandler(item.id)}}>Terminate!</button>
        </li>
    })
    return (
       <div>
           <h3>{props.heading}</h3>
           <div>
           {itemArr}
           </div>
           <div>
           <button type="button" onClick={()=>{props.filterListHandler('all')}}>All</button>
           <button type="button" onClick={()=>{props.filterListHandler('completed')}}>Completed</button>
           <button type="button" onClick={()=>{
               props.filterListHandler('skipped')}}>Skipped</button>
           </div>
       </div>
    )
};