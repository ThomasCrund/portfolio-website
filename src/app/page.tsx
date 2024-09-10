"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex w-full max-w-5xl min-h-screen flex-col p-10 gap-8">
      <div className="z-10 sm:justify-end justify-center font-mono flex">
      <div className="bg-dark w-72 mb-5 md:mb-0 flex p-2 px-4 justify-between rounded-lg">
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/')}><u>About</u></p>
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/projects')}>Projects</p>
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/experience')}>Experience</p>
        </div>
      </div>

      <div>
          <div className="size-16 bg-gray-400 rounded-full"></div>
          <strong className="text-6xl text-current">Thomas Crundwell</strong>
          <p>Computer Science & Engineering (Mechatronics) Student UNSW</p>
      </div>

      <div className="self-end max-w-lg bg-platinum p-6 rounded-xl">
        <p className="text-lg">I have always had a passion for programming and electronics, making things which control physical motors or get data from sensors has always interested me </p>
      </div>

      <div className="self-center max-w-2xl w-full bg-light-green p-6 rounded-xl flex-col items-center flex-wrap">
        <h1 className="float-center text-white text-xl text-center mb-4"><strong>Featured Projects</strong></h1>
        <div className="flex flex-wrap flex-row w-full gap-4 justify-center">
          <div className="w-full sm:w-[12rem] bg-current rounded-xl p-2 flex-col overflow-hidden cursor-pointer" onClick={() => router.push('/projects/lighting')}>
            <h1 className="text-center text-white">Custom Lighting Desk</h1>
            <div className="w-full aspect-[4/3] relative">
              <Image 
                src="/lighting_desk/lighting_cover.jpg"
                alt="Test"
                fill
                className="w-full"
              />
            </div>
          </div>
          <div className="w-full sm:w-[12rem] bg-current rounded-xl p-2 flex-col overflow-hidden cursor-pointer" onClick={() => router.push('/projects/sound-desk')}>
            <h1 className="text-center text-white">Mixing Desk Interface</h1>
            <div className="w-full aspect-[4/3] relative">
              {/* <Image 
                src="/lighting_desk/lighting_cover.jpg"
                alt="Test"
                fill
                className="w-full"
              /> */}
            </div>
          </div>
          <div className="w-full sm:w-[12rem] bg-current rounded-xl p-2 flex-col overflow-hidden cursor-pointer" onClick={() => router.push('/projects/script-scroll')}>
            <h1 className="text-center text-white">Script Scroll</h1>
            <div className="w-full aspect-[4/3] relative">
              {/* <Image 
                src="/lighting_desk/lighting_cover.jpg"
                alt="Test"
                fill
                className="w-full"
              /> */}
            </div>
          </div>
        </div>
        
      </div>

    </main>
  );
}
