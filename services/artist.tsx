
import axios from 'axios';


export const searchArtists =  async (text='', limit=10) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_FM_API_URL}`
  const payload = {
    method: 'artist.search',
    api_key: process.env.NEXT_PUBLIC_FM_API_KEY,
    format: 'json',
    artist: text,
    limit: limit
  }
  try {
    const res = await axios.get(baseUrl, {params: payload})
    const data = res.data && res.data.results
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}


export const getArtistsInfo =  async (mbid='') => {
  const baseUrl = `${process.env.NEXT_PUBLIC_FM_API_URL}`
  const payload = {
    method: 'artist.getinfo',
    api_key: process.env.NEXT_PUBLIC_FM_API_KEY,
    format: 'json',
    mbid: mbid
  }
  try {
    const res = await axios.get(baseUrl, {params: payload})
    const data = res.data && res.data.artist
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}

export const getTopAlbums =  async (mbid='', limit=10) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_FM_API_URL}`
  const payload = {
    method: 'artist.getTopAlbums',
    api_key: process.env.NEXT_PUBLIC_FM_API_KEY,
    format: 'json',
    mbid: mbid,
    limit: limit
  }
  try {
    const res = await axios.get(baseUrl, {params: payload})
    const data = res.data && res.data.topalbums
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}

export const getTopTracks =  async (mbid='', limit=10) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_FM_API_URL}`
  const payload = {
    method: 'artist.getTopTracks',
    api_key: process.env.NEXT_PUBLIC_FM_API_KEY,
    format: 'json',
    mbid: mbid,
    limit: limit
  }
  try {
    const res = await axios.get(baseUrl, {params: payload})
    const data = res.data && res.data.toptracks
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}
