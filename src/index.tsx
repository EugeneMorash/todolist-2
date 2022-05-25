import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export type ScheduleArrType = Array<ScheduleType>
export type ScheduleType = {
    id: string
    item: string
    isDone: boolean
}
const state: ScheduleArrType = [
    {id: v1(), item: "Waking up", isDone: true},
    {id: v1(), item: "Exercise", isDone: false},
    {id: v1(), item: "Washing", isDone: false},
    {id: v1(), item: "Breakfast", isDone: true},
    {id: v1(), item: "Lazy time", isDone: true},
    {id: v1(), item: "Lunch", isDone: true},
    {id: v1(), item: "Horse racing", isDone: false},
]


root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
