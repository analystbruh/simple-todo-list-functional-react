import React from 'react';
import { render } from 'react-dom';

//components
const ToDoApp = () =>
<div style={{fontFamily: 'sans-serif'}}>
  <h1>TODO</h1>
  <ToDoList items={items}/>
  <ToDoForm />
</div>;

const ToDoList = props =>
<ul>
  {props.items.list.map(x=><li key={x[0]}>{x[1]}</li>)}
</ul>;

const ToDoForm = () =>
<form onSubmit={e=>handleSubmit(e)}>
  <input name='myList' onChange={e=>handleChange(e)}/>
  <button>{'Add #'+(items.counter+1)}</button>
</form>;

//functions
const handleSubmit = e => {
	e.preventDefault();
  	items.counter += 1;
  	items.list.push([items.counter, items.text]);
  	e.target.myList.value='';
	render(<ToDoApp />, document.getElementById('root'));
	items.text='';
}

const handleChange = e => {
	items.text = e.target.value;
}

//data
const items = {counter: 0, list: [], text:''};

//render app
render(<ToDoApp />, document.getElementById('root'));
