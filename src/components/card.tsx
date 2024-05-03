import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Card({id, img, title,release_date, type}:any) {
 
  return (
    <Link to={`/${type}/${id}`} >
    <div className='card'>
        <div className='imgContainer'>
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} className="img" alt={title}/>
        </div>
        <div className='cardDesc'>
            <p className='cardTitle'>{title}</p>
            <p>Released: {release_date}</p>
        </div>
    </div>
    </Link>
  )
}
