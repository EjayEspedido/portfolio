import { useState } from 'react';
import { ArrowUpRight, Cpu, Zap, Activity, FileText } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'FPGA & HDL', 'Embedded RTOS', 'PCB Hardware'];

  const projects = [
    {
      title: "RISC-V 32-bit (RV32I) Pipelined Core",
      category: "FPGA & HDL",
      role: "Hardware Architect",
      desc: "5-stage pipelined RISC-V core designed in Verilog HDL. Features full hazard detection, data forwarding, dynamic branch prediction, and AXI4-Lite memory interface.",
      specs: [
        { label: "Clock", val: "100 MHz" },
        { label: "Target FPGA", val: "Xilinx Artix-7" },
        { label: "HDL Language", val: "Verilog" }
      ],
      tags: ["Verilog", "RISC-V", "Vivado", "GTKWave"],
      github: "https://github.com",
      schematic: "#",
      icon: <Cpu className="w-4 h-4 text-zinc-400" />
    },
    {
      title: "Autonomous IoT Environmental Sensor Node",
      category: "Embedded RTOS",
      role: "Firmware Lead",
      desc: "Custom 4-layer STM32WB55 PCB running FreeRTOS with BLE 5.0 mesh networking. Implements sub-5µA deep-sleep power management and hardware AES-128 encryption.",
      specs: [
        { label: "MCU Core", val: "STM32WB55" },
        { label: "OS", val: "FreeRTOS" },
        { label: "Power Draw", val: "< 4.8 µA" }
      ],
      tags: ["FreeRTOS", "C++17", "BLE 5.0", "STM32"],
      github: "https://github.com",
      schematic: "#",
      icon: <Zap className="w-4 h-4 text-zinc-400" />
    },
    {
      title: "High-Speed CAN Bus Telemetry Board",
      category: "PCB Hardware",
      role: "PCB Hardware Designer",
      desc: "Designed a 4-layer custom automotive telemetry PCB with differential impedance matching for CAN FD protocol up to 5 Mbps. Includes TVS surge protection.",
      specs: [
        { label: "PCB Layers", val: "4-Layer PCB" },
        { label: "CAD Suite", val: "KiCad 8" },
        { label: "Protocol", val: "5 Mbps CAN FD" }
      ],
      tags: ["KiCad", "CAN Bus", "Hardware", "Altium"],
      github: "https://github.com",
      schematic: "#",
      icon: <Activity className="w-4 h-4 text-zinc-400" />
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative border-t border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs mono-text text-zinc-500 uppercase tracking-widest">03 / Case Studies</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              Selected <span className="font-extralight text-zinc-400">Engineering Work</span>
            </h2>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex bg-zinc-900 p-1 rounded-full border border-zinc-800 self-start md:self-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs mono-text transition-all ${
                  activeFilter === f
                    ? 'bg-zinc-100 text-zinc-950 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Cards List */}
        <div className="space-y-6">
          {filteredProjects.map((p, idx) => (
            <article 
              key={idx} 
              className="bg-card-minimal rounded-2xl p-8 space-y-6 transition-all hover:border-zinc-700"
            >
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs mono-text text-zinc-400">
                    <span className="text-zinc-500">{p.category}</span>
                    <span>•</span>
                    <span className="text-zinc-300 font-medium">{p.role}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 hover:text-white flex items-center gap-2">
                    <span>{p.title}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-3 self-start">
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs mono-text text-zinc-200 transition-colors"
                  >
                    <span>Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                  <a 
                    href={p.schematic} 
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs mono-text text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Schematic</span>
                  </a>
                </div>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed max-w-4xl">
                {p.desc}
              </p>

              {/* Specs Table */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-xs mono-text">
                {p.specs.map((s, sIdx) => (
                  <div key={sIdx} className="space-y-0.5">
                    <span className="text-zinc-500 block text-[10px] uppercase">{s.label}</span>
                    <span className="text-zinc-200 font-medium">{s.val}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="badge-tag">
                    #{tag}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
