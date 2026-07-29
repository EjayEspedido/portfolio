export default function About() {
  return (
    <section id="about" className="px-6 sm:px-12 max-w-6xl mx-auto pt-8 pb-16">
      
      {/* Horizontal Divider */}
      <hr className="border-t border-zinc-200 mb-12" />

      {/* Grid Layout */}
      <div className="grid md:grid-cols-12 gap-8 text-sm leading-relaxed">
        
        {/* Section Title */}
        <div className="md:col-span-3">
          <h2 className="section-label">ABOUT</h2>
        </div>

        {/* Rows */}
        <div className="md:col-span-9 space-y-10">
          
          {/* Row 1: background */}
          <div className="grid sm:grid-cols-12 gap-4">
            <div className="sm:col-span-4 sub-label">background</div>
            <div className="sm:col-span-8 text-zinc-700 font-light space-y-3">
              <p>
                Computer engineering experience across embedded firmware development, digital logic synthesis, and hardware prototyping. Deep technical grounding in ARM Cortex-M microcontrollers, FreeRTOS, Verilog HDL, and custom 4-layer PCB design.
              </p>
            </div>
          </div>

          {/* Row 2: motivators */}
          <div className="grid sm:grid-cols-12 gap-4">
            <div className="sm:col-span-4 sub-label">motivators</div>
            <div className="sm:col-span-8 text-zinc-700 font-light space-y-3">
              <p>
                Tackling complex low-level bottlenecks, building deterministic real-time systems, and optimizing energy footprint (&lt; 5 µA idle states). Collaborating with software teams, hardware architects, and lab technicians to bring physical products to life.
              </p>
            </div>
          </div>

          {/* Row 3: philosophy */}
          <div className="grid sm:grid-cols-12 gap-4">
            <div className="sm:col-span-4 sub-label">philosophy</div>
            <div className="sm:col-span-8 text-zinc-700 font-light space-y-3">
              <p>
                Software and hardware are deeply interdependent. Writing firmware requires understanding register maps and clock timing; designing digital logic requires understanding compiler outputs. Measure twice, simulate with GTKWave/ModelSim before programming physical flash.
              </p>
            </div>
          </div>

          {/* Row 4: education */}
          <div className="grid sm:grid-cols-12 gap-4">
            <div className="sm:col-span-4 sub-label">education</div>
            <div className="sm:col-span-8 text-zinc-700 font-light">
              <p>B.S. Computer Engineering</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
