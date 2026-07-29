export default function Skills() {
  const categories = [
    {
      label: "hardware & HDL",
      col1: ["verilog / systemverilog", "RTL pipelining", "hazard detection logic"],
      col2: ["FPGA synthesis (Vivado)", "artix-7 & cyclone target", "timing constraint setup"],
      col3: ["PCB CAD design (KiCad)", "4-layer board routing", "microcontrollers (STM32/ESP32)"]
    },
    {
      label: "systems & firmware",
      col1: ["embedded C / C++17", "bare-metal drivers", "memory-mapped registers"],
      col2: ["FreeRTOS kernel", "task queues & mutexes", "ISR & DMA controllers"],
      col3: ["bus protocols (I2C, SPI)", "CAN FD bus protocol", "Linux kernel modules"]
    },
    {
      label: "lab & tooling",
      col1: ["1 GHz logic analyzers", "digital oscilloscopes", "DMM & power supplies"],
      col2: ["git, cmake, gdb", "docker build containers", "openOCD & JTAG debug"],
      col3: ["python automation", "pySerial testing", "GTKWave & ModelSim"]
    }
  ];

  return (
    <section id="skills" className="px-6 sm:px-12 max-w-6xl mx-auto pt-8 pb-16">
      
      {/* Horizontal Divider */}
      <hr className="border-t border-zinc-200 mb-12" />

      {/* Grid Layout */}
      <div className="grid md:grid-cols-12 gap-8 text-sm leading-relaxed">
        
        {/* Section Title */}
        <div className="md:col-span-3">
          <h2 className="section-label">HARD SKILLS</h2>
        </div>

        {/* Rows */}
        <div className="md:col-span-9 space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="grid sm:grid-cols-12 gap-4">
              
              {/* Sub-label */}
              <div className="sm:col-span-4 sub-label">
                {cat.label}
              </div>

              {/* 3-Column Bullet List Grid matching screenshot */}
              <div className="sm:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-light text-zinc-700">
                <ul className="space-y-1">
                  {cat.col1.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {cat.col2.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {cat.col3.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
