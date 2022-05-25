import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterType} from "../App";
import {ScheduleArrType} from "../index";
import styles from "./Todolist2.module.css"

export type Todolist2PropsType = {
    heading: string
    itemList: ScheduleArrType
    deleteItem: (id: string) => void
    filterListHandler: (filter: FilterType) => void
    addNewTask: (newTaskText: string) => void
    changeStatus: (id: string, isDone: boolean) => void
    filter: FilterType
}

export function Todolist2(props: Todolist2PropsType) {

    const itemArr = props.itemList.map(item => {
        const deleteClickHandler = (id: string) => {
            props.deleteItem(id)
        }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(item.id, e.currentTarget.checked)
        }

        return <li key={item.id} className={item.isDone ? styles.isDone : ""}>
            <label>
                <input
                    type='checkbox'
                    checked={item.isDone}
                    onChange={onChangeHandler}

                />
                <span>{item.item}</span>
            </label>
            <button type='button'
                    onClick={() => {deleteClickHandler(item.id)}}>
                Del
            </button>
        </li>
    })

    const onAllListClickHandler = () => {
        props.filterListHandler('all')

    }
    const onCompletedListClickHandler = () => {
        props.filterListHandler('completed')
    }
    const onActiveListClickHandler = () => {
        props.filterListHandler('skipped')
    }


    const [newTaskText, setNewTaskText] = useState<string>("");
    const [error, setError] = useState<string>("");


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(e.currentTarget.value);
        error && setError('');
    }
    const onAddClickHandler = () => {
        if (newTaskText.trim()) {
            props.addNewTask(newTaskText.trim());
            setNewTaskText('')
        } else {
            setError('Invalid value')
        }
    }


    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onAddClickHandler()
        }
    }

    return (
        <div>
            <h3>{props.heading}</h3>
            <div>
                <input type="text"
                       value={newTaskText}
                       onChange={onChangeHandler}
                       onKeyDown={onEnterHandler}
                       // className={error && styles.invalid}
                       className={error ? `${styles.invalid}` : ''}
                />
                <button onClick={onAddClickHandler}>Add</button>
                {error && <div className={styles.errorName}>{error}</div>}
            </div>


            <br/>

            <div>
                {itemArr}
            </div>
            <div>
                <button type="button"
                        onClick={onAllListClickHandler}
                        className={props.filter === 'all' ? styles.chooseFilter : ''}
                >
                    All
                </button>

                <button type="button"
                        onClick={onCompletedListClickHandler}
                        className={props.filter === 'completed' ? styles.chooseFilter : ''}
                >
                    Completed
                </button>

                <button type="button"
                        onClick={onActiveListClickHandler}
                        className={props.filter === 'skipped' ? styles.chooseFilter : ''}
                >
                    Skipped
                </button>
            </div>
        </div>
    )
};