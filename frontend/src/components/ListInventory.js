import React, { Component } from "react";
import ServiceInventory from "../service/ServiceInventory";
import { FaPen } from "react-icons/fa6";
import { IoSearchSharp  } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { TbListDetails, TbTrash } from "react-icons/tb";
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from '@mui/material/Alert';

class ListInventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinjamBuku: [],
      searchQuery: "",
      showModal: false,
      selectedItem: null,
      alertMessage: "", 
    };
    this.addInventory = this.addInventory.bind(this);
    this.updateInventory = this.updateInventory.bind(this);
    this.searchBook = this.searchBook.bind(this);
    this.originalData = [];
  }

  handleDelete = (id) => {
    this.setState({ showModal: true, selectedItem: id });
  };

  confirmDelete = () => {
    const { selectedItem } = this.state;
    ServiceInventory.deleteBook(selectedItem).then((res) => {
      this.setState({
        pinjamBuku: this.state.pinjamBuku.filter((peminjam) => peminjam.id !== selectedItem),
        showModal: false,
        selectedItem: null,
      });

      if (res.status === 200) {
        this.setState({ alertMessage: "Data berhasil dihapus" });
      }
    });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedItem: null });
  };

  searchBook = () => {
    const { searchQuery, pinjamBuku } = this.state;

    const filteredPinjamBuku = pinjamBuku.filter((peminjam) =>
      Object.values(peminjam).some(
        (value) =>
          value &&
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    this.setState({ pinjamBuku: filteredPinjamBuku });
  };

  resetSearch = () => {
    this.setState({ searchQuery: "", pinjamBuku: this.originalData });
  };  

  viewInventory(id) {
    this.props.history.push(`/detailpinjambuku/${id}`);
  }
  updateInventory(id) {
    this.props.history.push(`/tambahpinjambuku/${id}`);
  }

  componentDidMount() {
    ServiceInventory.getBooks().then((res) => {
      if (res.data == null) {
        this.props.history.push("/tambahpinjambuku/_add");
      } else {
        this.setState({ pinjamBuku: res.data });
        this.originalData = res.data;
      }
  
      if (this.props.location.state && this.props.location.state.message) {
        this.setState({ alertMessage: this.props.location.state.message });
      }
    });
  }
  
  addInventory() {
    this.props.history.push("/tambahpinjambuku/_add");
  }

  render() {  
    const { searchQuery, showModal, alertMessage } = this.state;
    return (
      <div className="list-pinjam">
        {alertMessage && (
          <Alert variant="outlined" severity="success" style={{width: "30%"}} onClose={() => this.setState({ alertMessage: "" })} dismissible>
            {alertMessage}
          </Alert>
        )}
        <h2>Daftar Peminjaman Buku</h2>
         <br />
         <div className="search">
          <div className="search-input">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
              placeholder="Cari Data"
            />
            <button onClick={this.searchBook}><IoSearchSharp size={20} /></button>
            <button onClick={this.resetSearch}><GrPowerReset size={20} /></button>
          </div>
        </div>
        <Modal show={showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Konfirmasi Hapus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Apakah kamu yakin ingin menghapus data ini?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.closeModal}>
              Batal
            </Button>
            <Button variant="danger" onClick={this.confirmDelete}>
              Hapus
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="row">
          <table className="table table-striped daftar" style={{backgroundColor: "#eeeeee"}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nama Peminjam</th>
                <th>Alamat Peminjam</th>
                <th>No Hp Peminjam</th>
                <th>Judul Buku</th>
                <th style={{width: '50px'}}>Jumlah Buku</th>
                <th style={{width: '105px'}}>Tanggal Pinjam</th>
                <th style={{width: '50px'}}>Tanggal Pengembalian</th>
                <th style={{width: '95px'}}>Lama Pinjam</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pinjamBuku.map((peminjam) => (
                <tr key={peminjam.id}>
                  <td> {peminjam.id} </td>
                  <td> {peminjam.nama_peminjam} </td>
                  <td> {peminjam.alamat_peminjam} </td>
                  <td> {peminjam.noHp_peminjam} </td>
                  <td> {peminjam.judul_buku}</td>
                  <td> {peminjam.jumlah}</td>
                  <td> {peminjam.tanggal_pinjam}</td>
                  <td> {peminjam.tanggal_pengembalian}</td>
                  <td> {peminjam.lama_pinjam}</td>
                  <td>
                    <button onClick={() => this.updateInventory(peminjam.id)} className="btn-act1"><FaPen size={18} /></button>
                    <button onClick={() => this.viewInventory(peminjam.id)} className="btn-act3"><TbListDetails size={18} /></button>
                    <button onClick={() => this.handleDelete(peminjam.id)} className="btn-act2"><TbTrash size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <button className="btn-add" onClick={this.addInventory}>Tambah Pinjam Buku</button>
        </div>
      </div>
    );
  }
}

export default ListInventory;
