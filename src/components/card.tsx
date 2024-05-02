import React from 'react'

export default function Card({img, title,release_date}:any) {
  return (
    <div className='card'>
        <div className='imgContainer'>
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} className="img" alt={title}/>
        </div>
        <div className='cardDesc'>
            <p className='cardTitle'>{title}</p>
            <p>{release_date}</p>
        </div>
    </div>
  )
}
