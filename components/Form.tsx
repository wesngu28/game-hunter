'use client'

import { FormEvent, useState } from "react";

export default function Form() {

  const [text, setText] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const matchingApp = gameList.applist.apps.find((game: {appid: number, name: string}) => game.name === text)
    if (matchingApp) {
      const game = await fetch(`https://store.steampowered.com/api/appdetails?appids=${matchingApp.appid}`)
      const gamer = await game.json()
    }

    const di = await fetch(`/api/twitch?game=${text}`)
    const dij = await di.json()
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Enter your Game:
        <textarea
          value={text}
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
      </label>
      <input disabled={!text} type="submit" value="Submit" />
    </form>
    </>
  );
}
