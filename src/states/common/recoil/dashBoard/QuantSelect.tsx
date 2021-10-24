import produce from 'immer';
import { atom, DefaultValue, selector, selectorFamily } from 'recoil';
import { RequestQuantSelectInput } from 'states/backtest/interface/dtos';
import {
  RequestFSBody,
  RequestFSKeys,
} from 'states/finance/interface/entities';
// atom 정의 QS 의 헤더부 strategy,numberOfData
// selector 정의 - strategy,numberOfData 각 getter/setter
export const atomQSHeader = atom<
  Pick<RequestQuantSelectInput, 'strategy' | 'numberOfData'>
>({
  key: 'atomQSHeader',
  default: {
    strategy: 1,
    numberOfData: 10,
  },
});

// ⚠ 이 코드는 예제 코드 입니다.
// selector 언제 사용?
// - atom의 파생된 데이터를 getter/setter 할 때
// eg) atom은 화씨 단위, selector의 인터페이스는 섭씨

// atomQSHeader의 strategy를 getter/setter 해주는 순수함수,
//      selector<T>(options: ReadWriteSelectorOptions<T>):
//      *T는 get의 리턴이자,set의 입력  타입이다.
//      -- input,output 타입이 number이다.
export const selectorQSHeaderStretegy = selector<number>({
  key: 'selectorQSHeaderStretegy',
  get: ({ get }) => {
    return get(atomQSHeader).strategy;
  },
  set: ({ set, get }, newValue) => {
    const prev = get(atomQSHeader);
    set(atomQSHeader, { ...prev, strategy: newValue as number });
  },
});

type selectorQSHeaderDataIO = Pick<
  RequestQuantSelectInput,
  'strategy' | 'numberOfData'
>;
type selectorQSHeaderDataParam = Partial<
  Pick<RequestQuantSelectInput, 'strategy' | 'numberOfData'>
>;

// selectorFamily 언제 사용?
// - atom의 파생된 데이터를 getter/setter 할 때 + atom에서 선택해야할 파라미터가 필요할때
// eg) todoList의 특정 index를 대상으로, newValue로 PATCH하거나 GET할때

// ⚠ 이 코드는 예제 코드 입니다.
// atomQSHeader의 일부 데이터를 PATCH해주는 순수함수,
//      selectorFamily<T, P extends SerializableParam>
//      * T는 get의 리턴값, set의 입력값
//      * P는 파라미터 타입, get,set의 클로저변수 타입이다.
export const selectorQSHeaderData = selectorFamily<
  selectorQSHeaderDataIO,
  selectorQSHeaderDataParam
>({
  key: 'selectorQSHeaderData',
  // get:({numberOfData,strategy})=>({get})=>{...}
  // set:({numberOfData,strategy})=>({get,set,reset})=>{...}
  get:
    ({ numberOfData, strategy }) =>
    ({ get }) => {
      return get(atomQSHeader);
    },
  set:
    ({ numberOfData, strategy }) =>
    ({ get, set, reset }, newValue) => {
      if (!(newValue instanceof DefaultValue)) {
        const prev = get(atomQSHeader);
        set(
          atomQSHeader,
          produce(prev, (draft) => {
            if (numberOfData) draft.numberOfData = newValue.numberOfData;
            if (strategy) draft.strategy = newValue.strategy;
            return draft;
          }),
        );
      }
    },
});

// atom 정의 - fs 에 들어가는 데이터별로
// selector 정의 - strategy,numberOfData 각 getter/setter
export const atomQSBody = atom<
  Omit<RequestQuantSelectInput, 'strategy' | 'numberOfData'>
>({
  key: 'atomQSBody',
  default: {
    data: {
      market_cap: 0,
      revenue: 0,
      operating_income: 0,
      EPS: 0,
      PER: 0,
      EV_per_EBITDA: 0,
      ROE: 0,
      dividend_yield: 0,
      BETA: 0,
      revenue_Q: 0,
      operating_income_Q: 0,
      net_income_Q: 0,
      controlling_interest_Q: 0,
      non_controlling_interest_Q: 0,
      total_assets_Q: 0,
      total_stock_holders_Q: 0,
      controlling_interest_share_Q: 0,
      non_controlling_interest_share_Q: 0,
      capital_Q: 0,
      debt_ratio_Q: 0,
      retention_rate_Q: 0,
      operating_margin_Q: 0,
      controlling_interest_rate_Q: 0,
      ROA_Q: 0,
      ROE_Q: 0,
      EPS_Q: 0,
      BPS_Q: 0,
      DPS_Q: 0,
      PBR_Q: 0,
      outstanding_shares_Q: 0,
      dividend_yield__Q: 0,
    },
  },
});
// - selector 정의 : 재무제표 key를 선택해서, 필터 on/off
// - selector 정의 : 재무제표 key를 선택해서, ( operator,valuse 수정  )
// value 가 number 이면 off
// value 가 object 이면 on
type atomQSBodyOnOff_IO = RequestFSBody | undefined;
type atomQSBodyOnOff_Params = keyof RequestFSKeys;

export const atomQSBodyOnOff = selectorFamily<
  atomQSBodyOnOff_IO,
  atomQSBodyOnOff_Params
>({
  key: 'atomQSBodyOnOff',
  get:
    (targetKey) =>
    ({ get }) => {
      const QSBody = get(atomQSBody);
      return QSBody.data[targetKey];
    },
  set:
    (targetKey) =>
    ({ get, set }, newValue) => {
      if (!(newValue instanceof DefaultValue) && newValue) {
        const QSBody = get(atomQSBody);
        set(
          atomQSBody,
          produce(QSBody, (draft) => {
            draft.data[targetKey] = newValue;
            return draft;
          }),
        );
      }
    },
});

// selector 합치기 selectorQSApiBody = atomQSHeader + atomQSBody
export const selectorQSApiBody = selector<RequestQuantSelectInput>({
  key: 'selectorQSApiBody',
  get: ({ get }) => {
    const head = get(atomQSHeader);
    const body = get(atomQSBody);
    return { ...head, ...body };
  },
});
