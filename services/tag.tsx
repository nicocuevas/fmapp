
import axios from 'axios';


const baseUrl = `${process.env.FM_API_URL}`

export const getTopAlbums =  async (tag='') => {
  const payload = {
    method: 'tag.getTopAlbums',
    api_key: process.env.FM_API_KEY,
    format: 'json',
    tag: tag,
    limit: 10
  }
  try {
    const res = await axios.get(baseUrl, {params: payload})
    const data = res.data && res.data.albums
    return {...data["@attr"], items: data.album }
  } catch (error) {
    console.error(error)
  }
  return null
}

export const getTopArtists =  async (tag='') => {
    const payload = {
        method: 'tag.getTopArtists',
        api_key: process.env.FM_API_KEY,
        format: 'json',
        tag: tag,
        limit: 10
    }
    try {
        const res = await axios.get(baseUrl, {params: payload})
        const data = res.data && res.data.topartists
        return {...data["@attr"], items: data.artist }
    } catch (error) {
        console.error(error)
    }
    return null
}
