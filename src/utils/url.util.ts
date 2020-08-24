import * as dotenv from 'dotenv'
dotenv.config()

export const url_video = 'https://www.youtube.com/watch?v='
export const url_search_video = `https://www.googleapis.com/youtube/v3/search?key=${process.env.API}&part=id&q=`