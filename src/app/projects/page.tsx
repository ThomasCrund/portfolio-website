"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex w-full max-w-5xl min-h-screen flex-col p-10 gap-8">
      <div className="z-10 sm:justify-between justify-center font-mono flex flex-wrap-reverse">
       <div className="flex">
        <div className="size-10 bg-gray-400 rounded-full"></div>
        <strong className="text-2xl sm:text-4xl text-current ml-4">Thomas Crundwell</strong>
       </div>
       <div className="bg-dark w-72 mb-5 md:mb-0 flex p-2 px-4 justify-between rounded-lg">
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/')}>About</p>
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/projects')}><u>Projects</u></p>
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/experience')}>Experience</p>
        </div>
      </div>

      <div>
          <strong className="text-5xl text-current">Projects</strong>
      </div>

      <div className="self-end max-w-lg bg-platinum p-6 rounded-xl">
        <p className="text-md">These first 3 projects have come about from my involvement with my residential colleges productions and running tech (sound and lighting) for those they are all improvements I have made for them.</p>
      </div>

      <div 
        className="self-start max-w-3xl w-xs bg-current overflow-hidden w-full min-h-20 rounded-xl flex flex-row items-center flex-wrap sm:flex-nowrap cursor-pointer"
        onClick={() => router.push('/projects/lighting')}
      >
            <div className="min-w-64 min-h-48 aspect-[4/3] sm:h-fill relative grow">
                <Image 
                    src="/lighting_desk/lighting_cover.jpg"
                    alt="Test"
                    fill
                    className="w-full"
            />
            </div>
            <div className="flex-col shrink p-6 w-[32rem] justify-start align-top text-left md:h-48 text-white">
                <div className="text-center text-white text-lg">Custom Lighting Desk</div>
                <p><strong>2024</strong> - Lighting desk to control stage lights over the artnet protocol, initial version using a prototyping board with second version in progress to use a custom pcb.</p>
                <div className="flex flex-row gap-2 mt-3 flex-wrap">
                    <span className="inline-flex items-center rounded-full bg-[#483C46] px-2 py-1 text-xs font-medium text-white">Python</span>
                    <span className="inline-flex items-center rounded-full bg-[#70AE6E] px-2 py-1 text-xs font-medium text-white">Raspberry Pi</span>
                    <span className="inline-flex items-center rounded-full bg-[#BEEE62] px-2 py-1 text-xs font-medium text-dark">Artnet</span>
                    <span className="inline-flex items-center rounded-full bg-[#EF5B5B] px-2 py-1 text-xs font-medium text-white">PCB Design</span>
                </div>
            </div>
      </div>
      <div className="self-start max-w-3xl w-xs bg-current overflow-hidden w-full min-h-20 rounded-xl flex flex-row items-center flex-wrap sm:flex-nowrap cursor-pointer"
      onClick={() => router.push('/projects/sound-desk')}>
            <div className="min-h-48 aspect-[4/3] relative grow">
                <Image 
                    src="/lighting_desk/lighting_cover.jpg"
                    alt="Test"
                    fill
                    className="w-full"
            />
            </div>
            <div className="flex-col shrink p-6 w-[32rem] justify-start align-top text-left text-white">
                <div className="text-center text-white text-lg">Wireless Sound Desk Interface</div>
                <p className="text-sm"><strong>2024</strong> - The Roland m380 mixing desk does not have wireless control capability, I developed a python and react application to communicate with the existing desk over usb midi and provide a web interface that can be accessed across the local network.</p>
                <div className="flex flex-row gap-2 mt-3 flex-wrap">
                    <span className="inline-flex items-center rounded-full bg-[#483C46] px-2 py-1 text-xs font-medium text-white">Python</span>
                    <span className="inline-flex items-center rounded-full bg-[#483C46] px-2 py-1 text-xs font-medium text-white">Javascript</span>
                    <span className="inline-flex items-center rounded-full bg-[#70AE6E] px-2 py-1 text-xs font-medium text-white">Raspberry Pi</span>
                    <span className="inline-flex items-center rounded-full bg-[#F4743B] px-2 py-1 text-xs font-medium text-white">React</span>
                    <span className="inline-flex items-center rounded-full bg-[#BEEE62] px-2 py-1 text-xs font-medium text-dark">Websocket</span>
                    <span className="inline-flex items-center rounded-full bg-[#BEEE62] px-2 py-1 text-xs font-medium text-dark">USB Midi</span>
                </div>
            </div>
      </div>
      <div className="self-start max-w-3xl w-xs bg-current overflow-hidden w-full min-h-20 rounded-xl flex flex-row items-center flex-wrap sm:flex-nowrap cursor-pointer"
      onClick={() => router.push('/projects/script-scroll')}>
            <div className="min-h-48 aspect-[4/3] relative grow">
                <Image 
                    src="/lighting_desk/lighting_cover.jpg"
                    alt="Test"
                    fill
                    className="w-full"
            />
            </div>
            <div className="flex-col shrink p-6 w-[32rem] justify-start align-top text-left text-white">
                <div className="text-center text-white text-lg">Script Scroll</div>
                <p><strong>2024</strong> - A system which connects multiple members of the tech team while scrolling though the production script so that only one person needs to scroll for all people.</p>
                <div className="flex flex-row gap-2 mt-3 flex-wrap">
                    <span className="inline-flex items-center rounded-full bg-[#483C46] px-2 py-1 text-xs font-medium text-white">Typescript</span>
                    <span className="inline-flex items-center rounded-full bg-[#F4743B] px-2 py-1 text-xs font-medium text-white">React</span>
                    <span className="inline-flex items-center rounded-full bg-[#BEEE62] px-2 py-1 text-xs font-medium text-dark">Websocket</span>
                </div>
            </div>
      </div>


    </main>
  );
}
