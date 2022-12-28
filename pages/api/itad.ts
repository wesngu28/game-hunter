import type { NextApiRequest, NextApiResponse } from 'next'

const itad = async (req: NextApiRequest, res: NextApiResponse) => {
  const game = req.query.game

  const response = await fetch(`https://api.isthereanydeal.com/v02/game/plain/?key=${process.env.ITAD_KEY}&title=${game}`, {
    method: 'GET'
  })

  const string = await response.json()

  const sales = await fetch(`https://api.isthereanydeal.com/v01/game/prices/?key=${process.env.ITAD_KEY}&plains=${string.data.plain}`)
  const salesJson = await sales.json()
  salesJson.string = string.data.plain
  return res.status(200).json(salesJson)
}

export default itad