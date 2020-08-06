"use strict";
exports.__esModule = true;
exports.api_youtube = void 0;
exports.api_youtube = {
    "kind": "youtube#searchListResponse",
    "etag": "_ia2MdD2lAH5WUeYWq748jBqDmI",
    "nextPageToken": "CAUQAA",
    "regionCode": "BR",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "UqNIgPhLLJ4L2-syV61dRKjV-iI",
            "id": {
                "kind": "youtube#video",
                "videoId": "4Naaa9AHBZQ"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "sDO0w3gpvMpg_V_XilewQzSw1c8",
            "id": {
                "kind": "youtube#video",
                "videoId": "O9XBb95KS0k"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ZOEpcMglzGVjPKzKMOhvW6MCztQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "KyDV1AnEXPA"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "_Vk4PK58zDxxNkg1IYzex3Cgl10",
            "id": {
                "kind": "youtube#video",
                "videoId": "RBswD_RIy4I"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "zPbN6QhutLyJ-OB-RcsQ0DPJ0Hk",
            "id": {
                "kind": "youtube#video",
                "videoId": "VFX3DCLtEcQ"
            }
        }
    ]
};
/*
{
  kind: 'youtube#searchListResponse',
  etag: 'X-inN8TemWMT0RoT4e8TPlqUl_I',
  nextPageToken: 'CAUQAA',
  regionCode: 'BR',
  pageInfo: { totalResults: 1000000, resultsPerPage: 5 },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'BtLg_ySonabA2t3-1Fjwa4GDpN4',
      id: [Object]
    },
    {
      kind: 'youtube#searchResult',
      etag: 'LNW0uRmyqaCkP8JqYXKjhgHos2s',
      id: [Object]
    },
    {
      kind: 'youtube#searchResult',
      etag: 'r_Uuo4u_mt5PHwQeg0dn0o7-gCQ',
      id: [Object]
    },
    {
      kind: 'youtube#searchResult',
      etag: 'pzuoj3oSFPaHMYxoI12-M_S70f8',
      id: [Object]
    },
    {
      kind: 'youtube#searchResult',
      etag: 'KtW3hz85YkWAX1ip5HF4pTOstzY',
      id: [Object]
    }
  ]
}
valim@valim:~/Desktop/DialogFlow$ tsc test.ts && node test.js
{ kind: 'youtube#video', videoId: '4zZIzQXtorw' }
valim@valim:~/Desktop/DialogFlow$



*/ 
