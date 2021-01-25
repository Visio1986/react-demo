import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    const { target } = event;
    this.props.checkAllTodo(target.checked)
  }
  handleClear = () => {
    this.props.deleteDone()
  }
  render() {
    const { todos, } = this.props;
    const doneCount = todos.reduce((preTodo, curTodo) =>
      preTodo + (curTodo.done ? 1 : 0)
      , 0);
    const allCount = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === allCount && allCount !== 0 ? true : false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{allCount}
        </span>
        <button className="btn btn-danger" onClick={this.handleClear}>清除已完成任务</button>
      </div>
    )
  }
}
