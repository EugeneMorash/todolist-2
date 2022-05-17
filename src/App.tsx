import React, {useState} from 'react';
import {Todolist2} from "./components/Todolist2";

export type ScheduleArrType = Array<ScheduleType>
export type ScheduleType = {
    id: number
    item: string
    isDone: boolean
}
export type FilterType = 'all' | 'completed' | 'skipped'


const schedule: ScheduleArrType = [
    {id: 101, item: "Waking up", isDone: true},
    {id: 102, item: "Exercise", isDone: false},
    {id: 103, item: "Washing", isDone: false},
    {id: 104, item: "Breakfast", isDone: true},
    {id: 105, item: "Lazy time", isDone: true},
    {id: 106, item: "Lunch", isDone: true},
    {id: 107, item: "Horse racing", isDone: false},
    {id: 108, item: "Afternoon tea", isDone: true},
    {id: 109, item: "Snooker", isDone: true},
    {id: 110, item: "Dinner", isDone: true},
    {id: 111, item: "Cigar time", isDone: true},
    {id: 112, item: "Washing", isDone: false},
    {id: 113, item: "Putting to bed", isDone: true}
]


function App() {

    const [filter, setFilter] = useState('all')
    const [item, setItem] = useState(schedule);

    const deleteItem = (id: number) => {
        setItem(item.filter((it) => it.id !== id))
    }

    let itemList = item;
    if (filter === 'completed') {
        itemList = item.filter(it => it.isDone)
    }
    if (filter === 'skipped') {
        itemList = item.filter(it => !it.isDone)
    }

    const filterListHandler = (filterName: FilterType) => {
        setFilter(filterName)
    }

    return (
        <div>
            <Todolist2 heading={'Daily Schedule'} itemList={itemList} deleteItem={deleteItem} filterListHandler={filterListHandler}/>


        </div>
    );
}

export default App;
