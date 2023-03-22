import React from 'react'

const Card = ({post}) => {
  return (
    <div>
      <img src="" alt="" />
      <span>{post.title}</span>
      <p>{post.body}</p>
      <button>Ver mais</button>
    </div>
  )
}

export default Card