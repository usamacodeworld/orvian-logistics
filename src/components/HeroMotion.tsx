export function HeroMotionBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <span className="hero-orb hero-orb-a" />
      <span className="hero-orb hero-orb-mobile" />

      {/* Desktop corridor map — right bias */}
      <svg
        className="absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          className="hero-route"
          d="M620 700 C 760 620, 860 760, 980 640 S 1160 480, 1280 560 S 1420 680, 1500 650"
          stroke="rgba(203,128,45,0.4)"
          strokeWidth="1.4"
        />
        <path
          className="hero-route hero-route-delay"
          d="M640 260 C 780 320, 880 180, 1020 250 S 1220 360, 1420 280"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1.1"
        />
        <g className="hero-hub" transform="translate(980 640)">
          <circle r="10" fill="rgba(203,128,45,0.15)" stroke="#cb802d" strokeWidth="1" />
          <circle r="3" fill="#cb802d" />
        </g>
        <g className="hero-hub hero-hub-delay" transform="translate(1280 560)">
          <circle r="10" fill="rgba(203,128,45,0.12)" stroke="#cb802d" strokeWidth="1" />
          <circle r="3" fill="#cb802d" />
        </g>
        <g className="hero-truck-ride">
          <animateMotion
            dur="16s"
            repeatCount="indefinite"
            rotate="auto"
            path="M620 700 C 760 620, 860 760, 980 640 S 1160 480, 1280 560 S 1420 680, 1500 650"
          />
          <TruckGlyph />
        </g>
        <g>
          <animateMotion
            dur="20s"
            repeatCount="indefinite"
            begin="3s"
            path="M640 260 C 780 320, 880 180, 1020 250 S 1220 360, 1420 280"
          />
          <rect
            x="-5"
            y="-5"
            width="10"
            height="10"
            rx="1"
            fill="rgba(255,255,255,0.8)"
            stroke="#cb802d"
            strokeWidth="1"
          />
        </g>
      </svg>

      {/* Mobile corridor — lower band only, keeps clear of headline */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[42%] w-full lg:hidden"
        viewBox="0 0 390 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="hero-route"
          d="M-20 140 C 70 100, 120 170, 190 120 S 290 70, 320 110 S 380 150, 420 130"
          stroke="rgba(203,128,45,0.45)"
          strokeWidth="1.5"
        />
        <path
          className="hero-route hero-route-delay"
          d="M-10 60 C 80 90, 140 40, 210 70 S 300 110, 400 75"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.1"
        />
        <g className="hero-hub" transform="translate(190 120)">
          <circle r="8" fill="rgba(203,128,45,0.18)" stroke="#cb802d" strokeWidth="1" />
          <circle r="2.5" fill="#cb802d" />
        </g>
        <g className="hero-truck-ride">
          <animateMotion
            dur="12s"
            repeatCount="indefinite"
            rotate="auto"
            path="M-20 140 C 70 100, 120 170, 190 120 S 290 70, 320 110 S 380 150, 420 130"
          />
          <TruckGlyph scale={1.05} />
        </g>
        <g>
          <animateMotion
            dur="15s"
            repeatCount="indefinite"
            begin="2s"
            path="M-10 60 C 80 90, 140 40, 210 70 S 300 110, 400 75"
          />
          <rect
            x="-4"
            y="-4"
            width="8"
            height="8"
            rx="1"
            fill="rgba(255,255,255,0.85)"
            stroke="#cb802d"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
}

export function HeroMotionDesktopPanels() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[min(420px,42%)] lg:block"
      aria-hidden="true"
    >
      <div className="hero-panel hero-panel-temp">
        <div className="hero-panel-label">
          <span className="hero-chip-dot" />
          Cold chain
        </div>
        <div className="hero-temp-row">
          <ThermometerIcon />
          <span className="hero-temp-value">
            <span className="hero-temp-num">2.0</span>
            <span className="hero-temp-unit">°C</span>
          </span>
        </div>
        <div className="hero-temp-bar">
          <span className="hero-temp-fill" />
        </div>
        <p className="hero-panel-meta">Dual-zone · Zone A stable</p>
      </div>

      <div className="hero-panel hero-panel-fleet">
        <div className="hero-panel-label">
          <span className="hero-chip-dot" />
          Fleet live
        </div>
        <ul className="hero-fleet-list">
          <li>
            <TruckIcon />
            <span>V-Class Reefer</span>
            <em>On route</em>
          </li>
          <li>
            <TruckIcon />
            <span>Artic Cold Unit</span>
            <em>Loading</em>
          </li>
          <li>
            <PackageIcon />
            <span>HV Secure</span>
            <em>Signed</em>
          </li>
        </ul>
      </div>

      <div className="hero-panel hero-panel-dispatch">
        <div className="hero-panel-label">
          <span className="hero-chip-dot" />
          Dispatch
        </div>
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>LHR → Mayfair · Pharma 2–8°C</span>
            <span>Felixstowe → M25 · Fine foods</span>
            <span>Heathrow PT · High-value secure</span>
            <span>LHR → Mayfair · Pharma 2–8°C</span>
            <span>Felixstowe → M25 · Fine foods</span>
            <span>Heathrow PT · High-value secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroMotionMobileStrip() {
  return (
    <div className="hero-mobile-strip hero-anim hero-anim-4 lg:hidden" aria-hidden="true">
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <span className="hero-chip-dot" />
          Cold chain
        </div>
        <div className="hero-mobile-temp">
          <ThermometerIcon />
          <span>
            2.0<span>°C</span>
          </span>
        </div>
        <div className="hero-temp-bar">
          <span className="hero-temp-fill" />
        </div>
      </div>

      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <span className="hero-chip-dot" />
          Fleet live
        </div>
        <div className="hero-mobile-fleet">
          <span>
            <TruckIcon /> Reefer
          </span>
          <em>On route</em>
        </div>
        <div className="hero-mobile-fleet">
          <span>
            <PackageIcon /> Secure
          </span>
          <em className="is-ok">Signed</em>
        </div>
      </div>

      <div className="hero-mobile-dispatch">
        <div className="hero-panel-label">
          <span className="hero-chip-dot" />
          Live dispatch
        </div>
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>LHR → Mayfair · Pharma 2–8°C</span>
            <span>Felixstowe → M25 · Fine foods</span>
            <span>Heathrow PT · High-value secure</span>
            <span>LHR → Mayfair · Pharma 2–8°C</span>
            <span>Felixstowe → M25 · Fine foods</span>
            <span>Heathrow PT · High-value secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TruckGlyph({ scale = 1.15 }: { scale?: number }) {
  return (
    <g transform={`translate(-18 -10) scale(${scale})`}>
      <rect x="0" y="4" width="22" height="12" rx="1.5" fill="#cb802d" />
      <rect x="22" y="7" width="10" height="9" rx="1" fill="#e8a04a" />
      <circle cx="7" cy="17" r="2.4" fill="#231f20" stroke="#f7f4f0" strokeWidth="0.8" />
      <circle cx="26" cy="17" r="2.4" fill="#231f20" stroke="#f7f4f0" strokeWidth="0.8" />
      <rect x="3" y="6" width="6" height="5" rx="0.5" fill="rgba(35,31,32,0.35)" />
    </g>
  );
}

function ThermometerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 14.76V5a2 2 0 1 0-4 0v9.76a4 4 0 1 0 4 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="17" r="1.5" fill="#cb802d" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M1 7h13v9H1V7Zm13 3h5l3 3v3h-8v-6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="18" r="1.6" fill="currentColor" />
      <circle cx="17" cy="18" r="1.6" fill="currentColor" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 8 12 3 3 8l9 5 9-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M3 8v8l9 5 9-5V8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 13v8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
