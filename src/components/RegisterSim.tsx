import { useState } from 'react';
import { RefreshCw, Cpu } from 'lucide-react';

export default function RegisterSim() {
  const [bits, setBits] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);

  const toggleBit = (index: number) => {
    const newBits = [...bits];
    newBits[index] = newBits[index] === 1 ? 0 : 1;
    setBits(newBits);
  };

  const resetRegister = () => setBits([0, 0, 0, 0, 0, 0, 0, 0]);
  const fillRegister = () => setBits([1, 1, 1, 1, 1, 1, 1, 1]);

  const binStr = bits.slice().reverse().join('');
  const decVal = parseInt(binStr, 2);
  const hexVal = '0x' + decVal.toString(16).toUpperCase().padStart(2, '0');

  return (
    <section className="py-20 relative border-t border-zinc-800/80 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        
        <div className="bg-card-minimal p-8 rounded-2xl border border-zinc-800 space-y-6 text-center">
          
          <div className="space-y-2">
            <div className="text-xs mono-text text-zinc-500 uppercase tracking-widest">05 / Interactive Component</div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">8-Bit GPIO Register Simulator</h3>
            <p className="text-xs text-zinc-400 font-light max-w-md mx-auto">
              Toggle bit switches below to inspect real-time binary, hexadecimal, and decimal register values.
            </p>
          </div>

          {/* Bits Array */}
          <div className="flex justify-center flex-wrap gap-2.5 py-4">
            {bits.map((_, idx) => {
              const bitIndex = 7 - idx;
              const isActive = bits[bitIndex] === 1;

              return (
                <button
                  key={bitIndex}
                  onClick={() => toggleBit(bitIndex)}
                  className={`w-12 h-16 sm:w-14 sm:h-20 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    isActive
                      ? 'bg-zinc-100 border-white text-zinc-950 shadow-xl font-bold scale-105'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700'
                  }`}
                >
                  <span className={`text-[10px] mono-text ${isActive ? 'text-zinc-700' : 'text-zinc-500'}`}>b{bitIndex}</span>
                  <span className="text-xl mono-text font-bold">{bits[bitIndex]}</span>
                </button>
              );
            })}
          </div>

          {/* Readouts */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800 text-xs mono-text max-w-2xl mx-auto">
            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 space-y-0.5">
              <span className="text-zinc-500 block text-[10px]">BINARY</span>
              <span className="text-zinc-100 font-bold tracking-wider">{binStr}</span>
            </div>
            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 space-y-0.5">
              <span className="text-zinc-500 block text-[10px]">HEXADECIMAL</span>
              <span className="text-zinc-100 font-bold">{hexVal}</span>
            </div>
            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 space-y-0.5">
              <span className="text-zinc-500 block text-[10px]">DECIMAL</span>
              <span className="text-zinc-100 font-bold">{decVal}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={resetRegister}
              className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-xs mono-text flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear (0x00)</span>
            </button>
            <button
              onClick={fillRegister}
              className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-xs mono-text flex items-center gap-1.5 transition-colors"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Set All (0xFF)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
