﻿export interface WebHookResponseSearchApi {
    kind: String
    etag: String,
    nextPageToken: String,
    regionCode: String,
    pageInfo: {
      totalResults: Number,
      resultsPerPage: Number
    },
    items:{
        kind: String,
        etag: String,
        id: {
          kind: String,
          videoId: String
        }
      }[]
}