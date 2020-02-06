import styled from "styled-components"

export const PurchaseCompStyle = styled.div`
  .purchase-header__title {
    margin-top: 62px;
  }

  .purchase-content__head {
    border-bottom: 1px solid rgba(113, 70, 104, 0.1);
    padding-bottom: 16px;
    margin-bottom: 40px;

    .list {
      padding: 0;
    }
  }

  .purchase-content__detail {
    .item {
      padding: 0;
    }

    .purchase-content__status {
      border-radius: 8px;
      padding: 8px 36px;
      font-weight: 500;
      text-align: center;
      position: relative;
      top: -7px;
      height: max-content;
      max-width: max-content;
    }

    .expire {
      background: rgba(246, 62, 124, 0.2);
      color: #f63e7c;
    }

    .active {
      background: #f63e7c;
      color: #fff;
    }

    .not-active {
      background: rgba(113, 70, 104, 0.2);
      color: #714668;
    }
  }

  .purchase-content__detail + .purchase-content__detail {
    margin-top: 40px;
  }
`

export const PanduanPembayaranStyle = styled.div`
  .tab {
    padding: 8px 32px 12px !important;
  }

  .tab + .tab {
    margin-left: 0 !important;
  }

  .tab-content {
    margin-top: 40px !important;
  }

  .panduan-text {
    ol {
      padding-left: 15px;
      margin: 0;

      li + li {
        margin-top: 16px;
      }
    }
  }
`
