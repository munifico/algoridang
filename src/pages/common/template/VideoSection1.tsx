import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { up } from 'styled-breakpoints';
import { Link } from 'react-router-dom';
import WhiteSpace from 'components/common/_atoms/WhiteSpace';

const VideoSection1 = () => {
  return (
    <SVideoSection1>
      <video
        width="100%"
        height="auto"
        autoPlay={true}
        muted
        loop
        src={process.env.PUBLIC_URL + '/video/mock-2.mov'}
      ></video>
      <div className="titleOverlap">
        <Fade cascade>
          <div className="bigTitle">알고리당, 퀀트투자로</div>
          <div className="bigTitle">달콤해지다.</div>
        </Fade>
        <WhiteSpace />
        <Fade>
          <div className="startBtns">
            <Link className="link" to="takers/ticker-search">
              <div className="startBtn">전략 탐색 하기</div>
            </Link>
            <WhiteSpace marginV="0.7" />
            <Link className="makersPCView link" to="makers">
              <div className="startBtn blue">전략 생성 하기</div>
            </Link>
          </div>
        </Fade>
      </div>
    </SVideoSection1>
  );
};

export default VideoSection1;

const SVideoSection1 = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;

  .titleOverlap {
    position: absolute;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding-left: 5vw;
    padding-top: 5vw;
    ${up('md')} {
      font-weight: bold;
      font-size: 6.6rem;
      line-height: 9rem;
    }
    .bigTitle {
      font-weight: bold;
      font-size: 3rem;
      line-height: 4rem;
      ${up('md')} {
        font-weight: bold;
        font-size: 6.6rem;
        line-height: 9rem;
      }
    }
    .startBtn {
      font-weight: bold;
      color: white;
      background: #f5c956;
      border-radius: 106px;
      width: 10rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      line-height: 9rem;
      cursor: pointer;
      ${up('md')} {
        width: 30rem;
        height: 7rem;
        font-size: 2.2rem;
      }
    }
    .blue {
      background-color: ${(props) => props.theme.ColorMainBlue};
    }
  }
`;
