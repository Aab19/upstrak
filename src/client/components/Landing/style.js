import styled from "styled-components"

export const LandingCompStyle = styled.div`
  position: relative;
  background: rgba(113, 70, 104, 0.05);

  .section-header {
    padding: 120px 0;
    position: relative;

    .section-header__title {
      font-size: 60px;
      line-height: 80px;
    }

    .section-header__desc {
      font-size: 20px;
      line-height: 40px;
    }

    .btn-header {
      padding: 18px 24px;
    }

  }

  .section-illustration {
    position: absolute;
    right: -90px;
    top: -75px;
  }

  .section-advantages {
    background: #f3f0f3;
    padding: 140px 0;

    .section-advantages__title {
      margin-bottom: 120px;
    }

    .section-advantages__desc {
      line-height: 30px;
    }

  }

  .section-focus {
    background: #f3f0f3;
    padding: 140px 0;

    h1 {
      margin-bottom: 124px;
    }

    .bg-focus {
      background-size: cover;
      height: 100%;
    }

    .bg-design {
      background: url("/assets/img/bg-focus1.jpg") no-repeat center center;
    }

    .bg-program {
      background: url("/assets/img/bg-focus2.jpg") no-repeat center center;
    }

    .bg-marketing {
      background: url("/assets/img/bg-focus3.jpg") no-repeat center center;
    }

    .bg-business {
      background: url("/assets/img/bg-focus4.jpg") no-repeat center center;
    }

    .section-focus__detail {
      padding: 100px 80px;

      .section-focus__detail-desc {
        line-height: 36px;
      }

    }

  }

  .section-info {
    padding: 110px 0;
    background: url("/assets/img/bg-info.png") no-repeat center center;
    background-size: cover;

    .section-info__desc {
      line-height: 48px;
    }

  }

  .section-info__second {
    padding: 120px 0;
    background: #f3f0f3;

    .section-info__second-text {
      line-height: 40px;
    }

  }

  .section-course {
    padding: 124px 0;


    .btn-course {
      padding: 18px 24px;
    }
  }

  .section-about {
    padding: 124px 0;

    img {
      width: 100px;
      height: 100px;
    }

    .section-about__desc {
      line-height: 40px;
      letter-spacing: 0.02em;
    }

  }

`
