import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Embedded Firmware Engineering Intern",
      company: "Silicon Systems Labs",
      location: "San Jose, CA",
      period: "Jun 2025 – Present",
      desc: "Developing bare-metal C++17 and FreeRTOS drivers for ARM Cortex-M processors. Optimizing DMA circular ring buffers and low-power sleep state transitions.",
      achievements: [
        "Implemented I2C & SPI peripheral driver abstraction layer in C++17, reducing sensor initialization overhead by 35%.",
        "Configured FreeRTOS preemptive task scheduling and queue management for multi-threaded sensor fusion pipeline.",
        "Performed signal integrity analysis using 1 GHz logic analyzers to resolve high-frequency SPI clock jitter."
      ],
      skills: ["FreeRTOS", "Embedded C++", "ARM Cortex-M", "Logic Analyzer"]
    },
    {
      role: "Undergraduate Hardware Research Assistant",
      company: "Computer Architecture Lab",
      location: "University Campus",
      period: "Sep 2024 – May 2025",
      desc: "Designed and benchmarked open-source RISC-V hardware accelerators on Xilinx Artix-7 FPGAs.",
      achievements: [
        "Synthesized 5-stage pipelined RV32I core with hazard detection unit in Verilog HDL.",
        "Benchmarked logic gate utilization and memory footprint across Xilinx Vivado synthesis runs.",
        "Co-authored technical documentation on FPGA hardware debugging workflows."
      ],
      skills: ["Verilog", "RISC-V", "Xilinx Vivado", "GTKWave"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="text-xs mono-text text-zinc-500 uppercase tracking-widest">04 / Experience</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
            Professional & <span className="font-extralight text-zinc-400">Research History</span>
          </h2>
        </div>

        {/* List */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-card-minimal rounded-2xl p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-zinc-800">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                  <div className="text-xs mono-text text-zinc-400">{exp.company}</div>
                </div>

                <div className="flex flex-col sm:items-end text-xs mono-text text-zinc-500 space-y-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {exp.desc}
              </p>

              <ul className="space-y-2 text-xs text-zinc-400 font-light">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2">
                    <span className="text-zinc-500 shrink-0">•</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="badge-tag">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
