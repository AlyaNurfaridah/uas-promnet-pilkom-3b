import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ServiceInventory from '../service/ServiceInventory';
import "./style.css";

class ViewInventory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            peminjam: {}
        };
    }

    componentDidMount() {
        ServiceInventory.getBookById(this.state.id).then((res) => {
            this.setState({ peminjam: res.data });
        });
    }

    render() {
        const { peminjam } = this.state;

        return (
            <div>
                <br />
                <div className="card col-md-8 offset-md-2">
                <br />
                    <h2 className="text-center">Detail Peminjaman Buku</h2>
                    <div className="card-body">
                        <table className="table table-striped detail">
                            <tbody>
                                <tr>
                                    <th>Id Peminjam</th>
                                    <td>{peminjam.id}</td>
                                </tr>
                                <tr>
                                    <th>Judul Buku</th>
                                    <td>{peminjam.judul_buku}</td>
                                </tr>
                                <tr>
                                    <th>Jumlah</th>
                                    <td>{peminjam.jumlah}</td>
                                </tr>
                                <tr>
                                    <th>Nama Peminjam</th>
                                    <td>{peminjam.nama_peminjam}</td>
                                </tr>
                                <tr>
                                    <th>Alamat Peminjam</th>
                                    <td>{peminjam.alamat_peminjam}</td>
                                </tr>
                                <tr>
                                    <th>No Handphone Peminjam</th>
                                    <td>{peminjam.noHp_peminjam}</td>
                                </tr>
                                <tr>
                                    <th>Tanggal Pinjam</th>
                                    <td>{peminjam.tanggal_pinjam}</td>
                                </tr>
                                <tr>
                                    <th>Tanggal Pengembalian</th>
                                    <td>{peminjam.tanggal_pengembalian}</td>
                                </tr>
                                <tr>
                                    <th>Lama Pinjam</th>
                                    <td>{peminjam.lama_pinjam}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btn-back'>
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                                Kembali ke Home
                            </Link>
                        </button>
                        <button className='btn-update' style={{marginLeft: "5px"}}>
                            <Link to={`/tambahpinjambuku/${peminjam.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                Update Data
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewInventory;
