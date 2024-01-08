import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Home () {
    return (
        <>
        <div className="home">
            <div className="desc">
                <h1>Welcome!</h1>
                <p>Temukan Koleksi Buku-Buku Menarik dan menyenangkan untuk dibaca disini...</p>
            </div>
            <button className='btn-home'>
                <Link to="/tambahpinjambuku/_add" style={{ color: 'black', textDecoration: 'none' }}>
                    Peminjaman Buku
                </Link>
            </button>
            <button className='btn-home'>
                <Link to="/inventory" style={{ color: 'black', textDecoration: 'none' }}>
                    List Peminjaman
                </Link>
            </button>
        </div>
        </>
    );
}

export default Home;
