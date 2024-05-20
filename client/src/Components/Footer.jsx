import React from 'react'
function Footer() {
    const logoStyle = {
        background: 'linear-gradient(to right, rgb(108 96 211), rgb(219 73 173))',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
    };
    return (
        <footer className="footer border p-4 mt-auto">
            <div className="container text-center">
                <div className="logo">
                    <a className="navbar-brand fw-bold text-dark" href="#">
                        <span className='text-white p-2' style={logoStyle}>Rupal's</span>Blog
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer