"use client";

import { Roulette, games } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [startEnd, setStartEnd] = useState<boolean>(false);

  useEffect(() => {
    chartRef.current && chartRef.current.classList.remove("doghnut-animate");
    if (chartRef.current) {
      let gameLen = games.length;
      let gradientsSegement = games
        .map((game, i) => {
          let perStart = Math.ceil((i / gameLen) * 100);
          let perEnd = Math.ceil(((i + 1) / gameLen) * 100);
          return `${game.color} ${perStart}% ${perEnd}%`;
        })
        .join(", ");
      chartRef.current.style.background = `conic-gradient(${gradientsSegement})`;
      if (startEnd) {
        chartRef.current.classList.add("doghnut-animate");
        setTimeout(() => {
          chartRef.current?.classList.remove("doghnut-animate");
          setStartEnd(false);
        }, 10000);
      } else {
        chartRef.current.classList.remove("doghnut-animate");
        setStartEnd(false);
      }
    }
  }, [startEnd]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 mx-auto text-white">
      <div className="fixed left-1/2 top-[31.5%] z-50 w-2 h-[98px] rounded-full doughnut-hole -translate-x-1/2"></div>

      <div
        className="relative w-48 h-48 rounded-full doughnut-chart doghnut-animate"
        ref={chartRef}
        // ref={(ref) => {
        //   let gameLen: number = games.length;
        //   if (ref) {
        //     let gradientsSegement = games
        //       .map((game: Roulette, i) => {
        //         let perStart = Math.ceil((i / gameLen) * 100);
        //         let perEnd = Math.ceil(((i + 1) / gameLen) * 100);
        //         // console.log("perStart", perStart);
        //         // console.log(`${game.color} ${perStart}% ${perEnd}%`);
        //         return `${game.color} ${perStart}% ${perEnd}%`;
        //       })
        //       .join(", ");
        //     ref.style.background = `conic-gradient(
        //       ${gradientsSegement}
        //     )`;
        //   }
        // }}
      >
        {games.map((game, i) => (
          <span className="absolute rotate-45" style={{}}>
            {game.name}
          </span>
        ))}
      </div>
      <button
        className="flex text-center outline-none border-none p-2 my-2 rounded bg-violet-600 text-white transition duration-300 ease-in-out hover:opacity-70 font-bold"
        onClick={() => setStartEnd(true)}
        disabled={startEnd}
      >
        Tap in
      </button>
    </main>
  );
}
