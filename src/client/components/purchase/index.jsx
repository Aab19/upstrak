import React, { Component } from "react"
import { withRouter } from "react-router"
import { PurchaseCompStyle } from "./style"

class PurchaseComp extends Component {
  render() {
    return (
      <PurchaseCompStyle>
        <div className="purchase-header__title font24 fontSemi">Pembelian</div>
        <div className="desc u-marginTop8 opacity8">
          Transaksi pembelian yang pernah kamu lakukan
        </div>
        <div className="row no-gutters">
          <div className="col-12 purchase-content__head d-flex padd0 u-marginTop48">
            <div className="list fontMedium font18 opacity8 col-1">ID</div>
            <div className="list fontMedium font18 opacity8 col-5">
              Judul Kursus
            </div>
            <div className="list fontMedium font18 opacity8 col-2">Waktu</div>
            <div className="list fontMedium font18 opacity8 col-2">Harga</div>
            <div className="list fontMedium font18 opacity8 col-2">Status</div>
          </div>

          <div
            className="col-12 purchase-content__detail d-flex"
            onClick={() => this.props.history.push("/pembelian/panduan")}>
            <div className="purchase-content__id item col-1 opacity6">
              DS001245
            </div>
            <div className="purchase-content__title item col-5 fontMedium">
              Belajar React.js dengan studi kasus Dashboard Piedpiper
            </div>
            <div className="purchase-content__time item col-2 opacity6">
              21-11-2019 20:13
            </div>
            <div className="purchase-content__price item col-2 fontMedium">
              Rp. 2.350.000
            </div>
            <div className="purchase-content__status expire item col-2">
              Gagal
            </div>
          </div>

          <div
            className="col-12 purchase-content__detail d-flex"
            onClick={() => this.props.history.push("/pembelian/panduan")}>
            <div className="purchase-content__id item col-1 opacity6">
              DS001245
            </div>
            <div className="purchase-content__title item col-5 fontMedium">
              Belajar React.js dengan studi kasus Dashboard Piedpiper dan
              Transaksi Pembelian buku perpustakaan
            </div>
            <div className="purchase-content__time item col-2 opacity6">
              21-11-2019 20:13
            </div>
            <div className="purchase-content__price item col-2 fontMedium">
              Rp. 2.350.000
            </div>
            <div className="purchase-content__status active item col-2">
              Aktif
            </div>
          </div>

          <div
            className="col-12 purchase-content__detail d-flex"
            onClick={() => this.props.history.push("/pembelian/panduan")}>
            <div className="purchase-content__id item col-1 opacity6">
              DS001245
            </div>
            <div className="purchase-content__title item col-5 fontMedium">
              Belajar React.js dengan studi kasus Dashboard Piedpiper
            </div>
            <div className="purchase-content__time item col-2 opacity6">
              21-11-2019 20:13
            </div>
            <div className="purchase-content__price item col-2 fontMedium">
              Rp. 2.350.000
            </div>
            <div className="purchase-content__status not-active item col-2">
              Belum Aktif
            </div>
          </div>
        </div>
      </PurchaseCompStyle>
    )
  }
}

export default withRouter(PurchaseComp)
