import React from 'react'

export default function Text(props) {
  let title = ''
  if (props.title) {
    title = <h2>{props.title}</h2>
  }
  return (
    <div className="row">
      {title}
      <p>{props.children}</p>
    </div>
  )
}
