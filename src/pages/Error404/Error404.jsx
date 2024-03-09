import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.scss'

export default function FullPage() {
	return (
    <>
    <h1 className="center">Упс. Кажется такой страницы не существует</h1>
    <div className='links'>
      <Link className="LinksFromError" to="/">Home</Link>
      <Link className="LinksFromError" to="/search">Search on YT</Link>
      <Link className="LinksFromError" to="/Register">Register</Link>
    </div>
    </>
	)
}