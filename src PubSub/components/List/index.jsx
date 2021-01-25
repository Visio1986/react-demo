import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }
  componentDidMount() {
    this.token = PubSub.subscribe('atguigu', (_, stateObj) => {
      this.setState(stateObj)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? { err } :
                users.map((user) => {
                  return (
                    <div className="card" key={user.id}>
                      <a href={user.html_url} target="_blank" rel="noreferrer">
                        <img src={user.avatar_url} style={{ width: '100px' }} alt="head_portrait" />
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
