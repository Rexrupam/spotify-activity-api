import axios from "axios"
import querystring from "querystring"
let scope = 'user-read-private user-read-email user-top-read user-modify-playback-state'

const queryParams = querystring.stringify({
  response_type: 'code',
  client_id: process.env.client_id,
  scope: scope,
  redirect_uri: process.env.redirect_uri
})

export const login = async(req,res)=>{
 try {
   res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
 } catch (error) {
    return res.status(500).json({error})
 }
}

export const callback = async(req,res)=>{
 const code = req.query.code || null;
  try{
     const response = await axios.post('https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        scope: scope,
        redirect_uri: process.env.redirect_uri,
        client_id: process.env.client_id,
        client_secret: process.env.client_secret
      }),
       {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    const options = {
      httpOnly: true,
      secure: true
     }
    return res
    .cookie('accessToken', response.data.access_token, options)
    .cookie('refreshToken', response.data.refresh_token, options)
    .json({response: response.data})
  }catch(error){
     return res.status(500).json({error: error.message})
  }
}

export const stop = async(req,res)=>{
    const token = req.cookies.accessToken
    //token.accessToken -> to get the access token
    if(!token){
     return res.status(400).json({message: "token not found"})
    }
   try {
    const response = await axios.put('https://api.spotify.com/v1/me/player/pause',
      null,
     {
      headers: {
       Authorization: `Bearer ${token}`
     }
     })
      return res.status(200).json({message: 'Playback paused successfully'})
   } catch (error) {
     return res.status(500).json({message: error.message})
   }
}

export const topTracks = async(req,res)=>{
  const token = req.cookies.accessToken
  if(!token){
    return res.status(400).json({message: "token not found"})
   }
   try {
    const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10'
      ,{
     headers: {
       Authorization: `Bearer ${token}`
     }
      })
     let trackNames=[]
     for(let i=0; i<response.data.items.length; i++){
      trackNames[i] = response.data.items[i].name
     }

      return res.status(200).json({trackNames})
   } catch (error) {
     return res.status(500).json({message: error})
   }

}
export const play = async(req,res)=>{
  const token = req.cookies.accessToken
  //token.accessToken -> to get the access token
  if(!token){
   return res.status(400).json({message: "token not found"})
  }
 try {
  const response = await axios.put('https://api.spotify.com/v1/me/player/play',
    null,
   {
    headers: {
     Authorization: `Bearer ${token}`
   }
   })
    return res.status(200).json({message: 'Playback played successfully'})
 } catch (error) {
   return res.status(500).json({message: error.message})
 }
}

export const playAnyTop10Track = async(req,res)=>{
  const token = req.cookies.accessToken
  //token.accessToken -> to get the access token
  if(!token){
   return res.status(400).json({message: "token not found"})
  }
   try {
    const getTopTrack = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10'
      ,{
     headers: {
       Authorization: `Bearer ${token}`
     }
      })
      const randomNum = Math.floor(Math.random() * 10)
     const playTopTrack = await axios.put('https://api.spotify.com/v1/me/player/play',
     {
        "uris": [getTopTrack.data.items[randomNum].uri]
      },
     {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
     )             

      return res.status(200).json({message: `Playing ${getTopTrack.data.items[randomNum].name}`})
   } catch (error) {
     return res.status(500).json({message: error})
   }

}

export const healthCheck=async(req,res)=>{
  return res.json({message: 'ok'})
}

