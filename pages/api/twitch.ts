import type { NextApiRequest, NextApiResponse } from 'next'
import { twitchObject } from '../../models/twitchObject'

const twitchToken = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const game = req.query.game

    const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET_ID}&grant_type=client_credentials`, {
      method: 'POST'
    })

    const auth = await response.json()
    const getGame = await fetch(`https://api.twitch.tv/helix/games?name=${game}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${auth.access_token}`,
        'Client-Id': `${process.env.TWITCH_CLIENT_ID}`
      }
    })
    const gameJson = await getGame.json()
    console.log(gameJson)
    const id = gameJson.data[0].id

    const getStream = await fetch(`https://api.twitch.tv/helix/streams?game_id=${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${auth.access_token}`,
        'Client-Id': `${process.env.TWITCH_CLIENT_ID}`
      }
    })

    const streamJson: twitchObject = await getStream.json()
    streamJson.img = gameJson.data[0].box_art_url
    streamJson.name = gameJson.data[0].name
    return res.status(200).json(streamJson)
  } catch (err) {
    return res.status(200).json({ error: `Something went wrong, ${err}`})
  }
}

export default twitchToken