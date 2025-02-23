import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <section className="bg-red-600 text-center">
      <div className="grid grid-cols-3 gap-2">
        {/* Counter for Years of Service */}
        <div className="pb-5">
          <div className="pt-6 flex flex-col items-center">
            <div className="w-16 h-16 md:w-28 md:h-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 48 48"
                className=""
              >
                <path
                  d="M40.973 26.083H39.78a8.026 8.026 0 0 0-7.017-7.456 6.474 6.474 0 0 0 3.144-5.543c0-3.571-2.905-6.477-6.477-6.477s-6.478 2.906-6.478 6.477a6.471 6.471 0 0 0 3.145 5.543 8.025 8.025 0 0 0-7.017 7.456H9.75V23.25c0-3.851 3.02-7.002 6.816-7.228a1.978 1.978 0 0 0 1.914 1.499h1.229c1.092 0 1.979-.888 1.979-1.979s-.888-1.979-1.979-1.979H18.48c-.911 0-1.671.621-1.901 1.459-4.352.222-7.828 3.822-7.828 8.229v2.833H6.973a.5.5 0 0 0-.5.5v5.167a.5.5 0 0 0 .5.5h2.833v8.917a.5.5 0 0 0 .5.5h27.333a.5.5 0 0 0 .5-.5V32.25h2.834a.5.5 0 0 0 .5-.5v-5.167a.5.5 0 0 0-.5-.5zm-22.494-11.52h1.229a.98.98 0 0 1 0 1.958h-1.229a.98.98 0 0 1 0-1.958zm5.474-1.48a5.483 5.483 0 0 1 5.478-5.477c3.02 0 5.477 2.457 5.477 5.477s-2.457 5.477-5.477 5.477a5.482 5.482 0 0 1-5.478-5.477zm3.125 6.478h4.704a7.032 7.032 0 0 1 7.006 6.522H20.073c.257-3.64 3.301-6.522 7.005-6.522zm10.061 21.106H10.806V32.25h26.333v8.417zm3.334-9.417h-33v-4.167h33v4.167z"
                  style={{
                    fill: "#fff",
                  }}
                />
              </svg>
            </div>
          </div>
          <CountUp
            start={0}
            end={40}
            duration={4}
            separator="+"
            className="text-white text-lg md:text-8xl"
          />
          <span className="text-white text-lg md:text-8xl">+</span>
          <div className="text-white text-sm md:text-2xl font-semibold mt-2">
            Faculties
          </div>
        </div>

        {/* Counter for Faculty Members */}
        <div className="pb-5">
          <div className="pt-6 flex flex-col items-center">
            <div className="w-16 h-16 md:w-28 md:h-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                fill="#fff"
                viewBox="0 0 48 48"
              >
                <g id="SVGRepo_iconCarrier">
                  <style>{".st0{fill:#fff}"}</style>
                  <path
                    d="M14.302 41.5h19.385a2.816 2.816 0 0 0 2.813-2.813V34.37a9.206 9.206 0 0 0-8.38-9.197v-3.964a7.796 7.796 0 0 0 3.71-6.628V11.5h.67a.5.5 0 0 0 .5-.5V7.585h2.5v2.625a.5.5 0 0 0 1 0V7.085a.5.5 0 0 0-.5-.5H12a.5.5 0 0 0 0 1h3V11a.5.5 0 0 0 .5.5h.67v3.08a7.809 7.809 0 0 0 3.7 6.629v3.965a9.21 9.21 0 0 0-8.38 9.197v4.317a2.815 2.815 0 0 0 2.812 2.812zm11.43-16.38H20.87v-3.377c.98.432 2.045.667 3.13.667a7.722 7.722 0 0 0 3.12-.667v3.377h-1.388zm-.634 1L24 30.692l-1.098-4.572h2.196zM16 7.585h16V10.5H16V7.585zm1.17 6.995V11.5h13.66v3.08a6.807 6.807 0 0 1-3.46 5.927c-2.045 1.185-4.712 1.181-6.753-.002a6.814 6.814 0 0 1-3.447-5.925zm-4.68 19.79c0-4.44 3.47-8.06 7.921-8.242.107-.009.221-.009.329-.008h1.134l1.64 6.83a.5.5 0 0 0 .972 0l1.64-6.83h1.124c.111.002.223 0 .35.009a8.22 8.22 0 0 1 7.9 8.241v4.317c0 1-.813 1.813-1.813 1.813H14.302c-1 0-1.813-.813-1.813-1.813V34.37z"
                    className="st0"
                  />
                  <path
                    d="M16.083 33.81h4.287a.5.5 0 0 0 0-1h-4.287a.5.5 0 0 0 0 1z"
                    className="st0"
                  />
                </g>
              </svg>
            </div>
          </div>
          <CountUp
            start={0}
            end={300}
            duration={4}
            separator="+"
            className="text-white text-lg md:text-8xl"
          />
          <span className="text-white text-lg md:text-8xl">+</span>
          <div className="text-white text-sm md:text-2xl font-semibold mt-2">
            Students
          </div>
        </div>

        {/* Counter for Students */}
        <div className="pb-5">
          <div className="pt-4 flex flex-col items-center">
            <div className="w-16 h-16 mb-1 md:w-32 md:h-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 48 48"
                className="relative [left:0.5rem]"
              >
                <path
                  d="M24.049 10.108c-.032-.013-.064-.018-.098-.024a8.861 8.861 0 0 0-7.064 1.38.44.44 0 0 0-.15.109 8.754 8.754 0 0 0-2.56 2.936c-2.219 4.144-.777 9.276 3.187 11.696l-.689 1.287c-.286-.17-.572-.345-.826-.531-.51-.398-1.271-.333-1.737.166-.25.272-.373.64-.337 1.008.036.372.229.712.53.933a12.763 12.763 0 0 0 4.594 2.128V35.5H17.72c-.656 0-1.189.539-1.189 1.2v1.164a3.183 3.183 0 0 0-3.005 3.169.5.5 0 0 0 .5.5h12.75a.5.5 0 0 0 .5-.5 3.182 3.182 0 0 0-2.995-3.168V36.7c0-.662-.538-1.2-1.2-1.2H21.9v-3.935l.081.002c4.025 0 7.806-1.841 10.207-5 2.321-3.056 3.19-6.93 2.384-10.63a12.891 12.891 0 0 0-6.516-8.633 12.801 12.801 0 0 0-1.698-.761 1.314 1.314 0 0 0-1.723.961c-.137.642.216 1.271.854 1.511.291.105.587.234.883.373l-.693 1.294a8.644 8.644 0 0 0-1.63-.574zm7.85 5.89a10.211 10.211 0 0 1-1.185 8.093c-2.737 4.439-8.506 6.079-13.159 3.874l.693-1.293a8.767 8.767 0 0 0 3.699.836 8.885 8.885 0 0 0 3.608-.778.497.497 0 0 0 .188-.094 8.762 8.762 0 0 0 4.004-3.788 8.76 8.76 0 0 0 1.025-3.749.463.463 0 0 0 .005-.118 8.83 8.83 0 0 0-4.217-7.829l.691-1.29a10.17 10.17 0 0 1 4.648 6.136zm-2.108 2.678c-1.888.739-2.75 1.481-2.537 2.207.021.137-.333.533-.799.86-1.899-1.056-3.561-2.234-3.865-2.738 1.101-.901.963-3.236.724-5.563-.103-1.011.435-1.899.73-2.303.55.152 1.093.356 1.616.637a7.836 7.836 0 0 1 4.131 6.9zm-7.815-7.827c.338 0 .677.026 1.015.071-.368.601-.783 1.539-.671 2.628.128 1.243.427 4.153-.407 4.716a.794.794 0 0 0-.364.707c.054 1.113 2.961 2.855 4.69 3.794a.49.49 0 0 0 .495-.01c.409-.245 1.699-1.102 1.501-2.069.142-.203.75-.564 1.47-.889a7.777 7.777 0 0 1-.838 2.579 7.771 7.771 0 0 1-3.086 3.13c-.302-.82-1.221-2.159-3.984-3.583-3.323-1.713-5.904-.645-6.961-.028a7.868 7.868 0 0 1-.643-4.134c.698.19 1.932.472 3.165.472.85 0 1.693-.135 2.346-.528.661-.399 1.062-1.004 1.19-1.799.416-2.56-1.521-3.73-2.533-4.159a7.864 7.864 0 0 1 3.615-.898zm-4.725 1.585c.411.087 1.512.429 2.183 1.273.443.558.603 1.244.474 2.038-.081.499-.316.859-.72 1.103-1.195.723-3.577.275-4.813-.072a7.78 7.78 0 0 1 .684-1.795 7.772 7.772 0 0 1 2.192-2.547zm-1.947 10.347c.842-.494 3.106-1.479 6.033.03 2.71 1.396 3.373 2.615 3.537 3.13a7.811 7.811 0 0 1-6.608-.36 7.761 7.761 0 0 1-2.962-2.8zm10.914 17.753H14.583a2.192 2.192 0 0 1 2.13-1.688h.298c.007 0 .013.004.019.004h6.75c.007 0 .013-.004.019-.004h.288c1.035 0 1.904.722 2.131 1.688zM23.28 36.7v1.146h-5.75V36.7c0-.112.083-.2.189-.2h5.361c.108 0 .2.092.2.2zm-3.38-1.2v-4.102c.329.055.662.094 1 .118V35.5h-1zm5.716-27.798.005-.026a.304.304 0 0 1 .149-.172.32.32 0 0 1 .249-.02c.543.198 1.055.427 1.564.701a11.893 11.893 0 0 1 6.012 7.964c.744 3.414-.06 6.99-2.204 9.812-2.32 3.055-6.046 4.782-9.972 4.593-.007 0-.012-.004-.019-.004l-.01.002a9.95 9.95 0 0 1-1.888-.238 11.757 11.757 0 0 1-4.606-2.053.317.317 0 0 1-.126-.224.3.3 0 0 1 .074-.231.327.327 0 0 1 .235-.112.25.25 0 0 1 .164.063c.364.268.752.518 1.149.742.062.035.127.062.19.096.017.012.028.029.047.039.019.01.041.008.06.015 5.175 2.737 11.785.978 14.875-4.032a11.21 11.21 0 0 0 1.299-8.878 11.19 11.19 0 0 0-7.029-7.662c-.166-.064-.257-.218-.218-.375z"
                  style={{
                    fill: "#fff",
                  }}
                />
              </svg>
            </div>
          </div>
          <CountUp
            start={0}
            end={103}
            duration={4}
            separator="+"
            className="text-white text-lg md:text-8xl"
          />
          <span className="text-white text-lg md:text-8xl">+</span>
          <div className="text-white text-sm md:text-2xl font-semibold mt-2">
            Global Department Rank
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
