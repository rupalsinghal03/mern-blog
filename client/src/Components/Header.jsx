import React from 'react'
import { Button } from "flowbite-react";

export default function Header() {
    const buttonStyle = {
        background: 'linear-gradient(to right, #630a63, #6565ed)',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    };
    const logoStyle = {
        background: 'linear-gradient(to right, rgb(108 96 211), rgb(219 73 173))',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light border-bottom p-4 flex g-2">
                <div className="container">
                    <div className="logo">
                        <a className="navbar-brand fw-bold" href="#"><span className='text-white p-2' style={logoStyle}>Rupal's</span>Blog</a>
                    </div>

                    <div className="search_input">
                        <form className="">
                            <input className="form-control me-2 bg-light" type="search" placeholder="Search..." aria-label="Search" />
                        </form>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/projects">Projects</a>
                            </li>
                        </ul>
                    </div>

                    <div className="signin">
                        <button className='btn fw-bold' style={buttonStyle}>SignIn</button>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

            </nav>
        </div>
    )
}
