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
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/projects')}>Projects</p>
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/experience')}>Experience</p>
        </div>
      </div>

      <div>
        <div className="flex flex-row gap-6 items-center mb-4">
          <strong className="text-5xl text-current">Script Scroll</strong>
          <a href="https://github.com/ThomasCrund/script-scroll"
            target="_blank" className="size-10">
            <svg viewBox="0 0 96 96" className="size-10" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f" /></svg>
          </a>
        </div>
        <div className="flex flex-row gap-2 mt-3 flex-wrap">
          <span className="inline-flex items-center rounded-full bg-[#483C46] px-2 py-1 text-xs font-medium text-white">Typescript</span>
          <span className="inline-flex items-center rounded-full bg-[#F4743B] px-2 py-1 text-xs font-medium text-white">React</span>
          <span className="inline-flex items-center rounded-full bg-[#BEEE62] px-2 py-1 text-xs font-medium text-dark">Websocket</span>
        </div>
      </div>

      <div> {/* Overview */}
        <p></p>
      </div>

    </main>
  );
}
