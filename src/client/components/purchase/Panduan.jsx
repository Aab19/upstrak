import React, { Component } from "react"
import { PanduanPembayaranStyle } from "./style"
import Tabs from "../tabs/index"

class PanduanPembayaranComp extends Component {
  render() {
    return (
      <PanduanPembayaranStyle className="u-marginTop40">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="panduan-header text-center">
              <div className="title font36 fontSemi">Cara Pembayaran</div>
              <div className="label u-marginTop24">Transfer dengan nominal</div>
              <div className="price-tag font40 fontBold u-marginTop8">
                Rp 350.245
              </div>
            </div>
            <Tabs className="u-marginTop40">
              ATM
              <React.Fragment>
                <div className="panduan-text">
                  <ol>
                    <li>Masukan Pin ATM</li>
                    <li>Pilih menu Transfer</li>
                    <li>
                      Pilih Transfer ke Mandiri (Jika tidak menggunakan Mandiri
                      Pilih Transfer antar Bank Online)
                    </li>
                    <li>
                      Masukkan No. Rekening 12345665432345 (Gunakan kode bank
                      untuk Transfer antar Bank Online)
                    </li>
                    <li>Masukan Jumlah Nominal sesuai Harga di atas</li>
                    <li>
                      Konfirmasi Pembayaran anda dengan atas nama Habie Adinata
                      dan Jumlah Nominal yang ditransfer
                    </li>
                    <li>
                      Setelah selesai foto bukti pembayaran dan kirimkan ke No
                      WA 0821330289715 dengan pesan (Nama - email - (Judul ursus
                      yang dibeli))
                    </li>
                    <li>Tunggu Maksimal 1x24 jam Kursus kamu akan aktif</li>
                    <li>Selamat Belajar :D</li>
                  </ol>
                </div>
              </React.Fragment>
              Mobile Banking
              <React.Fragment>
                <div className="panduan-text">
                  <ol>
                    <li>Masukan Pin ATM</li>
                    <li>Pilih menu Transfer</li>
                    <li>
                      Pilih Transfer ke Mandiri (Jika tidak menggunakan Mandiri
                      Pilih Transfer antar Bank Online)
                    </li>
                    <li>
                      Masukkan No. Rekening 12345665432345 (Gunakan kode bank
                      untuk Transfer antar Bank Online)
                    </li>
                    <li>Masukan Jumlah Nominal sesuai Harga di atas</li>
                    <li>
                      Konfirmasi Pembayaran anda dengan atas nama Habie Adinata
                      dan Jumlah Nominal yang ditransfer
                    </li>
                    <li>
                      Setelah selesai foto bukti pembayaran dan kirimkan ke No
                      WA 0821330289715 dengan pesan (Nama - email - (Judul ursus
                      yang dibeli))
                    </li>
                    <li>Tunggu Maksimal 1x24 jam Kursus kamu akan aktif</li>
                    <li>Selamat Belajar :D</li>
                  </ol>
                </div>
              </React.Fragment>
            </Tabs>
          </div>
        </div>
      </PanduanPembayaranStyle>
    )
  }
}

export default PanduanPembayaranComp
