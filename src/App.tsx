import React, {useState} from 'react';
import {Todolist2} from "./components/Todolist2";
import {v1} from "uuid";
import {ScheduleArrType, ScheduleType} from "./index";


export type FilterType = 'all' | 'completed' | 'skipped'
type AppPropsType = {
    state: ScheduleArrType
}

function App(props: AppPropsType) {
    const [list, setList] = useState<ScheduleArrType>(props.state);
    const deleteItem = (id: string) => {
        setList(list.filter((it) => it.id !== id))
    }
    const addNewTask = (newTaskText: string) => {

        const newTask: ScheduleType = {
            id: v1(),
            item: newTaskText,
            isDone: false
        }
        setList([newTask, ...list])
    }

    const changeStatus = (id: string, isDone: boolean) => {

        // const newArr = list.map(i => {
        //     return i.id === id ? { ...i, isDone: isDone } : i
        // })
        // setList(newArr);

        setList(list.map(i => i.id === id ? { ...i, isDone } : i));
    }


    const [filter, setFilter] = useState<FilterType>('all')
    const filterListHandler = (filterName: FilterType) => {
        setFilter(filterName)
    }
    let itemList = list;
    if (filter === 'completed') {
        itemList = list.filter(it => it.isDone)
    }
    if (filter === 'skipped') {
        itemList = list.filter(it => !it.isDone)
    }


    return (
        <div>
            <Todolist2 heading={'Daily Schedule'}
                       itemList={itemList}
                       deleteItem={deleteItem}
                       filterListHandler={filterListHandler}
                       addNewTask={addNewTask}
                       changeStatus={changeStatus}
                       filter={filter}
            />
        </div>
    );
}

export default App;
