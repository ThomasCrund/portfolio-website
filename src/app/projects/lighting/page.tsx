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
          <p className="text-slate-50 cursor-pointer"><u>Projects</u></p>
          <p className="text-slate-50 cursor-pointer">Experience</p>
        </div>
      </div>

      <div>
        <div><strong className="text-5xl text-current">Custom Lighting Desk</strong></div>   
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

      <div> {/* Background */}
        <h3>Background</h3>
        <p>I made this custom lighting desk after I had recently decided that buying a lighting desk for my college's amature production was too expensive, 
            I decided to instead use some open source software that could control the desk called <a href="https://qlcplus.org/">QLC+</a> but I still wanted
            to be able to use physical controls, I though I could create a lighting desk using analog inputs and a raspberry pi for less than $100 and thus
            this custom lighting desk came about.</p>
      </div>
      
      <div> {/* Design */}
        
      </div>

      <div> {/* Version 1 */}
        <h3>Version 1</h3>
        <p>This version was modeled using onshape and the top acrylic pannel laser cut from that model. the joystick, buttons, sliders, a Raspberry Pi and 
          and a breadboard were mounted on the underside of this pannel, the <a href="https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/MCP3004-MCP3008-Data-Sheet-DS20001295.pdf">MCP3008s</a> were placed on the breadboard and a diode was added to lower the input voltage of the neopixels
          from there circuits were wired up and connnected between the breadboard, the Raspberry Pi and other components. 
          </p>
        <p>The code was written in python using a premade MCP3008 library for the analog input and the adafruit Neopixel library to control the status LEDs. 
          Input code was abstracted from the Output and control code to make the code more modular to output to midi or other protocols for control of the sound desk or other things.
          Two artnet librarys were use one to trasmit data over the local network and another the recieve data to get the latest position of moving heads so as to update their current 
          position rather than a previous position making the desk more usable</p>
        <p>Improvements to make following this version is improving the reliability of pressing buttons, the moving head movement was a little jittery, noise on the analog input lines 
          caused the code to think the sliders were being changed and thus would override control of secenes within the software. 
          </p>
      </div>

      <div> {/* Version 2 (in progress)*/}

      </div>
      
    </main>
  );
}
