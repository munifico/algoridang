import React from "react";
import { Badge } from "antd-mobile";
import MockInvest from "../mock-invest/mock-investC";
import StrategySearch from "../strategy-search/strategy-searchC";
import TickerSearch from "../ticker-search/ticker-searchC";
import { Link, useHistory, useLocation } from "react-router-dom";
import useMember from "states/react-query/useMember";
import styled from "styled-components";
import {
  IconMockInvest,
  IconPerson,
  IconSearchStrategy,
  IconSearchTicker,
} from "assets/icons";
import Helmet from "react-helmet";
import useMobileSetting from "hooks/useMobileSetting";

export const URLList = {
  tickerSearch: {
    url: "/takers/ticker-search",
  },
  strategySearch: {
    url: "/takers/strategy-search",
  },
  mockInvest: {
    url: "/takers/mock-invest",
  },
} as const;

const TopNavigation = () => {
  const history = useHistory();
  const { me } = useMember();
  return (
    <STopNavigation>
      <div
        className="logo"
        onClick={() => {
          history.push("/takers");
        }}
      >
        {"알고\n리당"}
      </div>
      <div className="authInfo">
        <span className="email">
          {!me.isLoading && me?.data?.data?.email_id}
        </span>
        <IconPerson />
      </div>
    </STopNavigation>
  );
};
const STopNavigation = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.ColorMainDarkGray};
  height: 4.5rem;
  width: 100%;
  padding: 0px 2.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  color: ${(props) => props.theme.ColorMainWhite};
  svg {
    fill: ${(props) => props.theme.ColorMainWhite};
  }
  .logo {
    white-space: pre-wrap;
    cursor: pointer;
  }
  .authInfo {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    .email {
      margin-right: 1.5rem;
    }
  }
`;

const BottomNavigation = () => {
  const location = useLocation();
  const history = useHistory();
  React.useLayoutEffect(() => {
    let haveToPush = true;
    for (let value of Object.values(URLList)) {
      if (location.pathname.startsWith(value.url)) {
        haveToPush = false;
      }
    }
    if (haveToPush) history.push(URLList.tickerSearch.url);
    return () => {};
  }, [history, location.pathname]);

  return (
    <SBottomNavigation>
      <ul className="navList">
        <Link
          className="navItemLink"
          to={process.env.PUBLIC_URL + URLList.tickerSearch.url}
        >
          <SNavItem
            selected={location.pathname.startsWith(URLList.tickerSearch.url)}
          >
            <div className="icon">
              <IconSearchTicker />
            </div>
            <div className="navText">종목 탐색</div>
          </SNavItem>
        </Link>

        <Link
          className="navItemLink"
          to={process.env.PUBLIC_URL + URLList.strategySearch.url}
        >
          <SNavItem
            selected={location.pathname.startsWith(URLList.strategySearch.url)}
          >
            <div className="icon">
              <IconSearchStrategy />
            </div>
            <div className="navText">전략 탐색</div>
          </SNavItem>
        </Link>

        <Link
          className="navItemLink"
          to={process.env.PUBLIC_URL + URLList.mockInvest.url}
        >
          <SNavItem
            selected={location.pathname.startsWith(URLList.mockInvest.url)}
          >
            <div className="icon">
              <IconMockInvest />
            </div>
            <div className="navText">모의 투자</div>
          </SNavItem>
        </Link>
      </ul>
    </SBottomNavigation>
  );
};

const BottomGradient = () => {
  return (
    <SBottomGradient>
      <div className="yellowGradient"></div>
    </SBottomGradient>
  );
};

const SBottomGradient = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
  .yellowGradient {
    width: 100%;
    height: 40vh;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -100;
    background: linear-gradient(0deg, #fff2d2 0%, rgba(255, 255, 255, 0) 100%);
  }
`;

const SBottomNavigation = styled.section`
  position: fixed;
  bottom: 0rem;
  width: 100%;
  height: 7.8rem;
  background-color: ${(props) => props.theme.ColorMainDarkGray};
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  z-index: 10;
  .navList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    .navItemLink {
      height: 100%;
    }
  }
`;

const SNavItem = styled.li<{ selected?: boolean }>`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  .icon {
    svg {
      fill: ${(props) =>
        props.selected
          ? props.theme.ColorMainYellow
          : props.theme.ColorMainWhite};
    }
  }
  .navText {
    margin-top: 0.5rem;
    font-size: 1.15rem;
    color: ${(props) =>
      props.selected
        ? props.theme.ColorMainYellow
        : props.theme.ColorMainWhite};
    font-weight: 100;
  }
`;

const TakerMainSection = () => {
  return (
    <section style={{ marginBottom: "7.8rem" }}>
      <section>
        <TickerSearch />
      </section>
      <section>
        <StrategySearch />
      </section>
      <section>
        <MockInvest />
      </section>
    </section>
  );
};
const TakerConfig = () => {
  useMobileSetting();
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no,target-densitydpi=medium-dpi"
        />
      </Helmet>
    </>
  );
};

const TakerMainContainer = () => {
  return (
    <section>
      <TakerConfig />
      <TopNavigation />
      <div
        style={{
          paddingTop: "4.5rem",
          paddingBottom: "8rem",
        }}
      >
        <TakerMainSection />
      </div>
      <BottomNavigation />
      <BottomGradient />
    </section>
  );
};

export default TakerMainContainer;
export { TakerMainContainer as TakersHome };
