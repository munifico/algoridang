import axios from "axios";
import { getLocalMemberInfo } from "states/local-state";
import { PushBackTestQInput } from "./interface/backtest/entities";
import {
  GetCorporationInput,
  GetCorporationsWithTermInput,
  GetDayilStocksInput,
} from "./interface/finance/dtos";
import { LoginMemberInfoInput } from "./interface/member/dtos";
import { CreateMyStrategyInput } from "./interface/strategy/dtos";
import { AddUniversalInput } from "./interface/trading/dtos";

// base setttings ,  interceptors

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URI;

// jwt 토큰
axios.interceptors.request.use(async (config) => {
  if (!config.headers["x-jwt"] && getLocalMemberInfo()?.token) {
    config.headers["x-jwt"] = getLocalMemberInfo()?.token;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

// (1) member api

export const memberApi = {
  GET: {
    me: () => axios.get("member/me"),
  },
  POST: {
    loginMemberInfo: (body: LoginMemberInfoInput) =>
      axios.post("member/loginMemberInfo", body),
  },
  PATCH: {},
  DELETE: {},
};

// (2) strategy api
export const strategyApi = {
  GET: {
    getStrategyListNew: () => {
      return axios.get("strategy/new");
    },
    getStrategyListHighView: () => {
      return axios.get("strategy/high_view");
    },
    getStrategyListType: () => {
      return axios.get("strategy/type");
    },
    getStrategyById: (strategy_code: string) => {
      return axios.get(`strategy/${strategy_code}`);
    },
    getMyStrategyList: () => {
      return axios.get("strategy/my");
    },
    getMyStrategyById: (strategy_code: string) => {
      return axios.get(`strategy/my/${strategy_code}`);
    },
  },
  POST: {
    createMyStrategy: (body: CreateMyStrategyInput) => {
      return axios.post(`strategy/my`, body);
    },
    addUniversal: (strategy_code: string, body: AddUniversalInput) => {
      return axios.post(`strategy/my/${strategy_code}/universal`, body);
    },
    test: (data: any) => axios.post(``, data),
  },
  PUT: {},
  PATCH: {},
  DELETE: {},
};

// (3) finance api
export const financeApi = {
  GET: {
    getCorporations: () => axios.get(`finance/corporations`),
    getCorporationsWithTerm: ({ term }: GetCorporationsWithTermInput) =>
      axios.get(`finance/corporations/${term}`),
    getCorporation: ({ term }: GetCorporationInput) =>
      axios.get(`finance/corporation/${term}`),
    //
    getDailyStocks: ({ term, skip, take, sort }: GetDayilStocksInput) => {
      return axios.get(`finance/dailystocks/${term}`, {
        params: {
          skip,
          take,
          sort,
        },
      });
    },
  },
  POST: {},
  PATCH: {},
  DELETE: {},
};

// (4) trading api

export const tradingApi = {
  GET: {
    getBaseTradingStrategy: () => axios.get(`trading/base/1`),
    getBaseTradingStrategyList: () => axios.get(`trading/base`),
  },
  POST: {},
  PATCH: {},
  DELETE: {},
};

// (4) backtest api

export const backtestApi = {
  GET: {},
  POST: {
    pushBackTestQ: (body: PushBackTestQInput) => {
      return axios.post(`backtest/backtest-q`, body);
    },
  },
  PATCH: {},
  DELETE: {},
};
