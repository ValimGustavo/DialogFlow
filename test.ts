import axios from 'axios'

async function getPage(url){
    return await axios.get(url)
        .then(response => {
            if(response.status == 200)
                return response.data
            else
                return ''
        })
        .catch(err => {
            throw new Error(err)
        })
    
}


const url_search_video = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrtkWROvn-lVFZqLd397jlXayrz6hWhjs&part=id&q='
getPage(url_search_video+'futebol')
    .then(response => {
        console.log(response)
    })