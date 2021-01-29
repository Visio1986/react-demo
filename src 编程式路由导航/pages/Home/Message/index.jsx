import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' }
    ]
  }
  //  向路由组件传递search参数 
  // pushShow = (id, title) => {
  //   this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
  // }
  // replaceShow = (id, title) => {
  //   this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
  // }
  // 向路由组件传递params参数
  // pushShow = (id, title) => {
  //   this.props.history.push(`/home/message/detail/${id}/${title}`)
  // }
  // replaceShow = (id, title) => {
  //   this.props.history.replace(`/home/message/detail/${id}/${title}`)
  // }
  // 向路由组件传递state参数
  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail`, { id, title })
  }
  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail`, { id, title })
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((item) => {
              return (
                <li key={item.id}>
                  {/* 向路由组件传递params参数
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
                  {/* 向路由组件传递search参数 */}
                  <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                  {/* 向路由组件传递state参数 */}
                  {/* <Link to={{ pathname: '/home/message/detail', state: { id: item.id, title: item.title } }}>{item.title}</Link> */}
                  <button onClick={() => this.pushShow(item.id, item.title)}>push</button><button onClick={() => this.replaceShow(item.id, item.title)}>replace</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
        {/* search参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
