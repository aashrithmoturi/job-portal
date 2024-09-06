import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className={`${props.bg} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{props.whoIsConcerned}</h2>
        <p className="mt-2 mb-4">
            {props.description}
        </p>
        <Link
            to={`${props.href}`}
            className={`inline-block ${props.btnBg} text-white rounded-lg px-4 py-2 hover:${props.btnHoverBg}`}
        >
            {props.btnContent}
        </Link>
    </div>
  )
}

export default Card