import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Column = styled.div`
  width: 300px;
  margin: 20px;
  justify-content: center;
`

const Card = styled.div`
  width: 200px;
  border: 5px solid purple;
`

function App() {
  const [toDoList, setToDoList] = useState([]);

  const newTask = (e) => {
    e.preventDefault();

    const submittedTask = {
      id: uuid(),
      title: e.target.title.value,
      description: e.target.description.value,
      status: 'Ready',
    }

    setToDoList([...toDoList, submittedTask])
  }

  const statuses = ['Ready', 'In Progress', 'Done']

  const handleSwimLane = (itemId, changeLaneBy) => {
    const updatedToDoList = toDoList.map((item) => {
      const statusIndex = statuses.indexOf(item.status)

      if (item.id === itemId && statusIndex + changeLaneBy >= 0 && statusIndex + changeLaneBy < statuses.length) {
        const newStatus = statuses[(statusIndex + changeLaneBy)]
        return { ...item, status: newStatus }
      }
      
      return item
    })

    setToDoList(updatedToDoList)
  }

  const showTask = (item) => {
    return (
      <Card key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <br></br>
        <button onClick={() => handleSwimLane(item.id, -1)}>{'<'}</button>
        <button onClick={() => handleSwimLane(item.id, 1)}>{'>'}</button>
        <br></br>
        <button onClick={() => deleteTask(item.id)}>Delete</button>
      </Card>
    )
  }

  const deleteTask = (itemId) => {
    setToDoList([...toDoList.filter(item => item.id !== itemId)])
  }

  return (
    <Container>
      <Column>
      <h1>KANBAN BOARD</h1>
        <form onSubmit={newTask}>
          <label htmlFor="title">Title:</label>
          <br></br>
          <input type="text" id="title" name="title" />
          <br></br>
          <label htmlFor="description">Description:</label>
          <br></br>
          <input type="text" id="description" name="description" />
          <br></br>
          <input type="submit" value="Submit"/>
        </form>
      </Column>
      <Column>
        <h2>Todo</h2>
        {toDoList.map((item) => {return item.status === 'Ready' && showTask(item)})}
      </Column>
      <Column>
        <h2>In Progress</h2>
        {toDoList.map((item) => {return item.status === 'In Progress' && showTask(item)})}
      </Column>
      <Column>
      <h2>Done</h2>
        {toDoList.map((item) => {return item.status === 'Done' && showTask(item)})}
      </Column>
    </Container>
  );
}

export default App
