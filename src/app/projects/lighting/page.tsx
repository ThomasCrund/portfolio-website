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
          <strong className="text-5xl text-current">Custom Lighting Desk</strong>
          <a href="https://cad.onshape.com/documents/1a02132a742e0a3ddc6d22b3/w/0cd4bbfbfbc361ddbb1a16c6/e/193c538b80334c061403eee2?renderMode=0&uiState=66e01f472009a86817431cbd"
            target="_blank" className="size-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </a>
          <a href="https://github.com/ThomasCrund/lighting-console"
            target="_blank" className="size-10">
            <svg viewBox="0 0 96 96" className="size-10" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f" /></svg>
          </a>
        </div>
        <div className="flex flex-row gap-2 mt-3 flex-wrap">
          <span className="inline-flex items-center rounded-full bg-[#483C46] px-2 py-1 text-xs font-medium text-white">Python</span>
          <span className="inline-flex items-center rounded-full bg-[#70AE6E] px-2 py-1 text-xs font-medium text-white">Raspberry Pi</span>
          <span className="inline-flex items-center rounded-full bg-[#BEEE62] px-2 py-1 text-xs font-medium text-dark">Artnet</span>
          <span className="inline-flex items-center rounded-full bg-[#EF5B5B] px-2 py-1 text-xs font-medium text-white">PCB Design</span>
        </div>
      </div>

      <div> {/* Overview */}
        <p>This lighting desk has faders to set levels for lights, a joystick which can control the position of the moving head lights, a series of buttons and status
          leds to select different fixtures (lights). Further version two also includes a rotary encoder to control different channels in a differerent way</p>
      </div>

      <div className="flex flex-column flex-wrap justify-center">
        <div className="max-w-md aspect-[4/3] relative grow">
          <Image
            src="/lighting_desk/lighting_cover.jpg"
            alt="Test"
            fill
            className="w-full"
            sizes="(max-width: 400px) 100vw, 33vw"
          />
        </div>
      </div>

      <div> {/* Background */}
        <h3>Background</h3>
        <p>I made this custom lighting desk after I had recently decided that buying a lighting desk for my college&apos;s amature production was too expensive,
          I decided to instead use some open source software that could control the desk called <a href="https://qlcplus.org/">QLC+</a> but I still wanted
          to be able to use physical controls, I though I could create a lighting desk using analog inputs and a raspberry pi for less than $100 and thus
          this custom lighting desk came about.</p>
      </div>

      <div> {/* Design */}
        <h3>Design</h3>
        <p>
          For the Design I decided to place the joystick in the bottom right hand corner with buttons to its left and small sliders above that and larger sliders on the right.
          A combination of small and larger sliders are used to cut down on costs as larger 60mm sliders are decently more expensive compared to the 45mm variant. In version 1 large gaps are included to allow space to
          place the raspberry pi and the breadboard, those have been minimised in version 2.
        </p>
      </div>

      <div> {/* Version 1 */}
        <h3>Version 1</h3>
        <p>This version was designed in onshape with a custom button assemberly to hold the buttons in position below the top pannel</p>
        <div className="flex flex-column flex-wrap gap-4 mt-4 mb-4">
          <div className="min-w-40 aspect-[4/3] relative grow">
            <Image
              src="/lighting_desk/cad_top.png"
              alt=""
              fill
              className="w-full object-contain"
              sizes="(max-width: 400px) 100vw, 33vw"
            />
          </div>
          <div className="min-w-40 aspect-[4/3] relative grow">
            <Image
              src="/lighting_desk/cad_bottom.png"
              alt=""
              fill
              className="w-full object-contain"
              sizes="(max-width: 400px) 100vw, 33vw"
            />
          </div>
          <div className="min-w-40 aspect-[4/3] relative grow">
            <Image
              src="/lighting_desk/cad_button.png"
              alt=""
              fill
              className="w-full object-contain"
              sizes="(max-width: 400px) 100vw, 33vw"
            />
          </div>
          <div className="min-w-44 aspect-[3/4] relative grow">
            <Image
              src="/lighting_desk/button_assemberly.jpg"
              alt=""
              fill
              className="w-full object-contain"
              sizes="(max-width: 400px) 100vw, 33vw"
            />
          </div>
        </div>

        <p>The top acrylic pannel laser cut. the joystick, buttons, sliders, a Raspberry Pi and
          and a breadboard were then mounted on the underside of this pannel, the <a href="https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/MCP3004-MCP3008-Data-Sheet-DS20001295.pdf">MCP3008s</a>
          were placed on the breadboard and a diode was added to lower the input voltage of the neopixels
          from there circuits were wired up and connnected between the breadboard, the Raspberry Pi and other components.
        </p>
        <div className="flex flex-column flex-wrap gap-4 mt-4 mb-4">
          <div className="min-w-60 aspect-[4/3] relative grow">
            <Image
              src="/lighting_desk/wiring_1.jpg"
              alt="Test"
              fill
              className="w-full"
              sizes="(max-width: 400px) 100vw, 33vw"
            />
          </div>
          <div className="min-w-60 aspect-[4/3] relative grow">
            <Image
              src="/lighting_desk/wiring_2.jpg"
              alt="Test"
              fill
              className="w-full"
              sizes="(max-width: 400px) 100vw, 33vw"
            />
          </div>
          <div className="min-w-60 aspect-[4/3] relative grow">
            <Image
              src="/lighting_desk/wiring_3.jpg"
              alt="Test"
              fill
              className="w-full"
              sizes="(max-width: 400px) 100vw, 33vw"
            />
          </div>
        </div>
        <p>The code was written in python using a premade MCP3008 library for the analog input and the adafruit Neopixel library to control the status LEDs.
          Input code was abstracted from the Output and control code to make the code more modular to output to midi or other protocols for control of the sound desk or other things.
          Two artnet librarys were use one to trasmit data over the local network and another the recieve data to get the latest position of moving heads so as to update their current
          position rather than a previous position making the desk more usable</p>
        <div className="bg-platinum p-4 rounded-xl mt-4">
          <p>Improvements to make following this version is improving the reliability of pressing buttons, the moving head movement was a little jittery, noise on the analog input lines
            caused the code to think the sliders were being changed and thus would override control of secenes within the software.
          </p>
        </div>
      </div>

      <div> {/* Version 2 (in progress)*/}
        <h3>Version 2 - In Progress</h3>
        <p>After testing the inital version I have set out to create the second version which will use a custom designed 4 layer PCB to more reliably connect the sliders,
          buttons, joystick and also add a rotary encoder. This has currently just been designed using Altium with manufacturing, testing and programming still to come.
        </p>
      </div>

    </main>
  );
}
