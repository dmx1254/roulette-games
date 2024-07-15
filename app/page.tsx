"use client";

import { Roulette, games } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 mx-auto text-white">
      <div className="fixed left-1/2 top-[36%] z-50 w-2 h-[98px] rounded-full doughnut-hole -translate-x-1/2"></div>
      <div
        className="relative w-48 h-48 rounded-full doughnut-chart animate-spin"
        ref={(ref) => {
          let gameLen: number = games.length;
          if (ref) {
            let gradientsSegement = games
              .map((game: Roulette, i) => {
                let perStart = Math.ceil((i / gameLen) * 100);
                let perEnd = Math.ceil(((i + 1) / gameLen) * 100);
                // console.log("perStart", perStart);
                // console.log(`${game.color} ${perStart}% ${perEnd}%`);
                return `${game.color} ${perStart}% ${perEnd}%`;
              })
              .join(", ");
            ref.style.background = `conic-gradient(
              ${gradientsSegement}
            )`;
          }
        }}
      ></div>
    </main>
  );
}
