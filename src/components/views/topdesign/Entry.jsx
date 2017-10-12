import React from 'react'

export default function TopDesignEntry(props) {
  let username = props.username
  if (username.length > 14) {
    username = username.slice(0, 12) + '...'
  }
  username += ' '

  return (
    <div className="item">
      <a href={props.image}>
        <div
          className="img"
          style={{
            backgroundImage: `url(${props.image})`
          }}
        >
          <div className="overlay flex-center">
            <p>#{props.id}</p>
          </div>
        </div>
      </a>
      <div className="user flex-center">
        <img className="pp" src={props.avatar} alt={`Avatar from ${props.username}`} />
        <h3 className="name">{username}</h3>
        <button className="like" type="button" value="like" name="like">
          <span>{props.likes}</span>
        </button>
      </div>
    </div>
  )
}
