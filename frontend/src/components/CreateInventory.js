import React, { Component } from "react";
import ServiceInventory from "../service/ServiceInventory";
import "./style.css";

class CreateInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      judul_buku: "",
      jumlah: 0,
      nama_peminjam: "",
      alamat_peminjam: "",
      noHp_peminjam: "",
      tanggal_pinjam: "",
      tanggal_pengembalian: "",
      lama_pinjam: "",
    };
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      ServiceInventory.getBookById(this.state.id)
        .then((res) => {
          let peminjaman = res.data;
          this.setState({
            judul_buku: peminjaman.judul_buku,
            jumlah: peminjaman.jumlah,
            nama_peminjam: peminjaman.nama_peminjam,
            alamat_peminjam: peminjaman.alamat_peminjam,
            noHp_peminjam: peminjaman.noHp_peminjam,
            tanggal_pinjam: peminjaman.tanggal_pinjam,
            tanggal_pengembalian: peminjaman.tanggal_pengembalian,
            lama_pinjam: peminjaman.lama_pinjam,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveOrUpdateBook = (e) => {
    e.preventDefault();
    let peminjamanBuku = {
      judul_buku: this.state.judul_buku,
      jumlah: String(this.state.jumlah),
      nama_peminjam: this.state.nama_peminjam,
      alamat_peminjam: this.state.alamat_peminjam,
      noHp_peminjam: this.state.noHp_peminjam,
      tanggal_pinjam: this.state.tanggal_pinjam,
      tanggal_pengembalian: this.state.tanggal_pengembalian,
      lama_pinjam: this.state.lama_pinjam,
    };

    if (this.state.id === "_add") {
      ServiceInventory.addBook(peminjamanBuku)
        .then((res) => {
          console.log("Data berhasil ditambahkan:", res.data);
          this.props.history.push({
            pathname: "/inventory",
            state: { message: "Data Peminjaman Buku berhasil ditambahkan!" } // Kirim pesan ke List Peminjaman
          });
        })
        .catch((error) => {
          console.error("Error creating data:", error);
        });
    } else {
      ServiceInventory.updateBook(peminjamanBuku, this.state.id)
        .then((res) => {
          console.log("Data berhasil diupdate:", res.data);
          this.props.history.push({
            pathname: "/inventory",
            state: { message: "Data Peminjaman Buku berhasil diupdate!" } // Kirim pesan ke List Peminjaman
          });
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    }
  };
  
  incrementJumlah = () => {
    this.setState((prevState) => ({
      jumlah: parseInt(prevState.jumlah) + 1,
    }));
  };
  
  decrementJumlah = () => {
    this.setState((prevState) => ({
      jumlah: parseInt(prevState.jumlah) > 0 ? parseInt(prevState.jumlah) - 1 : 0,
    }));
  };

  cancel = () => {
    this.props.history.push("/inventory");
  };

  render() {
    return (
      <div className="input">
          <h2>Masukkan Data Peminjaman Buku</h2>
                <form onSubmit={this.saveOrUpdateBook}>
                <div class="form-row">
                  <div className="form-group col-md-4">
                    <label> Nama</label>
                    <input
                      name="nama_peminjam"
                      className="form-control"
                      value={this.state.nama_peminjam}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label> No Handphone</label>
                    <input
                      name="noHp_peminjam"
                      className="form-control"
                      value={this.state.noHp_peminjam}
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label> Alamat</label>
                    <input
                      name="alamat_peminjam"
                      className="form-control"
                      value={this.state.alamat_peminjam}
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-7">
                    <label> Judul Buku </label>
                    <input
                      placeholder="Judul Buku"
                      name="judul_buku"
                      className="form-control"
                      value={this.state.judul_buku}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label> Jumlah</label>
                    <div className="input-group" style={{width: "80px", border:"1px solid #c5c5c5", borderRadius: "5px"}}>
                      <div className="input-group-prepend">
                        <button className="btn-plus" type="button" onClick={this.decrementJumlah} style={{border: "none"}}>-</button>
                      </div>
                      <input
                        className="form-control"
                        name="jumlah"
                        value={this.state.jumlah}
                        onChange={this.changeHandler}
                        style={{textAlign: "center", border: "none"}}
                      /> 
                      <div className="input-group-append">
                        <button className="btn-minus" type="button" onClick={this.incrementJumlah} style={{border: "none"}}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label> Tanggal Pinjam</label>
                    <input
                      type="date"
                      name="tanggal_pinjam"
                      className="form-control"
                      value={this.state.tanggal_pinjam}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label> Tanggal Pengembalian</label>
                    <input
                      type="date"
                      name="tanggal_pengembalian"
                      className="form-control"
                      value={this.state.tanggal_pengembalian}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label> Lama Pinjam</label>
                    <input
                      name="lama_pinjam"
                      className="form-control"
                      value={this.state.lama_pinjam}
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>
                  <button className="btn-simpan">Simpan</button>
                  <button
                    className="btn-batal"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Batal
                  </button>
                </form>
      </div>
    );
  }
}

export default CreateInventory;
