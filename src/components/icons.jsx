/* Thin line icons drawn to match the mockup — no icon-font dependency. */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Svg = ({ size = 26, children, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    {children}
  </svg>
);

export const ArrowRight = ({ size = 17 }) => (
  <Svg size={size} strokeWidth={2}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </Svg>
);

export const ShieldCheck = ({ size }) => (
  <Svg size={size}>
    <path d="M12 3l7 3v5.5c0 4.3-2.9 8.1-7 9.5-4.1-1.4-7-5.2-7-9.5V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);

export const Grid = ({ size }) => (
  <Svg size={size}>
    <rect x="4" y="4" width="6.5" height="6.5" rx="2" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="2" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="2" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2" />
  </Svg>
);

export const Wallet = ({ size }) => (
  <Svg size={size}>
    <path d="M3.5 7.5A2.5 2.5 0 016 5h11a2 2 0 012 2v1" />
    <rect x="3.5" y="7.5" width="17" height="11.5" rx="3" />
    <path d="M16 13.2h2.5" />
  </Svg>
);

export const Search = ({ size }) => (
  <Svg size={size}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4 4" />
  </Svg>
);

export const Scales = ({ size }) => (
  <Svg size={size}>
    <path d="M12 4v16" />
    <path d="M6.5 20h11" />
    <path d="M4 8h16" />
    <path d="M7 8l-3 6h6l-3-6z" />
    <path d="M17 8l-3 6h6l-3-6z" />
  </Svg>
);

export const Card = ({ size }) => (
  <Svg size={size}>
    <rect x="3" y="6" width="18" height="12" rx="3" />
    <path d="M3 10.5h18" />
  </Svg>
);

export const Bell = ({ size }) => (
  <Svg size={size}>
    <path d="M18 9a6 6 0 10-12 0c0 5-2 6-2 6h16s-2-1-2-6z" />
    <path d="M13.7 19a2 2 0 01-3.4 0" />
  </Svg>
);

export const Heart = ({ size }) => (
  <Svg size={size}>
    <path d="M12 20s-7-4.4-7-9.2A4 4 0 0112 8.7 4 4 0 0119 10.8C19 15.6 12 20 12 20z" />
  </Svg>
);

export const Sparkle = ({ size }) => (
  <Svg size={size}>
    <path d="M12 4l1.8 4.6L18.5 10l-4.7 1.4L12 16l-1.8-4.6L5.5 10l4.7-1.4L12 4z" />
    <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
  </Svg>
);

export const Chat = ({ size }) => (
  <Svg size={size}>
    <path d="M20 12.5c0 3.6-3.6 6.5-8 6.5a9.6 9.6 0 01-2.7-.4L5 20l1.2-3.2A6.1 6.1 0 014 12.5C4 8.9 7.6 6 12 6s8 2.9 8 6.5z" />
  </Svg>
);

export const Mail = ({ size }) => (
  <Svg size={size}>
    <rect x="3" y="5.5" width="18" height="13" rx="3" />
    <path d="M4 8l7.1 4.7a2 2 0 002.2 0L20 8" />
  </Svg>
);

export const Check = ({ size = 14 }) => (
  <Svg size={size} strokeWidth={2.4}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </Svg>
);

export const GraduationCap = ({ size }) => (
  <Svg size={size}>
    <path d="M12 5l9 4-9 4-9-4 9-4z" />
    <path d="M6.5 11v4.4c0 .6.3 1.1.9 1.4 1.3.7 2.9 1.2 4.6 1.2s3.3-.5 4.6-1.2c.6-.3.9-.8.9-1.4V11" />
    <path d="M20.5 9.4v4.3" />
  </Svg>
);

export const Calendar = ({ size }) => (
  <Svg size={size}>
    <rect x="3.5" y="5.5" width="17" height="14" rx="3" />
    <path d="M3.5 10h17" />
    <path d="M8 3.5v4" />
    <path d="M16 3.5v4" />
  </Svg>
);

export const Compare = ({ size }) => (
  <Svg size={size}>
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
    <path d="M6.5 9v6a3 3 0 003 3h5.5" />
    <path d="M17.5 15V9a3 3 0 00-3-3H9" />
  </Svg>
);

export const PercentBadge = ({ size }) => (
  <Svg size={size}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9 9.2h.01" />
    <path d="M15 14.8h.01" />
    <path d="M15.2 8.8l-6.4 6.4" />
  </Svg>
);

export const Lock = ({ size }) => (
  <Svg size={size}>
    <rect x="4.5" y="10.5" width="15" height="9.5" rx="3" />
    <path d="M8 10.5V8a4 4 0 018 0v2.5" />
  </Svg>
);

export const Plane = ({ size }) => (
  <Svg size={size}>
    <path d="M20.5 3.5L11 13" />
    <path d="M20.5 3.5l-6 17-3.5-7.5L3.5 9.5l17-6z" />
  </Svg>
);

export const Brain = ({ size }) => (
  <Svg size={size}>
    <path d="M12 6.2a2.7 2.7 0 00-5 1.3 2.6 2.6 0 00-1.4 4.4A2.7 2.7 0 007 16.4a2.6 2.6 0 005 .9V6.2z" />
    <path d="M12 6.2a2.7 2.7 0 015 1.3 2.6 2.6 0 011.4 4.4A2.7 2.7 0 0117 16.4a2.6 2.6 0 01-5 .9V6.2z" />
  </Svg>
);

export const LineChart = ({ size }) => (
  <Svg size={size}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="M7.5 15l3.5-4 3 2.5 4.5-6" />
  </Svg>
);

export const ChevronDown = ({ size = 20 }) => (
  <Svg size={size}>
    <path d="M6 9.5l6 6 6-6" />
  </Svg>
);

export const Menu = ({ size = 22 }) => (
  <Svg size={size} strokeWidth={2}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Svg>
);

export const Close = ({ size = 22 }) => (
  <Svg size={size} strokeWidth={2}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </Svg>
);
