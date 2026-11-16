import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "assets");

const FONT_SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const FONT_MONO =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace";

const THEMES = {
  light: {
    cardBg: "#FAFAFA",
    wellBg: "#F1F1F4",
    pillBg: "#FFFFFF",
    border: "#E4E4E7",
    borderStrong: "#D4D4D8",
    ink: "#09090B",
    inkSecondary: "#52525B",
    inkMuted: "#71717A",
    inkFaint: "#A1A1AA",
    accent: "#0891B2",
    accentSoft: "#ECFEFF",
    accentHairline: "#A5F3FC",
    accentInk: "#FFFFFF",
    dotGrid: "#E0E0E5",
    visorBg: "#111113",
    visorBorder: "#09090B",
    visorEye: "#FAFAFA",
  },
  dark: {
    cardBg: "#111113",
    wellBg: "#18181B",
    pillBg: "#1C1C20",
    border: "#27272A",
    borderStrong: "#3F3F46",
    ink: "#FAFAFA",
    inkSecondary: "#A1A1AA",
    inkMuted: "#8E8E98",
    inkFaint: "#52525B",
    accent: "#22D3EE",
    accentSoft: "#0C2A33",
    accentHairline: "#155E75",
    accentInk: "#09090B",
    dotGrid: "#222227",
    visorBg: "#09090B",
    visorBorder: "#3F3F46",
    visorEye: "#FAFAFA",
  },
};

function renderHero(t, mode) {
  const w = 840;
  const h = 216;
  const dotId = `dotGrid-${mode}`;
  const clipId = `heroClip-${mode}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
  <defs>
    <clipPath id="${clipId}">
      <rect width="${w}" height="${h}" rx="12" />
    </clipPath>
    <pattern id="${dotId}" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="${t.dotGrid}" />
    </pattern>
  </defs>

  <g clip-path="url(#${clipId})">
    <rect width="${w}" height="${h}" rx="12" fill="${t.cardBg}" />
    <rect x="36" y="0" width="32" height="2" fill="${t.accent}" />

    <!-- Left Column: Identity -->
    <rect x="36" y="34" width="7" height="7" rx="1.5" fill="${t.accent}" />
    <text x="51" y="41" fill="${t.inkMuted}" font-family="${FONT_MONO}" font-size="11" font-weight="600" letter-spacing="1.4">00 // @JEISON117</text>
    <rect x="176" y="32" width="6" height="10" rx="1" fill="${t.accent}">
      <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.48;0.5;0.98;1" dur="1.1s" repeatCount="indefinite" />
    </rect>

    <text x="34" y="102" fill="${t.ink}" font-family="${FONT_SANS}" font-size="42" font-weight="700" letter-spacing="-1.2">Jason Castillo</text>

    <text x="36" y="134" font-family="${FONT_SANS}" font-size="15" font-weight="500">
      <tspan fill="${t.ink}" font-weight="600">AI Systems Engineer</tspan>
      <tspan fill="${t.accent}" font-weight="700">  ·  </tspan>
      <tspan fill="${t.inkSecondary}">Automation Lover</tspan>
    </text>

    <!-- Bottom Hairline & Tabular Metadata -->
    <line x1="36" y1="158" x2="516" y2="158" stroke="${t.border}" stroke-width="1" />

    <text x="36" y="182" fill="${t.inkMuted}" font-family="${FONT_MONO}" font-size="10.5" font-weight="500" letter-spacing="0.8">
      <tspan fill="${t.inkFaint}">SYS </tspan><tspan fill="${t.inkSecondary}" font-weight="600">WIN / LINUX</tspan>
      <tspan fill="${t.borderStrong}">   |   </tspan>
      <tspan fill="${t.inkFaint}">FOCUS </tspan><tspan fill="${t.inkSecondary}" font-weight="600">AGENTS &amp; APPS</tspan>
      <tspan fill="${t.borderStrong}">   |   </tspan>
      <tspan fill="${t.inkFaint}">UNIT </tspan><tspan fill="${t.accent}" font-weight="700">117</tspan>
    </text>

    <!-- Right Column: Unit-117 Kinetic Viewport -->
    <rect x="548.5" y="22.5" width="259" height="171" rx="9" fill="${t.wellBg}" stroke="${t.border}" stroke-width="1" />
    <rect x="556" y="30" width="244" height="156" rx="6" fill="url(#${dotId})" />
    <!-- Subtle Cyan Corner Reticles -->
    <path d="M548.5 34V28.5C548.5 25.2 551.2 22.5 554.5 22.5H560" stroke="${t.accentHairline}" stroke-width="1.2" fill="none" />
    <path d="M796 22.5H801.5C804.8 22.5 807.5 25.2 807.5 28.5V34" stroke="${t.accentHairline}" stroke-width="1.2" fill="none" />
    <path d="M548.5 182V187.5C548.5 190.8 551.2 193.5 554.5 193.5H560" stroke="${t.accentHairline}" stroke-width="1.2" fill="none" />
    <path d="M796 193.5H801.5C804.8 193.5 807.5 190.8 807.5 187.5V182" stroke="${t.accentHairline}" stroke-width="1.2" fill="none" />

    <!-- Viewport Corner Ticks & Labels -->
    <text x="564" y="42" fill="${t.inkFaint}" font-family="${FONT_MONO}" font-size="9.5" font-weight="600" letter-spacing="1">UNIT-117</text>
    <text x="752" y="42" fill="${t.inkFaint}" font-family="${FONT_MONO}" font-size="9.5" font-weight="600" letter-spacing="1">LIVE</text>
    <circle cx="786" cy="38.5" r="2.5" fill="${t.accent}">
      <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" />
    </circle>

    <!-- Precision Ruler Ticks -->
    <line x1="564" y1="176" x2="792" y2="176" stroke="${t.borderStrong}" stroke-width="1" />
    <line x1="564" y1="172" x2="564" y2="176" stroke="${t.inkFaint}" stroke-width="1" />
    <line x1="621" y1="173" x2="621" y2="176" stroke="${t.inkFaint}" stroke-width="1" />
    <line x1="678" y1="171" x2="678" y2="176" stroke="${t.accent}" stroke-width="1.5" />
    <line x1="735" y1="173" x2="735" y2="176" stroke="${t.inkFaint}" stroke-width="1" />
    <line x1="792" y1="172" x2="792" y2="176" stroke="${t.inkFaint}" stroke-width="1" />

    <!-- Shadow beneath floating Unit-117 -->
    <ellipse cx="678" cy="157" rx="22" ry="3" fill="${t.borderStrong}" opacity="0.55">
      <animate attributeName="rx" values="22;18;22" dur="3.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.35;0.6" dur="3.2s" repeatCount="indefinite" />
    </ellipse>

    <!-- Floating Unit-117 Character -->
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -4.5; 0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" dur="3.2s" repeatCount="indefinite" />

      <!-- Antenna -->
      <line x1="678" y1="73" x2="678" y2="85" stroke="${t.ink}" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="678" cy="70" r="3.5" fill="${t.accent}" />
      <circle cx="678" cy="70" r="3.5" stroke="${t.accent}" stroke-width="1.2" fill="none" opacity="0">
        <animate attributeName="r" values="3.5;12" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.75;0" dur="2.8s" repeatCount="indefinite" />
      </circle>

      <!-- Side Ear Bolts -->
      <rect x="636" y="103" width="5" height="14" rx="2" fill="${t.pillBg}" stroke="${t.ink}" stroke-width="1.5" />
      <rect x="715" y="103" width="5" height="14" rx="2" fill="${t.pillBg}" stroke="${t.ink}" stroke-width="1.5" />

      <!-- Head Chassis -->
      <rect x="641" y="85" width="74" height="52" rx="11" fill="${t.pillBg}" stroke="${t.ink}" stroke-width="1.75" />

      <!-- OLED Visor -->
      <rect x="649" y="93" width="58" height="32" rx="6" fill="${t.visorBg}" stroke="${t.visorBorder}" stroke-width="1" />

      <!-- Animated Eyes Group (Glancing Left/Right) -->
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 0; 4 0; 4 0; -4 0; -4 0; 0 0" keyTimes="0;0.24;0.30;0.48;0.54;0.74;0.82" dur="6.4s" repeatCount="indefinite" />

        <!-- Left Eye with Blink -->
        <rect x="665" y="102" width="5" height="11" rx="2.5" fill="${t.visorEye}">
          <animate attributeName="height" values="11;11;1.5;11;11;1.5;11" keyTimes="0;0.86;0.88;0.90;0.94;0.96;0.98" dur="6.4s" repeatCount="indefinite" />
          <animate attributeName="y" values="102;102;107;102;102;107;102" keyTimes="0;0.86;0.88;0.90;0.94;0.96;0.98" dur="6.4s" repeatCount="indefinite" />
        </rect>

        <!-- Right Eye with Blink -->
        <rect x="686" y="102" width="5" height="11" rx="2.5" fill="${t.visorEye}">
          <animate attributeName="height" values="11;11;1.5;11;11;1.5;11" keyTimes="0;0.86;0.88;0.90;0.94;0.96;0.98" dur="6.4s" repeatCount="indefinite" />
          <animate attributeName="y" values="102;102;107;102;102;107;102" keyTimes="0;0.86;0.88;0.90;0.94;0.96;0.98" dur="6.4s" repeatCount="indefinite" />
        </rect>

        <!-- Tiny Visor Smile / Telemetry Line -->
        <path d="M 673 117 Q 678 120 683 117" stroke="${t.accent}" stroke-width="1.6" stroke-linecap="round" fill="none" />
      </g>

      <!-- Bottom Chassis Detail -->
      <rect x="670" y="130" width="16" height="2.5" rx="1.25" fill="${t.borderStrong}" />
    </g>

    <!-- Speech / Status Pill Cycling -->
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3; 0 0" dur="3.2s" repeatCount="indefinite" />
      <rect x="730" y="61" width="38" height="21" rx="5" fill="${t.pillBg}" stroke="${t.borderStrong}" stroke-width="1" />
      <text x="749" y="75" text-anchor="middle" fill="${t.ink}" font-family="${FONT_MONO}" font-size="10" font-weight="700">
        &gt;_
        <animate attributeName="opacity" values="1;1;0;0;0;0;1" keyTimes="0;0.30;0.34;0.66;0.70;0.96;1" dur="7.5s" repeatCount="indefinite" />
      </text>
      <text x="749" y="75" text-anchor="middle" fill="${t.accent}" font-family="${FONT_MONO}" font-size="10" font-weight="700" opacity="0">
        117
        <animate attributeName="opacity" values="0;0;1;1;0;0;0" keyTimes="0;0.30;0.34;0.64;0.68;0.96;1" dur="7.5s" repeatCount="indefinite" />
      </text>
      <text x="749" y="75" text-anchor="middle" fill="${t.ink}" font-family="${FONT_MONO}" font-size="10" font-weight="700" opacity="0">
        hi!
        <animate attributeName="opacity" values="0;0;0;0;1;1;0" keyTimes="0;0.30;0.64;0.68;0.72;0.96;1" dur="7.5s" repeatCount="indefinite" />
      </text>
    </g>
  </g>

  <!-- Crisp Outer Border -->
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="11.5" stroke="${t.border}" stroke-width="1" />
</svg>`;
}

function renderBento(t, mode) {
  const w = 840;
  const h = 188;
  const cw = 412;
  const rx = 428;

  // Pipeline nodes x positions inside Left Card
  const nodes = [
    { label: "THINK", x: 56, t0: 0, t1: 0.2 },
    { label: "BUILD", x: 152, t0: 0.25, t1: 0.45 },
    { label: "BREAK", x: 248, t0: 0.5, t1: 0.72 },
    { label: "SHIP", x: 344, t0: 0.78, t1: 0.96 },
  ];

  const nodeMarkup = nodes
    .map((n) => {
      const isBreak = n.label === "BREAK";
      const activeColor = t.accent;
      return `
    <!-- Node ${n.label} -->
    <circle cx="${n.x}" cy="138" r="4.5" fill="${t.wellBg}" stroke="${t.borderStrong}" stroke-width="1.5">
      <animate attributeName="stroke" values="${t.borderStrong};${activeColor};${activeColor};${t.borderStrong}" keyTimes="0;${n.t0};${n.t1};1" dur="6s" repeatCount="indefinite" />
      <animate attributeName="fill" values="${t.wellBg};${activeColor};${activeColor};${t.wellBg}" keyTimes="0;${n.t0};${n.t1};1" dur="6s" repeatCount="indefinite" />
    </circle>
    <text x="${n.x}" y="157" text-anchor="middle" fill="${t.inkFaint}" font-family="${FONT_MONO}" font-size="9.5" font-weight="600" letter-spacing="0.8">${n.label}${isBreak ? "!" : ""}
      <animate attributeName="fill" values="${t.inkFaint};${t.ink};${t.ink};${t.inkFaint}" keyTimes="0;${n.t0};${n.t1};1" dur="6s" repeatCount="indefinite" />
    </text>`;
    })
    .join("");

  // Mini Ping-Pong coordinates (court at x=308..384, y=22..66 -> w=76, h=44)
  const cx = 308;
  const cy = 22;
  const cwCourt = 76;
  const chCourt = 44;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
  <!-- LEFT CARD: 01 CURRENT LOOP -->
  <g>
    <rect x="0.5" y="0.5" width="${cw - 1}" height="${h - 1}" rx="11.5" fill="${t.cardBg}" stroke="${t.border}" stroke-width="1" />
    <rect x="26" y="0" width="28" height="2" fill="${t.accent}" />

    <rect x="26" y="25" width="2" height="10" rx="1" fill="${t.accent}" />
    <text x="34" y="34" fill="${t.inkMuted}" font-family="${FONT_MONO}" font-size="10.5" font-weight="600" letter-spacing="1.2">01 · CURRENT LOOP</text>
    <rect x="330" y="21" width="56" height="20" rx="4" fill="${t.accentSoft}" />
    <text x="358" y="34.5" text-anchor="middle" fill="${t.accent}" font-family="${FONT_MONO}" font-size="9.5" font-weight="700" letter-spacing="0.8">ACTIVE</text>

    <text x="26" y="68" fill="${t.ink}" font-family="${FONT_SANS}" font-size="17" font-weight="700" letter-spacing="-0.3">Multi-Agent Systems &amp; Apps</text>
    <text x="26" y="92" fill="${t.inkSecondary}" font-family="${FONT_SANS}" font-size="13.5" font-weight="400">Building &amp; experimenting with AI models</text>

    <!-- Kinetic State Pipeline Well -->
    <rect x="24.5" y="116.5" width="363" height="51" rx="8" fill="${t.wellBg}" stroke="${t.border}" stroke-width="1" />
    <line x1="56" y1="138" x2="344" y2="138" stroke="${t.borderStrong}" stroke-width="1.5" stroke-dasharray="3 3" />

    ${nodeMarkup}

    <!-- Traveling Packet (with playful micro-jitter on BREAK) -->
    <rect x="52" y="134" width="8" height="8" rx="2" fill="${t.accent}">
      <animate attributeName="x" values="52;148;244;246;242;244;340;340;52" keyTimes="0;0.25;0.50;0.54;0.58;0.64;0.82;0.94;1" dur="6s" repeatCount="indefinite" />
      <animate attributeName="y" values="134;134;134;131;137;134;134;134;134" keyTimes="0;0.25;0.50;0.54;0.58;0.64;0.82;0.94;1" dur="6s" repeatCount="indefinite" />
    </rect>
  </g>

  <!-- RIGHT CARD: 02 WORKBENCH -->
  <g transform="translate(${rx}, 0)">
    <rect x="0.5" y="0.5" width="${cw - 1}" height="${h - 1}" rx="11.5" fill="${t.cardBg}" stroke="${t.border}" stroke-width="1" />
    <rect x="26" y="0" width="28" height="2" fill="${t.accent}" />

    <rect x="26" y="25" width="2" height="10" rx="1" fill="${t.accent}" />
    <text x="34" y="34" fill="${t.inkMuted}" font-family="${FONT_MONO}" font-size="10.5" font-weight="600" letter-spacing="1.2">02 · WORKBENCH</text>

    <!-- Mini Ping-Pong Court (Top-Right) -->
    <rect x="${cx + 0.5}" y="${cy + 0.5}" width="${cwCourt}" height="${chCourt}" rx="6" fill="${t.wellBg}" stroke="${t.accentHairline}" stroke-width="1" />
    <line x1="${cx + cwCourt / 2}" y1="${cy + 5}" x2="${cx + cwCourt / 2}" y2="${cy + chCourt - 4}" stroke="${t.borderStrong}" stroke-width="1" stroke-dasharray="2 3" />

    <!-- Left Paddle -->
    <rect x="${cx + 6}" y="${cy + 15}" width="2.5" height="12" rx="1.25" fill="${t.ink}">
      <animate attributeName="y" values="${cy + 20};${cy + 10};${cy + 26};${cy + 20}" keyTimes="0;0.48;0.76;1" dur="3.6s" repeatCount="indefinite" />
    </rect>
    <!-- Right Paddle -->
    <rect x="${cx + cwCourt - 8.5}" y="${cy + 15}" width="2.5" height="12" rx="1.25" fill="${t.ink}">
      <animate attributeName="y" values="${cy + 10};${cy + 26};${cy + 14};${cy + 10}" keyTimes="0;0.50;0.82;1" dur="3.6s" repeatCount="indefinite" />
    </rect>
    <!-- Bouncing Ball -->
    <rect x="${cx + 10}" y="${cy + 24}" width="4" height="4" rx="1" fill="${t.accent}">
      <animate attributeName="x" values="${cx + 9};${cx + cwCourt - 13};${cx + 9}" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" />
      <animate attributeName="y" values="${cy + 24};${cy + 7};${cy + 29};${cy + 36};${cy + 14};${cy + 24}" keyTimes="0;0.24;0.50;0.74;0.88;1" dur="3.6s" repeatCount="indefinite" />
    </rect>

    <text x="26" y="68" fill="${t.ink}" font-family="${FONT_SANS}" font-size="17" font-weight="700" letter-spacing="-0.3">Windows · Linux</text>
    <text x="26" y="92" fill="${t.inkSecondary}" font-family="${FONT_SANS}" font-size="13.5" font-weight="400">IDE: Google Antigravity, OpenCode</text>

    <!-- Kinetic OS Switcher Dock -->
    <rect x="24.5" y="116.5" width="363" height="51" rx="8" fill="${t.wellBg}" stroke="${t.border}" stroke-width="1" />

    <!-- Toggle Track -->
    <rect x="38" y="129" width="104" height="26" rx="5" fill="${t.cardBg}" stroke="${t.border}" stroke-width="1" />
    <!-- Sliding Active Pill -->
    <rect x="41" y="132" width="48" height="20" rx="3.5" fill="${t.ink}">
      <animate attributeName="x" values="41;41;91;91;41" keyTimes="0;0.42;0.50;0.92;1" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" dur="5.6s" repeatCount="indefinite" />
    </rect>
    <text x="65" y="145.5" text-anchor="middle" fill="${t.cardBg}" font-family="${FONT_MONO}" font-size="10" font-weight="700">
      WIN
      <animate attributeName="fill" values="${t.cardBg};${t.cardBg};${t.inkMuted};${t.inkMuted};${t.cardBg}" keyTimes="0;0.42;0.50;0.92;1" dur="5.6s" repeatCount="indefinite" />
    </text>
    <text x="115" y="145.5" text-anchor="middle" fill="${t.inkMuted}" font-family="${FONT_MONO}" font-size="10" font-weight="700">
      NIX
      <animate attributeName="fill" values="${t.inkMuted};${t.inkMuted};${t.cardBg};${t.cardBg};${t.inkMuted}" keyTimes="0;0.42;0.50;0.92;1" dur="5.6s" repeatCount="indefinite" />
    </text>

    <!-- Terminal Prompt Readout -->
    <text x="158" y="145.5" fill="${t.inkMuted}" font-family="${FONT_MONO}" font-size="10.5" font-weight="500">
      <tspan fill="${t.accent}" font-weight="700">~/</tspan><tspan fill="${t.inkSecondary}">dev</tspan><tspan fill="${t.inkFaint}"> · dual-os ready</tspan>
    </text>
    <rect x="293" y="137" width="6" height="10" rx="1" fill="${t.accent}">
      <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.48;0.5;0.98;1" dur="1.1s" repeatCount="indefinite" />
    </rect>
  </g>
</svg>`;
}

// Clean minimalist 14x14 vector marks on a 16x16 viewbox
const STACK_ROW_1 = [
  {
    name: "Python",
    width: 118,
    icon: (c, a) =>
      `<path d="M8 2C5.8 2 5.5 3 5.5 4.2V6H9.5V6.8H4C2.8 6.8 2 7.8 2 9.5C2 11.2 2.8 12.2 4 12.2H5.2V10.5C5.2 9.2 6.1 8.2 7.5 8.2H10.5C11.6 8.2 12.5 7.3 12.5 6.2V4.2C12.5 3 11.2 2 8 2Z" stroke="${c}" stroke-width="1.3" fill="none"/><circle cx="7" cy="4.2" r="0.8" fill="${a}"/><path d="M12.2 6.8H11V8.5C11 9.8 10.1 10.8 8.7 10.8H5.7C4.6 10.8 3.7 11.7 3.7 12.8V13.8C3.7 14.8 5 15.5 8 15.5C10.5 15.5 11.5 14.5 11.5 13.5V11.8H7.5V11H12.2C13.4 11 14 10 14 8.5C14 7.4 13.3 6.8 12.2 6.8Z" stroke="${c}" stroke-width="1.3" fill="none"/>`,
  },
  {
    name: "TypeScript",
    width: 140,
    icon: (c, a) =>
      `<rect x="2" y="2" width="12" height="12" rx="2.5" stroke="${c}" stroke-width="1.35" fill="none"/><path d="M5 7.5H9M7 7.5V12" stroke="${a}" stroke-width="1.4" stroke-linecap="round"/><path d="M10.2 11.5C10.6 11.9 11.6 12 12 11.4C12.4 10.8 11.7 10.3 11 10C10.3 9.7 9.9 9.2 10.3 8.6C10.7 8 11.7 8.1 12.1 8.5" stroke="${c}" stroke-width="1.25" stroke-linecap="round" fill="none"/>`,
  },
  {
    name: "JavaScript",
    width: 138,
    icon: (c, a) =>
      `<rect x="2" y="2" width="12" height="12" rx="2.5" stroke="${c}" stroke-width="1.35" fill="none"/><path d="M7.2 7.5V11C7.2 12 6.4 12.4 5.5 12" stroke="${a}" stroke-width="1.4" stroke-linecap="round" fill="none"/><path d="M9.6 11.6C10 12 11.2 12.1 11.6 11.4C12 10.7 11.3 10.2 10.5 9.9C9.8 9.6 9.4 9.1 9.8 8.5C10.2 7.9 11.2 8 11.6 8.4" stroke="${c}" stroke-width="1.25" stroke-linecap="round" fill="none"/>`,
  },
  {
    name: "React",
    width: 112,
    icon: (c, a) =>
      `<circle cx="8" cy="8" r="1.4" fill="${a}"/><ellipse cx="8" cy="8" rx="6" ry="2.4" stroke="${c}" stroke-width="1.2" fill="none"/><ellipse cx="8" cy="8" rx="6" ry="2.4" transform="rotate(60 8 8)" stroke="${c}" stroke-width="1.2" fill="none"/><ellipse cx="8" cy="8" rx="6" ry="2.4" transform="rotate(120 8 8)" stroke="${c}" stroke-width="1.2" fill="none"/>`,
  },
  {
    name: "Next.js",
    width: 120,
    icon: (c, a) =>
      `<circle cx="8" cy="8" r="6" stroke="${c}" stroke-width="1.35" fill="none"/><path d="M5.5 11V5.2L11.8 13" stroke="${c}" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x1="10.5" y1="5.2" x2="10.5" y2="8.6" stroke="${a}" stroke-width="1.4" stroke-linecap="round"/>`,
  },
];

const STACK_ROW_2 = [
  {
    name: "GitHub",
    width: 118,
    icon: (c, a) =>
      `<circle cx="8" cy="8" r="6" stroke="${c}" stroke-width="1.35" fill="none"/><circle cx="6.2" cy="7.5" r="1" fill="${a}"/><circle cx="9.8" cy="7.5" r="1" fill="${a}"/><path d="M6 13.5V11.2C4.6 11.5 4.2 10.4 4.2 10.4M10 13.5V11.2" stroke="${c}" stroke-width="1.25" stroke-linecap="round" fill="none"/>`,
  },
  {
    name: "Vercel",
    width: 116,
    icon: (c, a) =>
      `<path d="M8 2.5L14 13H2L8 2.5Z" stroke="${c}" stroke-width="1.35" stroke-linejoin="round" fill="none"/><circle cx="8" cy="9.5" r="1.2" fill="${a}"/>`,
  },
  {
    name: "Supabase",
    width: 134,
    icon: (c, a) =>
      `<path d="M8.8 2L3.5 9H8V14L13.3 7H8.8V2Z" stroke="${c}" stroke-width="1.35" stroke-linejoin="round" fill="none"/><circle cx="8.4" cy="8" r="1" fill="${a}"/>`,
  },
  {
    name: "Cloudflare",
    width: 142,
    icon: (c, a) =>
      `<path d="M4.5 12H12C13.1 12 14 11.1 14 10C14 9 13.2 8.1 12.2 8C11.9 5.9 10.1 4.5 8 4.5C6.1 4.5 4.5 5.8 4.1 7.6C3 7.8 2 8.8 2 10C2 11.1 3.1 12 4.5 12Z" stroke="${c}" stroke-width="1.3" stroke-linejoin="round" fill="none"/><circle cx="10.5" cy="9.5" r="1" fill="${a}"/>`,
  },
  {
    name: "Firebase",
    width: 126,
    icon: (c, a) =>
      `<path d="M4 12.5L5.4 3.5L8.2 8.2M4 12.5L11.2 5.2L12.5 12.5L8.2 14.5L4 12.5Z" stroke="${c}" stroke-width="1.3" stroke-linejoin="round" fill="none"/><circle cx="8.2" cy="10.8" r="1.1" fill="${a}"/>`,
  },
];

function buildMarqueeRow(items, t, yPos, gap = 14) {
  let cursor = 0;
  const positions = items.map((item) => {
    const x = cursor;
    cursor += item.width + gap;
    return { ...item, x };
  });
  const loopWidth = cursor;

  const renderPass = (offsetX) =>
    positions
      .map(
        (item) => `
      <g transform="translate(${item.x + offsetX}, ${yPos})">
        <rect x="0.5" y="0.5" width="${item.width - 1}" height="33" rx="7" fill="${t.pillBg}" stroke="${t.border}" stroke-width="1" />
        <g transform="translate(12, 9)">${item.icon(t.ink, t.accent)}</g>
        <text x="35" y="21" fill="${t.ink}" font-family="${FONT_MONO}" font-size="11.5" font-weight="600" letter-spacing="0.2">${item.name}</text>
      </g>`
      )
      .join("");

  return {
    loopWidth,
    // Render 3 passes so the 792px clipped viewport is always filled seamlessly
    svg: renderPass(0) + renderPass(loopWidth) + renderPass(loopWidth * 2),
  };
}

function renderStack(t, mode) {
  const w = 840;
  const h = 156;
  const clipId = `stackTrackClip-${mode}`;
  const fadeL = `fadeLeft-${mode}`;
  const fadeR = `fadeRight-${mode}`;

  const row1 = buildMarqueeRow(STACK_ROW_1, t, 54, 14);
  const row2 = buildMarqueeRow(STACK_ROW_2, t, 100, 14);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
  <style>
    @keyframes marqueeLeft-${mode} {
      0% { transform: translateX(0px); }
      100% { transform: translateX(-${row1.loopWidth}px); }
    }
    @keyframes marqueeRight-${mode} {
      0% { transform: translateX(-${row2.loopWidth}px); }
      100% { transform: translateX(0px); }
    }
    .track-left-${mode} {
      animation: marqueeLeft-${mode} 30s linear infinite;
    }
    .track-right-${mode} {
      animation: marqueeRight-${mode} 34s linear infinite;
    }
  </style>
  <defs>
    <clipPath id="${clipId}">
      <rect x="24" y="48" width="792" height="94" rx="6" />
    </clipPath>
    <linearGradient id="${fadeL}" x1="24" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.cardBg}" stop-opacity="1" />
      <stop offset="100%" stop-color="${t.cardBg}" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="${fadeR}" x1="776" y1="0" x2="816" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${t.cardBg}" stop-opacity="0" />
      <stop offset="100%" stop-color="${t.cardBg}" stop-opacity="1" />
    </linearGradient>
  </defs>

  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="11.5" fill="${t.cardBg}" stroke="${t.border}" stroke-width="1" />
  <rect x="26" y="0" width="32" height="2" fill="${t.accent}" />

  <!-- Header -->
  <rect x="26" y="23" width="2" height="10" rx="1" fill="${t.accent}" />
  <text x="34" y="32" fill="${t.inkMuted}" font-family="${FONT_MONO}" font-size="10.5" font-weight="600" letter-spacing="1.2">03 · TOOLKIT</text>
  <text x="774" y="32" text-anchor="end" fill="${t.inkFaint}" font-family="${FONT_MONO}" font-size="10" font-weight="600" letter-spacing="1">10 CORE TOOLS</text>

  <!-- Mini Equalizer Bars -->
  <rect x="786" y="23" width="2.5" height="9" rx="1" fill="${t.accent}">
    <animate attributeName="height" values="4;10;5;9;4" dur="1.4s" repeatCount="indefinite" />
    <animate attributeName="y" values="28;22;27;23;28" dur="1.4s" repeatCount="indefinite" />
  </rect>
  <rect x="792" y="21" width="2.5" height="11" rx="1" fill="${t.ink}">
    <animate attributeName="height" values="10;4;11;5;10" dur="1.4s" repeatCount="indefinite" />
    <animate attributeName="y" values="22;28;21;27;22" dur="1.4s" repeatCount="indefinite" />
  </rect>
  <rect x="798" y="25" width="2.5" height="7" rx="1" fill="${t.accent}">
    <animate attributeName="height" values="6;11;4;8;6" dur="1.4s" repeatCount="indefinite" />
    <animate attributeName="y" values="26;21;28;24;26" dur="1.4s" repeatCount="indefinite" />
  </rect>

  <!-- Clipped Dual-Track Marquee -->
  <g clip-path="url(#${clipId})">
    <g class="track-left-${mode}">${row1.svg}</g>
    <g class="track-right-${mode}">${row2.svg}</g>

    <!-- Edge Fade Masks -->
    <rect x="24" y="48" width="40" height="94" fill="url(#${fadeL})" />
    <rect x="776" y="48" width="40" height="94" fill="url(#${fadeR})" />
  </g>
</svg>`;
}

function renderConnect(t) {
  const w = 840;
  const h = 72;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="11.5" fill="${t.cardBg}" stroke="${t.border}" stroke-width="1" />
  <rect x="26" y="0" width="32" height="2" fill="${t.accent}" />

  <rect x="26" y="18" width="2" height="10" rx="1" fill="${t.accent}" />
  <text x="34" y="27" fill="${t.inkMuted}" font-family="${FONT_MONO}" font-size="10" font-weight="600" letter-spacing="1.2">04 · CONNECT</text>
  <text x="26" y="50" font-family="${FONT_SANS}" font-size="15" font-weight="600">
    <tspan fill="${t.ink}">LinkedIn</tspan>
    <tspan fill="${t.accent}">  —  </tspan>
    <tspan fill="${t.inkSecondary}" font-weight="400">Let's build something sharp</tspan>
  </text>

  <!-- Serial Stamp -->
  <text x="712" y="40" text-anchor="end" fill="${t.inkFaint}" font-family="${FONT_MONO}" font-size="10" font-weight="600" letter-spacing="1">BUILD // 117</text>

  <!-- Kinetic Action Pill -->
  <rect x="728" y="19" width="86" height="34" rx="7" fill="${t.accent}" />
  <text x="752" y="40" fill="${t.accentInk}" font-family="${FONT_MONO}" font-size="11.5" font-weight="700" letter-spacing="0.8">IN</text>

  <!-- Sequential Chevrons -->
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0; 3 0; 0 0" dur="1.8s" repeatCount="indefinite" />
    <path d="M778 31L783 36L778 41" stroke="${t.accentInk}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <animate attributeName="opacity" values="0.35;1;0.35" dur="1.8s" begin="0s" repeatCount="indefinite" />
    </path>
    <path d="M786 31L791 36L786 41" stroke="${t.accentInk}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <animate attributeName="opacity" values="0.35;1;0.35" dur="1.8s" begin="0.25s" repeatCount="indefinite" />
    </path>
    <path d="M794 31L799 36L794 41" stroke="${t.accentInk}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <animate attributeName="opacity" values="0.35;1;0.35" dur="1.8s" begin="0.5s" repeatCount="indefinite" />
    </path>
  </g>
</svg>`;
}

mkdirSync(ASSETS_DIR, { recursive: true });

for (const [mode, tokens] of Object.entries(THEMES)) {
  writeFileSync(join(ASSETS_DIR, `hero-${mode}.svg`), renderHero(tokens, mode));
  writeFileSync(join(ASSETS_DIR, `bento-${mode}.svg`), renderBento(tokens, mode));
  writeFileSync(join(ASSETS_DIR, `stack-${mode}.svg`), renderStack(tokens, mode));
  writeFileSync(join(ASSETS_DIR, `connect-${mode}.svg`), renderConnect(tokens));
}

console.log("Generated 8 SVG assets in", ASSETS_DIR);
