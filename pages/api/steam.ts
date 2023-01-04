import type { NextApiRequest, NextApiResponse } from 'next'
import { AppInfo } from '../../models/steamStoreAPI';

const steam = async (req: NextApiRequest, res: NextApiResponse) => {
  const appid = req.query.game

  const game = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${appid}`
  );
  const gamer: AppInfo = await game.json();

  return res.status(200).json(gamer)
}

export default steam