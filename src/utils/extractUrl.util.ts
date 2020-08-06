export function getVideoId(items){
    const listId = []
    for(let item of items){
      listId.push(item.id.videoId)
    }
    return listId
  }

  
  
  
export function constructorURL(url, listVideoId){
    const listUrl = []
    for(let videoId of listVideoId){
      listUrl.push(url+videoId)
    }
    return listUrl
  }