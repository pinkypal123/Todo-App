import React, { useState } from "react";
import './style.css'
export default function Todo() {
    let obj = {
        id: 0,
        element: "",
        completed: false
    }
    const [data, setData] = useState(obj);
    const [list, setList] = useState([]);
    function addElement(event) {
        setData({ ...data, element: event.target.value });
    }
    function add() {
        if (data.element === "") {
            return;
        }
        else if (list.length < 1) {
            setList([...list, { ...data, id: 1 }]);
        }
        else {
            setList([...list, { ...data, id: list[list.length - 1].id + 1 }]);
        }
    }
    function deleted(e) {
        // console.log(e.target.id);
        let newList = list.filter((el) => {
            if (e.target.id != el.id) {
                console.log('e'+''+e.target.id);
                console.log('el'+" "+el.id);
                return el;
            }
        })
        setList(newList);
    }
    function Complete(e) {
        let newList = list.map((el) => {
            // console.log(el.id+" "+e.target.id);
            if (e.target.id == el.id) {
                return { ...el, completed: (!(el.completed)) };
            }
            else {
                console.log(!el.completed)
                return el;
            }

        })
        setList(newList);
    }
    function clear() {
        setList([]);
    }
    return (
        <>
            <div id="wrapper">
                <div className="box">
                    <div className="textTodo">
                        <h3>React Todo App</h3>
                        <h4>Add New Todo</h4>
                    </div>
                    <div className="addTodo">
                        <input type="text" placeholder="Add task" onChange={addElement} />
                        <button className='btn-addTodo' onClick={add}>Add</button>
                        <button className='btn-addTodo' onClick={clear}>Clear</button>
                    </div>
                </div>
                <div className="todoList">
                    {
                        list.map((el) => {
                            return <div className="listwrap">
                                 <div key={el.id} className={`listitem ${el.completed ? "strike" : ""}`}>{el.element}</div>
                                <div className="btn">
                                    <button id={el.id} onClick={(e) => deleted(e)}>Delete</button>
                                    <button id={el.id} onClick={(e) => Complete(e)}>Complete</button>
                                </div>

                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}