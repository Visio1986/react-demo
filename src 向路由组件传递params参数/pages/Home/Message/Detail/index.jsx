import React, { Component } from 'react'


const DetailContent = [
  { id: '01', content: '123' },
  { id: '02', content: '1234' },
  { id: '03', content: '12345' },
]
export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params;
    const findContent = DetailContent.find((item) => {
      return item.id === id
    })
    return (
      <div>
        <p>ID:{id}</p>
        <p>TITLE:{title}</p>
        <p>CONTENT:{findContent.content}</p>
      </div>
    )
  }
}
