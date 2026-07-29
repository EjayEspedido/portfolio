import { Cpu } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="pt-16 pb-12 px-6 sm:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Big Statement Headline (Matching seanoshea.me layout) */}
        <div className="md:col-span-8 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 leading-[1.15] tracking-tight">
            Computer engineer, embedded developer, FPGA designer, and PCB architect{' '}
            <span className="font-light text-zinc-500">
              with expertise in RTOS kernels, low-level C/C++, Verilog, and custom hardware.
            </span>
          </h1>
        </div>

        {/* Right Column: Monochrome Hardware Visual (Matching screenshot right image) */}
        <div className="md:col-span-4 flex justify-end">
          <div className="w-full h-56 sm:h-64 bg-zinc-100 border border-zinc-200 rounded-lg p-6 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            
            {/* Minimalist Microprocessor Graphic */}
            <div className="w-32 h-32 bg-white border border-zinc-300 rounded shadow-sm flex flex-col items-center justify-center p-4 relative">
              <Cpu className="w-12 h-12 text-zinc-700 group-hover:scale-105 transition-transform" />
              <span className="text-[10px] font-mono-code text-zinc-600 mt-2 font-bold tracking-wider">RV32I-CORE</span>
            </div>

            <div className="text-[11px] font-mono-code text-zinc-500 pt-2 border-t border-zinc-200 w-full">
              System Clock: 100 MHz • FPGA Artix-7
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
