import type { ReactNode } from "react";

export type MotionTheme = "home" | "about" | "services" | "why" | "contact";

type Props = { theme?: MotionTheme };

export function HeroMotionBackground({ theme = "home" }: Props) {
  const routes = ROUTES[theme];

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <span className="hero-orb hero-orb-a" />
      <span className="hero-orb hero-orb-mobile" />

      {/* Desktop: keep motion on the right half only */}
      <svg
        className="absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <clipPath id="hero-right-clip">
            <rect x="640" y="0" width="800" height="900" />
          </clipPath>
        </defs>
        <g clipPath="url(#hero-right-clip)">
          <path
            className="hero-route"
            d={routes.desktop.primary}
            stroke="rgba(203,128,45,0.4)"
            strokeWidth="1.4"
          />
          <path
            className="hero-route hero-route-delay"
            d={routes.desktop.secondary}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.1"
          />
          {routes.desktop.hubs.map((hub, i) => (
            <g
              key={i}
              className={i === 1 ? "hero-hub hero-hub-delay" : "hero-hub"}
              transform={`translate(${hub.x} ${hub.y})`}
            >
              <circle r="10" fill="rgba(203,128,45,0.15)" stroke="#cb802d" strokeWidth="1" />
              <circle r="3" fill="#cb802d" />
            </g>
          ))}
          <g className="hero-truck-ride">
            <animateMotion
              dur={routes.desktop.dur}
              repeatCount="indefinite"
              rotate="auto"
              path={routes.desktop.primary}
            />
            {routes.desktop.rider}
          </g>
          <g>
            <animateMotion
              dur="18s"
              repeatCount="indefinite"
              begin="2.5s"
              path={routes.desktop.secondary}
            />
            {routes.desktop.secondaryRider}
          </g>
        </g>
      </svg>

      {/* Mobile: lower band only */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[38%] w-full lg:hidden"
        viewBox="0 0 390 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="hero-route"
          d={routes.mobile.primary}
          stroke="rgba(203,128,45,0.45)"
          strokeWidth="1.5"
        />
        <path
          className="hero-route hero-route-delay"
          d={routes.mobile.secondary}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.1"
        />
        <g className="hero-truck-ride">
          <animateMotion
            dur="11s"
            repeatCount="indefinite"
            rotate="auto"
            path={routes.mobile.primary}
          />
          {routes.mobile.rider}
        </g>
      </svg>
    </div>
  );
}

export function HeroMotionDesktopPanels({ theme = "home" }: Props) {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[min(420px,42%)] lg:block"
      aria-hidden="true"
    >
      {PANELS[theme]}
    </div>
  );
}

export function HeroMotionMobileStrip({ theme = "home" }: Props) {
  return (
    <div className="hero-mobile-strip hero-anim hero-anim-4 lg:hidden" aria-hidden="true">
      {MOBILE_STRIPS[theme]}
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
    </g>
  );
}

function PackageGlyph() {
  return (
    <g transform="translate(-6 -6)">
      <rect width="12" height="12" rx="1" fill="rgba(255,255,255,0.85)" stroke="#cb802d" strokeWidth="1" />
      <path d="M1 4h10M6 4v8" stroke="#cb802d" strokeWidth="0.8" />
    </g>
  );
}

function ShieldGlyph() {
  return (
    <g transform="translate(-8 -9)">
      <path
        d="M8 1 L15 4 V9 C15 13 11 16 8 17 C5 16 1 13 1 9 V4 Z"
        fill="#cb802d"
        opacity="0.95"
      />
    </g>
  );
}

function TempGlyph() {
  return (
    <g transform="translate(-4 -10)">
      <rect x="2.5" y="0" width="3" height="12" rx="1.5" fill="#fff" />
      <circle cx="4" cy="14" r="4" fill="#cb802d" />
    </g>
  );
}

function Dot() {
  return <span className="hero-chip-dot" />;
}

function PanelShell({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <div className={`hero-panel ${className}`}>
      <div className="hero-panel-label">
        <Dot />
        {label}
      </div>
      {children}
    </div>
  );
}

const ROUTES: Record<
  MotionTheme,
  {
    desktop: {
      primary: string;
      secondary: string;
      dur: string;
      hubs: { x: number; y: number }[];
      rider: ReactNode;
      secondaryRider: ReactNode;
    };
    mobile: {
      primary: string;
      secondary: string;
      rider: ReactNode;
    };
  }
> = {
  home: {
    desktop: {
      primary:
        "M620 700 C 760 620, 860 760, 980 640 S 1160 480, 1280 560 S 1420 680, 1500 650",
      secondary:
        "M640 260 C 780 320, 880 180, 1020 250 S 1220 360, 1420 280",
      dur: "16s",
      hubs: [
        { x: 980, y: 640 },
        { x: 1280, y: 560 },
      ],
      rider: <TruckGlyph />,
      secondaryRider: <PackageGlyph />,
    },
    mobile: {
      primary:
        "M-20 130 C 70 95, 120 160, 190 115 S 290 70, 320 105 S 380 145, 420 125",
      secondary: "M-10 55 C 80 85, 140 35, 210 65 S 300 100, 400 70",
      rider: <TruckGlyph scale={1} />,
    },
  },
  about: {
    desktop: {
      primary:
        "M700 200 C 820 280, 900 420, 980 500 S 1120 620, 1280 580 S 1420 520, 1500 540",
      secondary:
        "M660 720 C 820 640, 940 700, 1080 620 S 1240 520, 1400 560",
      dur: "18s",
      hubs: [
        { x: 980, y: 500 },
        { x: 1280, y: 580 },
      ],
      rider: <ShieldGlyph />,
      secondaryRider: <TempGlyph />,
    },
    mobile: {
      primary:
        "M-20 150 C 90 110, 150 170, 220 130 S 300 90, 400 120",
      secondary: "M-10 50 C 100 80, 180 40, 280 70 S 360 95, 410 60",
      rider: <ShieldGlyph />,
    },
  },
  services: {
    desktop: {
      primary:
        "M650 550 C 780 480, 900 600, 1040 520 S 1200 420, 1360 480 S 1480 560, 1520 540",
      secondary:
        "M680 300 C 840 360, 960 240, 1120 300 S 1280 380, 1460 320",
      dur: "14s",
      hubs: [
        { x: 1040, y: 520 },
        { x: 1360, y: 480 },
      ],
      rider: <PackageGlyph />,
      secondaryRider: <TruckGlyph scale={1} />,
    },
    mobile: {
      primary:
        "M-20 120 C 80 160, 140 90, 210 130 S 300 170, 410 120",
      secondary: "M-10 45 C 90 70, 160 30, 250 55 S 340 85, 410 50",
      rider: <PackageGlyph />,
    },
  },
  why: {
    desktop: {
      primary:
        "M640 400 C 800 320, 920 480, 1080 400 S 1240 300, 1400 360",
      secondary:
        "M670 680 C 830 600, 980 720, 1140 640 S 1300 560, 1480 600",
      dur: "17s",
      hubs: [
        { x: 1080, y: 400 },
        { x: 1140, y: 640 },
      ],
      rider: <TempGlyph />,
      secondaryRider: <ShieldGlyph />,
    },
    mobile: {
      primary:
        "M-20 140 C 100 100, 160 170, 240 125 S 320 80, 410 110",
      secondary: "M-10 40 C 110 75, 190 25, 280 55 S 360 90, 410 45",
      rider: <TempGlyph />,
    },
  },
  contact: {
    desktop: {
      primary:
        "M700 500 C 860 440, 980 580, 1140 500 S 1300 400, 1480 460",
      secondary:
        "M660 250 C 820 310, 960 210, 1120 270 S 1300 330, 1480 280",
      dur: "15s",
      hubs: [
        { x: 1140, y: 500 },
        { x: 1120, y: 270 },
      ],
      rider: <TruckGlyph scale={1} />,
      secondaryRider: <PackageGlyph />,
    },
    mobile: {
      primary:
        "M-20 125 C 85 165, 150 95, 230 135 S 320 165, 410 115",
      secondary: "M-10 50 C 95 30, 170 80, 260 45 S 350 25, 410 55",
      rider: <TruckGlyph scale={1} />,
    },
  },
};

const PANELS: Record<MotionTheme, ReactNode> = {
  home: (
    <>
      <PanelShell label="Cold chain" className="hero-panel-temp">
        <div className="hero-temp-row">
          <span className="hero-temp-value">
            <span className="hero-temp-num">2.0</span>
            <span className="hero-temp-unit">°C</span>
          </span>
        </div>
        <div className="hero-temp-bar">
          <span className="hero-temp-fill" />
        </div>
        <p className="hero-panel-meta">Dual-zone · Zone A stable</p>
      </PanelShell>
      <PanelShell label="Fleet live" className="hero-panel-fleet">
        <ul className="hero-fleet-list">
          <li>
            <span>V-Class Reefer</span>
            <em>On route</em>
          </li>
          <li>
            <span>Artic Cold Unit</span>
            <em>Loading</em>
          </li>
          <li>
            <span>HV Secure</span>
            <em>Signed</em>
          </li>
        </ul>
      </PanelShell>
      <PanelShell label="Dispatch" className="hero-panel-dispatch">
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>LHR → Mayfair · Pharma 2-8°C</span>
            <span>Felixstowe → M25 · Fine foods</span>
            <span>Heathrow PT · High-value secure</span>
            <span>LHR → Mayfair · Pharma 2-8°C</span>
            <span>Felixstowe → M25 · Fine foods</span>
            <span>Heathrow PT · High-value secure</span>
          </div>
        </div>
      </PanelShell>
    </>
  ),
  about: (
    <>
      <PanelShell label="Since day one" className="hero-panel-temp">
        <p className="mt-3 font-display text-2xl text-white">Precision</p>
        <p className="hero-panel-meta">Built for cargo that cannot afford variance</p>
      </PanelShell>
      <PanelShell label="Assurance" className="hero-panel-fleet">
        <ul className="hero-fleet-list">
          <li>
            <span>Chain of custody</span>
            <em>Active</em>
          </li>
          <li>
            <span>Climate sensors</span>
            <em>Live</em>
          </li>
          <li>
            <span>Compliance log</span>
            <em>Sealed</em>
          </li>
        </ul>
      </PanelShell>
      <PanelShell label="Coverage" className="hero-panel-dispatch">
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>UK city centres</span>
            <span>International corridors</span>
            <span>Private terminals</span>
            <span>UK city centres</span>
            <span>International corridors</span>
            <span>Private terminals</span>
          </div>
        </div>
      </PanelShell>
    </>
  ),
  services: (
    <>
      <PanelShell label="Capability" className="hero-panel-temp">
        <p className="mt-3 font-display text-2xl text-white">6 lines</p>
        <p className="hero-panel-meta">Cold chain to high-value secure freight</p>
      </PanelShell>
      <PanelShell label="Active services" className="hero-panel-fleet">
        <ul className="hero-fleet-list">
          <li>
            <span>Temp-controlled</span>
            <em>Ready</em>
          </li>
          <li>
            <span>Telemetry</span>
            <em>Online</em>
          </li>
          <li>
            <span>Dedicated freight</span>
            <em>Open</em>
          </li>
        </ul>
      </PanelShell>
      <PanelShell label="Request types" className="hero-panel-dispatch">
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>Pharma reefer</span>
            <span>Fine foods dual-zone</span>
            <span>Luxury secure</span>
            <span>Airport transfer freight</span>
            <span>Pharma reefer</span>
            <span>Fine foods dual-zone</span>
            <span>Luxury secure</span>
            <span>Airport transfer freight</span>
          </div>
        </div>
      </PanelShell>
    </>
  ),
  why: (
    <>
      <PanelShell label="Standard" className="hero-panel-temp">
        <p className="mt-3 font-display text-xl text-white">Discretion</p>
        <p className="hero-panel-meta mt-2 font-display text-xl text-white">Precision</p>
        <p className="hero-panel-meta mt-2 font-display text-xl text-white">Elevation</p>
      </PanelShell>
      <PanelShell label="Client terms" className="hero-panel-fleet">
        <ul className="hero-fleet-list">
          <li>
            <span>24/7 reach</span>
            <em>Always</em>
          </li>
          <li>
            <span>One contact</span>
            <em>1:1</em>
          </li>
          <li>
            <span>Bespoke plan</span>
            <em>Default</em>
          </li>
        </ul>
      </PanelShell>
      <PanelShell label="Why Orvian" className="hero-panel-dispatch">
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>Absolute discretion</span>
            <span>Cold-chain integrity</span>
            <span>Dedicated ownership</span>
            <span>Absolute discretion</span>
            <span>Cold-chain integrity</span>
            <span>Dedicated ownership</span>
          </div>
        </div>
      </PanelShell>
    </>
  ),
  contact: (
    <>
      <PanelShell label="Available now" className="hero-panel-temp">
        <p className="mt-3 font-display text-2xl text-white">24/7</p>
        <p className="hero-panel-meta">WhatsApp · Telephone · Email</p>
      </PanelShell>
      <PanelShell label="Direct lines" className="hero-panel-fleet">
        <ul className="hero-fleet-list">
          <li>
            <span>WhatsApp</span>
            <em>Preferred</em>
          </li>
          <li>
            <span>Call desk</span>
            <em>Open</em>
          </li>
          <li>
            <span>Email brief</span>
            <em>Ready</em>
          </li>
        </ul>
      </PanelShell>
      <PanelShell label="Response" className="hero-panel-dispatch">
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>First conversation before booking</span>
            <span>London base · UK coverage</span>
            <span>No queue to join</span>
            <span>First conversation before booking</span>
            <span>London base · UK coverage</span>
            <span>No queue to join</span>
          </div>
        </div>
      </PanelShell>
    </>
  ),
};

const MOBILE_STRIPS: Record<MotionTheme, ReactNode> = {
  home: (
    <>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Cold chain
        </div>
        <div className="hero-mobile-temp">
          <span>
            2.0<span>°C</span>
          </span>
        </div>
      </div>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Fleet live
        </div>
        <div className="hero-mobile-fleet">
          <span>Reefer</span>
          <em>On route</em>
        </div>
      </div>
      <div className="hero-mobile-dispatch">
        <div className="hero-panel-label">
          <Dot /> Live dispatch
        </div>
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>LHR → Mayfair · Pharma 2-8°C</span>
            <span>Felixstowe → M25 · Fine foods</span>
            <span>LHR → Mayfair · Pharma 2-8°C</span>
            <span>Felixstowe → M25 · Fine foods</span>
          </div>
        </div>
      </div>
    </>
  ),
  about: (
    <>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Assurance
        </div>
        <div className="hero-mobile-fleet">
          <span>Custody</span>
          <em>Active</em>
        </div>
      </div>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Climate
        </div>
        <div className="hero-mobile-temp">
          <span>
            ±0<span>°</span>
          </span>
        </div>
      </div>
      <div className="hero-mobile-dispatch">
        <div className="hero-panel-label">
          <Dot /> Coverage
        </div>
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>UK city centres</span>
            <span>International corridors</span>
            <span>UK city centres</span>
            <span>International corridors</span>
          </div>
        </div>
      </div>
    </>
  ),
  services: (
    <>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Capability
        </div>
        <div className="hero-mobile-temp">
          <span>6 lines</span>
        </div>
      </div>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Status
        </div>
        <div className="hero-mobile-fleet">
          <span>Services</span>
          <em>Ready</em>
        </div>
      </div>
      <div className="hero-mobile-dispatch">
        <div className="hero-panel-label">
          <Dot /> Requests
        </div>
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>Pharma reefer</span>
            <span>Fine foods dual-zone</span>
            <span>Luxury secure</span>
            <span>Pharma reefer</span>
            <span>Fine foods dual-zone</span>
            <span>Luxury secure</span>
          </div>
        </div>
      </div>
    </>
  ),
  why: (
    <>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Values
        </div>
        <div className="hero-mobile-fleet">
          <span>Discretion</span>
          <em>Core</em>
        </div>
      </div>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Standard
        </div>
        <div className="hero-mobile-fleet">
          <span>Precision</span>
          <em>Always</em>
        </div>
      </div>
      <div className="hero-mobile-dispatch">
        <div className="hero-panel-label">
          <Dot /> Why Orvian
        </div>
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>24/7 reach</span>
            <span>One contact</span>
            <span>Cold-chain integrity</span>
            <span>24/7 reach</span>
            <span>One contact</span>
            <span>Cold-chain integrity</span>
          </div>
        </div>
      </div>
    </>
  ),
  contact: (
    <>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Available
        </div>
        <div className="hero-mobile-temp">
          <span>24/7</span>
        </div>
      </div>
      <div className="hero-mobile-card">
        <div className="hero-panel-label">
          <Dot /> Channel
        </div>
        <div className="hero-mobile-fleet">
          <span>WhatsApp</span>
          <em>Open</em>
        </div>
      </div>
      <div className="hero-mobile-dispatch">
        <div className="hero-panel-label">
          <Dot /> Reach us
        </div>
        <div className="hero-dispatch-track">
          <div className="hero-dispatch-items">
            <span>Call · Email · WhatsApp</span>
            <span>London base</span>
            <span>Call · Email · WhatsApp</span>
            <span>London base</span>
          </div>
        </div>
      </div>
    </>
  ),
};
