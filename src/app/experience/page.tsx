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
          <p className="text-slate-50 cursor-pointer" onClick={() => router.push('/experience')}><u>Experience</u></p>
        </div>
      </div>

      <div>
          <strong className="text-5xl text-current">Experience</strong>
      </div>

    </main>
  );
}
