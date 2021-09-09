const childProcess = require('child_process');

const test = async () => {
  try {
    const res = childProcess.execSync(`
      curl 'https://finance.daum.net/api/themes/leading_stocks?page=1&perPage=30&fieldName=changeRate&order=desc&pagination=true' \
        -H 'authority: finance.daum.net' \
        -H 'pragma: no-cache' \
        -H 'cache-control: no-cache' \
        -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
        -H 'accept: application/json, text/javascript, */*; q=0.01' \
        -H 'x-requested-with: XMLHttpRequest' \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36' \
        -H 'sec-fetch-site: same-origin' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-dest: empty' \
        -H 'referer: https://finance.daum.net/domestic/themes' \
        -H 'accept-language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7' \
        -H 'cookie: webid=b3083833c5e14a85aaf4b6503a90316a; webid_ts=1616340308001; TIARA=zuVlbz3tah_Xkq4zsq9WFfjn_NXuaGYC7mCAzboDyi91jA3dnd2lCltferZn3RzO9w8-jHfa9WANt3Qc6q2XIaXc3_vocTAk; __T_=1; _ga=GA1.2.1900900623.1631174296; _gid=GA1.2.713481293.1631174296; KAKAO_STOCK_RECENT=[%22A035420%22%2C%22A005930%22]; _gat_gtag_UA_128578811_1=1; _gat_gtag_UA_74989022_11=1; _T_ANO=RpEkM4oCTvZXO6EYnKKDunOp1oOwvYoSK3TPxAcbGJM488IsIcwAhhQd1GJQIJr5J7qUoS8d9VaZ+73yCh8uBTLRHW3rgSJNYu/pRZmriyRUTUOfUr/27iSDf3qUgsQza2pncRBsxyN+xqVK9hy/zbuEJgiUBC99Oyq+5WPfITwjjc1GiQYWvIP/LwZK4okSocPAQgLFkowuVtY3BCf5lZnS4BxOQc6gmmJ+Q5zQssf/ZVKnyYiis/MHRrKJC/DsHFglWCHXLnnRvOC7Ep+Xs0H6Jwi3YBDGGg8SNw0LZR/CfvkwEUSlmCCij+guvnfbUsyI4rWICBvHEml4IUfn/w==; webid_sync=1631174638603; _dfs=WXlEQk1scVpDTkpUVmU5bGoxU1I4SE9VUThqOUNUbXpmZXV3YnMwVXl5amJxdytBS21VV2dMTElrNkloTUxYM21taFRla2JxUkFPL3FYLzNHcVFzQkE9PS0tT1haR3g5ODl5SEkzeVRiZjVBbGN1UT09--3e58e64f6bbbc0a9825fee949b2939f0d5fc4ac9' \
        --compressed
      `);
    process.stdout.write(res.toString());
  } catch (error) {
    console.log(error);
  }
};
test();
`
{
    "data":[
       {
          "name":"마리화나",
          "changeRate":0.06466,
          "metadata":{
             "RISE":3,
             "EVEN":0,
             "FALL":2
          },
          "leadingStocks":[
             {
                "name":"에스엘바이오닉스",
                "change":"RISE",
                "symbolCode":"A214310"
             },
             {
                "name":"한국비엔씨",
                "change":"RISE",
                "symbolCode":"A256840"
             }
          ]
       },
       {
          "name":"코스피 하락에 투자(ETF)",
          "changeRate":0.02388,
          "metadata":{
             "RISE":10,
             "EVEN":0,
             "FALL":0
          },
          "leadingStocks":[
             {
                "name":"ARIRANG 200선물인버스2X",
                "change":"RISE",
                "symbolCode":"A253160"
             },
             {
                "name":"KOSEF 200선물인버스2X",
                "change":"RISE",
                "symbolCode":"A253230"
             }
          ]
       },
       {
          "name":"NFT(대체불가능토큰)",
          "changeRate":0.01593,
          "metadata":{
             "RISE":3,
             "EVEN":0,
             "FALL":3
          },
          "leadingStocks":[
             {
                "name":"위메이드",
                "change":"RISE",
                "symbolCode":"A112040"
             },
             {
                "name":"서울옥션",
                "change":"RISE",
                "symbolCode":"A063170"
             }
          ]
       },
       {
          "name":"의류 브랜드",
          "changeRate":0.01562,
          "metadata":{
             "RISE":5,
             "EVEN":0,
             "FALL":9
          },
          "leadingStocks":[
             {
                "name":"대현",
                "change":"RISE",
                "symbolCode":"A016090"
             },
             {
                "name":"형지엘리트",
                "change":"RISE",
                "symbolCode":"A093240"
             }
          ]
       },
       {
          "name":"키즈",
          "changeRate":0.01508,
          "metadata":{
             "RISE":3,
             "EVEN":0,
             "FALL":4
          },
          "leadingStocks":[
             {
                "name":"대원미디어",
                "change":"RISE",
                "symbolCode":"A048910"
             },
             {
                "name":"손오공",
                "change":"RISE",
                "symbolCode":"A066910"
             }
          ]
       },
       {
          "name":"건자재 - 거푸집",
          "changeRate":0.01307,
          "metadata":{
             "RISE":3,
             "EVEN":0,
             "FALL":3
          },
          "leadingStocks":[
             {
                "name":"덕신하우징",
                "change":"RISE",
                "symbolCode":"A090410"
             },
             {
                "name":"윈하이텍",
                "change":"RISE",
                "symbolCode":"A192390"
             }
          ]
       },
       {
          "name":"유가 상승에 투자 (ETF·ETN)",
          "changeRate":0.01225,
          "metadata":{
             "RISE":10,
             "EVEN":0,
             "FALL":0
          },
          "leadingStocks":[
             {
                "name":"미래에셋 레버리지 원유선물혼합 ETN(H)",
                "change":"RISE",
                "symbolCode":"Q520009"
             },
             {
                "name":"삼성 레버리지 WTI원유 선물 ETN",
                "change":"RISE",
                "symbolCode":"Q530031"
             }
          ]
       },
       {
          "name":"주정",
          "changeRate":0.01165,
          "metadata":{
             "RISE":3,
             "EVEN":0,
             "FALL":2
          },
          "leadingStocks":[
             {
                "name":"MH에탄올",
                "change":"RISE",
                "symbolCode":"A023150"
             },
             {
                "name":"풍국주정",
                "change":"RISE",
                "symbolCode":"A023900"
             }
          ]
       },
       {
          "name":"농업 - 농기계",
          "changeRate":0.01016,
          "metadata":{
             "RISE":2,
             "EVEN":1,
             "FALL":4
          },
          "leadingStocks":[
             {
                "name":"삼성공조",
                "change":"RISE",
                "symbolCode":"A006660"
             },
             {
                "name":"대동금속",
                "change":"RISE",
                "symbolCode":"A020400"
             }
          ]
       },
       {
          "name":"LPG(액화석유가스)",
          "changeRate":0.00898,
          "metadata":{
             "RISE":3,
             "EVEN":0,
             "FALL":2
          },
          "leadingStocks":[
             {
                "name":"SK가스",
                "change":"RISE",
                "symbolCode":"A018670"
             },
             {
                "name":"SK디스커버리",
                "change":"RISE",
                "symbolCode":"A006120"
             }
          ]
       },
       {
          "name":"건자재 - 가구",
          "changeRate":0.00803,
          "metadata":{
             "RISE":5,
             "EVEN":1,
             "FALL":4
          },
          "leadingStocks":[
             {
                "name":"에넥스",
                "change":"RISE",
                "symbolCode":"A011090"
             },
             {
                "name":"에이스침대",
                "change":"RISE",
                "symbolCode":"A003800"
             }
          ]
       },
       {
          "name":"건강기능식품",
          "changeRate":0.00751,
          "metadata":{
             "RISE":4,
             "EVEN":2,
             "FALL":12
          },
          "leadingStocks":[
             {
                "name":"팜스빌",
                "change":"RISE",
                "symbolCode":"A318010"
             },
             {
                "name":"콜마비앤에이치",
                "change":"RISE",
                "symbolCode":"A200130"
             }
          ]
       },
       {
          "name":"교육",
          "changeRate":0.00632,
          "metadata":{
             "RISE":8,
             "EVEN":2,
             "FALL":8
          },
          "leadingStocks":[
             {
                "name":"아이스크림에듀",
                "change":"RISE",
                "symbolCode":"A289010"
             },
             {
                "name":"NE능률",
                "change":"RISE",
                "symbolCode":"A053290"
             }
          ]
       },
       {
          "name":"중소형 건설사",
          "changeRate":0.00535,
          "metadata":{
             "RISE":12,
             "EVEN":1,
             "FALL":22
          },
          "leadingStocks":[
             {
                "name":"범양건영",
                "change":"RISE",
                "symbolCode":"A002410"
             },
             {
                "name":"한진중공업",
                "change":"RISE",
                "symbolCode":"A097230"
             }
          ]
       },
       {
          "name":"전염병(코로나19) - 제약",
          "changeRate":0.00477,
          "metadata":{
             "RISE":18,
             "EVEN":3,
             "FALL":20
          },
          "leadingStocks":[
             {
                "name":"금호에이치티",
                "change":"RISE",
                "symbolCode":"A214330"
             },
             {
                "name":"지엘팜텍",
                "change":"RISE",
                "symbolCode":"A204840"
             }
          ]
       },
       {
          "name":"코스닥 하락에 투자 (ETF)",
          "changeRate":0.00459,
          "metadata":{
             "RISE":5,
             "EVEN":0,
             "FALL":0
          },
          "leadingStocks":[
             {
                "name":"TIGER 코스닥150선물인버스",
                "change":"RISE",
                "symbolCode":"A250780"
             },
             {
                "name":"ARIRANG 코스닥150선물인버스",
                "change":"RISE",
                "symbolCode":"A301410"
             }
          ]
       },
       {
          "name":"달러 가치 상승에 투자 (ETF·ETN)",
          "changeRate":0.00447,
          "metadata":{
             "RISE":3,
             "EVEN":0,
             "FALL":0
          },
          "leadingStocks":[
             {
                "name":"KOSEF 미국달러선물레버리지",
                "change":"RISE",
                "symbolCode":"A225800"
             },
             {
                "name":"KOSEF 미국달러선물",
                "change":"RISE",
                "symbolCode":"A138230"
             }
          ]
       },
       {
          "name":"농업 - 종자·비료·농약",
          "changeRate":0.00419,
          "metadata":{
             "RISE":6,
             "EVEN":1,
             "FALL":6
          },
          "leadingStocks":[
             {
                "name":"롯데정밀화학",
                "change":"RISE",
                "symbolCode":"A004000"
             },
             {
                "name":"카프로",
                "change":"RISE",
                "symbolCode":"A006380"
             }
          ]
       },
       {
          "name":"면역세포치료제",
          "changeRate":0.00398,
          "metadata":{
             "RISE":7,
             "EVEN":1,
             "FALL":8
          },
          "leadingStocks":[
             {
                "name":"엔케이맥스",
                "change":"RISE",
                "symbolCode":"A182400"
             },
             {
                "name":"박셀바이오",
                "change":"RISE",
                "symbolCode":"A323990"
             }
          ]
       },
       {
          "name":"손해보험",
          "changeRate":0.00365,
          "metadata":{
             "RISE":3,
             "EVEN":1,
             "FALL":4
          },
          "leadingStocks":[
             {
                "name":"메리츠화재",
                "change":"RISE",
                "symbolCode":"A000060"
             },
             {
                "name":"흥국화재",
                "change":"RISE",
                "symbolCode":"A000540"
             }
          ]
       },
       {
          "name":"LNG 발전",
          "changeRate":0.0034,
          "metadata":{
             "RISE":1,
             "EVEN":0,
             "FALL":3
          },
          "leadingStocks":[
             {
                "name":"경동도시가스",
                "change":"RISE",
                "symbolCode":"A267290"
             },
             {
                "name":"한국가스공사",
                "change":"FALL",
                "symbolCode":"A036460"
             }
          ]
       },
       {
          "name":"수소전기차 - 연료전지",
          "changeRate":0.0034,
          "metadata":{
             "RISE":8,
             "EVEN":0,
             "FALL":8
          },
          "leadingStocks":[
             {
                "name":"동양피스톤",
                "change":"RISE",
                "symbolCode":"A092780"
             },
             {
                "name":"평화홀딩스",
                "change":"RISE",
                "symbolCode":"A010770"
             }
          ]
       },
       {
          "name":" 보툴리눔 톡신 (보톡스)",
          "changeRate":0.00309,
          "metadata":{
             "RISE":5,
             "EVEN":0,
             "FALL":5
          },
          "leadingStocks":[
             {
                "name":"한국비엔씨",
                "change":"RISE",
                "symbolCode":"A256840"
             },
             {
                "name":"알에프텍",
                "change":"RISE",
                "symbolCode":"A061040"
             }
          ]
       },
       {
          "name":"음식료 - 주류",
          "changeRate":0.00272,
          "metadata":{
             "RISE":2,
             "EVEN":0,
             "FALL":4
          },
          "leadingStocks":[
             {
                "name":"무학",
                "change":"RISE",
                "symbolCode":"A033920"
             },
             {
                "name":"국순당",
                "change":"RISE",
                "symbolCode":"A043650"
             }
          ]
       },
       {
          "name":"수술용 로봇",
          "changeRate":0.00271,
          "metadata":{
             "RISE":2,
             "EVEN":1,
             "FALL":0
          },
          "leadingStocks":[
             {
                "name":"고영",
                "change":"RISE",
                "symbolCode":"A098460"
             },
             {
                "name":"큐렉소",
                "change":"RISE",
                "symbolCode":"A060280"
             }
          ]
       },
       {
          "name":"황사·미세먼지 - 마스크 ",
          "changeRate":0.00247,
          "metadata":{
             "RISE":7,
             "EVEN":1,
             "FALL":6
          },
          "leadingStocks":[
             {
                "name":"윌비스",
                "change":"RISE",
                "symbolCode":"A008600"
             },
             {
                "name":"상아프론테크",
                "change":"RISE",
                "symbolCode":"A089980"
             }
          ]
       },
       {
          "name":"인쇄회로기판(PCB)",
          "changeRate":0.00209,
          "metadata":{
             "RISE":5,
             "EVEN":1,
             "FALL":9
          },
          "leadingStocks":[
             {
                "name":"뉴프렉스",
                "change":"RISE",
                "symbolCode":"A085670"
             },
             {
                "name":"이수페타시스",
                "change":"RISE",
                "symbolCode":"A007660"
             }
          ]
       },
       {
          "name":"전염병(코로나19) - 기타",
          "changeRate":0.00205,
          "metadata":{
             "RISE":5,
             "EVEN":0,
             "FALL":10
          },
          "leadingStocks":[
             {
                "name":"멕아이씨에스",
                "change":"RISE",
                "symbolCode":"A058110"
             },
             {
                "name":"지티지웰니스",
                "change":"RISE",
                "symbolCode":"A219750"
             }
          ]
       },
       {
          "name":"수소전기차 - 인프라",
          "changeRate":0.00197,
          "metadata":{
             "RISE":4,
             "EVEN":0,
             "FALL":7
          },
          "leadingStocks":[
             {
                "name":"효성화학",
                "change":"RISE",
                "symbolCode":"A298000"
             },
             {
                "name":"효성첨단소재",
                "change":"RISE",
                "symbolCode":"A298050"
             }
          ]
       },
       {
          "name":"희토류",
          "changeRate":0.00182,
          "metadata":{
             "RISE":2,
             "EVEN":1,
             "FALL":6
          },
          "leadingStocks":[
             {
                "name":"EG",
                "change":"RISE",
                "symbolCode":"A037370"
             },
             {
                "name":"텔레필드",
                "change":"RISE",
                "symbolCode":"A091440"
             }
          ]
       }
    ],
    "totalPages":6,
    "currentPage":1,
    "pageSize":30
 }
`;
