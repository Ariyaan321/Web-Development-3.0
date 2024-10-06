import React, { useState } from 'react'

export default function InputTask() {

    const [taskList, setTaskList] = useState([])

    const addingTask = (e) => {
        e.preventDefault()
        console.log('e : ', e);
        console.log('eTarget : ', e.target.previousElementSibling);
        console.log('input value : \n', e.target.previousElementSibling.value);
        const dataInput = e.target.previousElementSibling.value
        // data to be added in list of datas
        setTaskList([...taskList, dataInput])
        console.log('taskList is: ', taskList);
    }

    const deleteTask = (e) => {
        console.log('delet check: ', e);
        setTaskList(taskList.filter((_, i) => i !== e.index));
    }

    return (
        <>
            <div style={{ border: '3px solid red', padding: '5rem', width: 'auto' }}> {/*main container*/}
                <div style={{ display: 'flex', gap: '10px', width: '20%', height: '6%', border: '2px solid purple' }}>
                    <textarea type="text" name='taskInput' placeholder="add task" style={{ width: '85%', height: 'auto' }} />
                    <button onClick={addingTask} style={{ width: 'max-content', height: 'max-content', cursor: 'pointer' }}>Add</button>
                </div>

                {/* List of tasks in Grid - maybe wrapped around a div */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)', // Creates 6 equal columns
                    gap: '20px',
                    width: '100%',
                    border: '2px solid green',
                    marginTop: '60px',
                    height: '70%',
                    overflow: 'scroll'
                }}>
                    {
                        taskList.map((data, index) => {
                            return (
                                <div key={index} style={{ border: '2px solid blue', width: '200px', height: '100px', padding: '19px' }}>
                                    {data}
                                    <input type='checkbox' style={{ border: '2px solid red', width: '20px', height: '20px' }} onClick={() => { deleteTask({ index }) }} />
                                </div>
                            );

                        })
                    }
                </div>

                {/* Grid and Freeform button */}
            </div>
        </>
    );
}
