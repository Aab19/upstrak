import styled from "styled-components"

export const DetailCourseStyle = styled.div`
  .course-header {
    padding: 120px 0 142px 0;
    background: #714668;
    color: #f3f0f3;

    .course-header__title {
      font-weight: 600;
      font-size: 32px;
      line-height: 50px;
      color: #f3f0f3;
    }

    .courser-header__info {
      margin-top: 44px;
    }
  }

  .course-header__mentor {
    margin-bottom: 60px;
  }

  .course-content {
    position: relative;
    top: -100px;

    .course-content_welcome-video {
      position: relative;
      background: #ffffff;
      box-shadow: 8px 14px 40px rgba(113, 70, 104, 0.1);
      border-radius: 8px;
      padding: 24px;
      height: 98%;

      .course-content__wrapper-frame {
        z-index: 0;
        border-radius: 8px;

        .plyr {
          margin-bottom: 76px;
        }

        .plyr--video {
          background: transparent;
          border-radius: 8px;
          position: initial;
        }

        .plyr__video-wrapper {
          background: transparent;
        }

        .plyr__poster {
          background: transparent;
        }

        .plyr__control--overlaid {
          background: #714668;
        }

        .course-content__frame {
          border-radius: 8px;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
        }
      }
    }

    .course-content__spec {
      background: #ffffff;
      border-radius: 8px;
      padding: 24px;
      display: flex;
      flex-direction: column;

      .separator {
        background: #714668;
        opacity: 0.1;
        margin: 16px 0;
      }

      .list-spec + .list-spec {
        margin-top: 10px;
      }

      .btn-start {
        margin-top: 18px;
        padding-top: 18px;
        padding-bottom: 18px;
      }
    }

    .course-about {
      margin-top: 80px;

      .desc {
        line-height: 30px;
      }
    }

    .course-screenshots {
      margin-top: 48px;

      .course-screenshot__gallery {
        .course-screenshot__list {
          padding-right: 0;
        }

        .course-screenshot__list:first-child {
          padding-left: 0;
        }

        .course-screenshot__list {
          .course-screenshot__list-item {
            background-size: cover !important;
            width: 100%;
            height: 96px;
          }
        }
      }
    }

    .course-materi {
      margin-top: 40px;
    }
  }

  .course-price {
    margin-top: 80px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 8px 14px 40px rgba(113, 70, 104, 0.1);
    border-radius: 8px;
    padding: 32px 24px;

    .course-price__wrapper {
    }

    .course-price__wrapper + .course-price__wrapper {
      margin-top: 24px;
    }

    .separator {
      margin: 32px 0 24px 0;
    }
  }
`
export const MyCourseStyle = styled.div`
  .mycourse__head {
    margin-top: 62px;
  }
`

export const CourseStartStyle = styled.div`
  .course-container {
    padding: 40px 0 40px 260px;
    position: relative;
    overflow-x: hidden;

    .course-bubble {
      position: absolute;
      top: 10px;
      right: 115px;
    }

    .course-content__video {
      position: relative;
      background: #ffffff;
      box-shadow: 8px 14px 40px rgba(113, 70, 104, 0.1);
      border-radius: 8px;
      padding: 24px;
      height: 98%;

      .course-content__wrapper {
        background: #000;
        z-index: 0;
        border-radius: 8px;

        .plyr {
          margin-bottom: 76px;
        }

        .plyr--video {
          border-radius: 8px;
          position: initial;
        }

        .plyr__control--overlaid {
          background: #714668;
        }
      }
    }

    .btn-file {
      padding: 12px 24px;

      img {
        margin-right: 16px;
      }
    }
  }
`

export const DetailCourseShimmerStyle = styled.div`
  .course-header {
    padding: 120px 0 142px 0;
    background: rgba(113, 70, 104, 0.1) !important;

    .title {
      height: 40px;
      border-radius: 36px;
      width: 500px;
    }

    .mentor {
      height: 40px;
      border-radius: 36px;
      width: 100%;
    }

    .name {
      height: 24px;
      border-radius: 24px;
      width: 252px;
      margin-bottom: 50px;
    }
  }

  .course-content {
    position: relative;
    top: -100px;
  }

  .course-content__spec {
    background: #ffffff;
    border-radius: 8px;
    padding: 36px 24px 24px;

    .title {
      width: 100%;
    }

    .title,
    .list-spec-1,
    .list-spec-2,
    .list-spec-3,
    .list-spec-4 {
      height: 24px;
      border-radius: 24px;
    }

    .list-spec-1 {
      margin-top: 24px;
      max-width: calc(100% - 50px);
    }

    .list-spec-3,
    .list-spec-4 {
      width: 100px;
    }

    .btn-shimmer {
      height: 58px;
      border-radius: 4px;
      margin-top: 28px;
    }
  }

  .course-about {
    height: 24px;
    border-radius: 24px;
    width: 180px;
  }

  .title,
  .desc {
    border-radius: 28px;
    height: 16px;
  }

  .desc {
    width: 433px;
  }

  .course-price {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 8px 14px 40px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 32px 24px;

    .course-price__level {
      height: 24px;
      border-radius: 24px;
    }

    .course-price__level + .course-price__level {
      margin-top: 50px;
    }

    .course-price__tag {
      height: 40px;
      border-radius: 36px;
      margin-top: 29px;
    }
  }
`
