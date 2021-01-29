import React, { Component } from 'react'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" activeClassName="active" to="/home/news">News</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" activeClassName="active" to="/home/message">Message</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
