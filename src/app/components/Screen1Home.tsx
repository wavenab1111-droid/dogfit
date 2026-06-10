export function Screen1Home() {
  return (
    <div
      style={{
        fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
        background: "#F4F7FF",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(160deg, #1A56DB 0%, #2563EB 100%)",
          padding: "14px 18px 20px",
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px" }}>DogFit</span>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BellSvg />
            </div>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SettingsSvg />
            </div>
          </div>
        </div>

        {/* Dog Profile Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: 16,
            padding: "12px 14px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Dog avatar */}
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FCD34D, #F59E0B)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          >
            <DogSvg />
          </div>
          <div>
            <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>도기</div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, marginTop: 2 }}>골든 리트리버 · 3세</div>
            <div style={{ display: "flex", gap: 4, marginTop: 5 }}>
              {["활발함", "건강"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(255,255,255,0.25)",
                    color: "#fff",
                    fontSize: 9,
                    padding: "2px 6px",
                    borderRadius: 10,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>

        {/* Weather & Air Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "12px 14px",
            boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
          }}
        >
          <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600, marginBottom: 8 }}>오늘의 산책 조건</div>
          <div style={{ display: "flex", gap: 12 }}>
            {/* Weather */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #FEF3C7, #FDE68A)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <SunSvg />
              </div>
              <div>
                <div style={{ fontSize: 9, color: "#9CA3AF" }}>날씨</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>맑음 23°C</div>
              </div>
            </div>
            <div style={{ width: 1, background: "#F3F4F6" }} />
            {/* Dust */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #D1FAE5, #A7F3D0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <WindSvg />
              </div>
              <div>
                <div style={{ fontSize: 9, color: "#9CA3AF" }}>미세먼지</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#059669" }}>보통</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "12px 14px",
            boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "#EFF6FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <LocationSvg />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, color: "#9CA3AF" }}>현재 위치</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}>서울시 마포구 합정동</div>
          </div>
          <span style={{ fontSize: 9, color: "#2563EB", fontWeight: 600 }}>변경</span>
        </div>

        {/* Conditions */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "12px 14px",
            boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
          }}
        >
          <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600, marginBottom: 10 }}>산책 조건 선택</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {[
              { label: "짧게", sub: "30분 이내", active: false },
              { label: "보통", sub: "45분", active: true },
              { label: "길게", sub: "60분+", active: false },
            ].map((opt) => (
              <div
                key={opt.label}
                style={{
                  flex: 1,
                  minWidth: 60,
                  padding: "8px 4px",
                  borderRadius: 10,
                  background: opt.active ? "#2563EB" : "#F9FAFB",
                  border: `1.5px solid ${opt.active ? "#2563EB" : "#E5E7EB"}`,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: opt.active ? "#fff" : "#374151" }}>{opt.label}</div>
                <div style={{ fontSize: 9, color: opt.active ? "rgba(255,255,255,0.8)" : "#9CA3AF", marginTop: 2 }}>{opt.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          style={{
            background: "linear-gradient(135deg, #1A56DB, #2563EB)",
            color: "#fff",
            border: "none",
            borderRadius: 14,
            padding: "14px 20px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            width: "100%",
          }}
        >
          <PawSvg />
          맞춤 코스 추천받기
        </button>
      </div>
    </div>
  );
}

function BellSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function SettingsSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function DogSvg() {
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="36" rx="16" ry="14" fill="#D97706" />
      <ellipse cx="32" cy="22" rx="12" ry="11" fill="#D97706" />
      <ellipse cx="22" cy="17" rx="6" ry="9" fill="#B45309" transform="rotate(-15 22 17)" />
      <ellipse cx="42" cy="17" rx="6" ry="9" fill="#B45309" transform="rotate(15 42 17)" />
      <circle cx="27" cy="21" r="2.5" fill="#1a1a1a" />
      <circle cx="37" cy="21" r="2.5" fill="#1a1a1a" />
      <circle cx="28" cy="20.5" r="0.8" fill="white" />
      <circle cx="38" cy="20.5" r="0.8" fill="white" />
      <ellipse cx="32" cy="26" rx="5" ry="3.5" fill="#92400E" />
      <circle cx="32" cy="25" r="2" fill="#7C2D12" />
    </svg>
  );
}

function SunSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="5" fill="#FCD34D" stroke="#D97706" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function WindSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  );
}

function LocationSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PawSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <ellipse cx="5" cy="7" rx="2.5" ry="3.5" />
      <ellipse cx="10" cy="4.5" rx="2.5" ry="3.5" />
      <ellipse cx="15.5" cy="4.5" rx="2.5" ry="3.5" />
      <ellipse cx="20" cy="7" rx="2.5" ry="3.5" />
      <path d="M12 10c-4 0-7 3-6 7 .5 2 2 4 6 4s5.5-2 6-4c1-4-2-7-6-7z" />
    </svg>
  );
}
