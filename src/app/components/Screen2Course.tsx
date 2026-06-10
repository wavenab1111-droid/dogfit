export function Screen2Course() {
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
          padding: "14px 18px 18px",
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BackSvg />
          </div>
          <div>
            <div style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>맞춤 코스 추천</div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 10, marginTop: 1 }}>도기에게 추천하는 산책 코스</div>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div style={{ margin: "14px 16px 0", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 16px rgba(37,99,235,0.12)", background: "#fff" }}>
        <MapSvg />

        {/* Map overlay labels */}
        <div style={{ padding: "10px 12px", borderTop: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
            <span style={{ fontSize: 10, color: "#6B7280" }}>출발 · 합정역</span>
          </div>
          <div style={{ flex: 1, height: 1, background: "#E5E7EB", margin: "0 8px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444" }} />
            <span style={{ fontSize: 10, color: "#6B7280" }}>도착 · 망원한강공원</span>
          </div>
        </div>
      </div>

      {/* Course Name */}
      <div style={{ padding: "12px 16px 0" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "12px 14px",
            boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <TreeSvg />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>넓은 공원과 긴 산책 코스</div>
              <div style={{ fontSize: 9, color: "#9CA3AF", marginTop: 1 }}>도기의 활동량에 최적화된 추천 코스</div>
            </div>
            <div
              style={{
                marginLeft: "auto",
                background: "#ECFDF5",
                color: "#059669",
                fontSize: 9,
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 8,
              }}
            >
              추천
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 0, borderTop: "1px solid #F3F4F6", paddingTop: 10 }}>
            {[
              { icon: <DistanceSvg />, label: "총 거리", value: "3.2km", color: "#2563EB" },
              { icon: <TimeSvg />, label: "예상 시간", value: "45분", color: "#7C3AED" },
              { icon: <SafeSvg />, label: "안전도", value: "높음", color: "#059669" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  textAlign: "center",
                  borderRight: i < 2 ? "1px solid #F3F4F6" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>{stat.icon}</div>
                <div style={{ fontSize: 9, color: "#9CA3AF", marginBottom: 2 }}>{stat.label}</div>
                <div style={{ fontSize: 12, fontWeight: 800, color: stat.color }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Route highlights */}
      <div style={{ padding: "10px 16px 0" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "12px 14px",
            boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
          }}
        >
          <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600, marginBottom: 8 }}>코스 하이라이트</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { dot: "#2563EB", text: "합정역 출발 → 양화한강공원" },
              { dot: "#7C3AED", text: "한강 둔치 산책로 (1.8km)" },
              { dot: "#059669", text: "망원한강공원 도착" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.dot, flexShrink: 0 }} />
                <span style={{ fontSize: 10, color: "#374151" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "12px 16px 14px", marginTop: "auto" }}>
        <button
          style={{
            background: "linear-gradient(135deg, #1A56DB, #2563EB)",
            color: "#fff",
            border: "none",
            borderRadius: 14,
            padding: "13px 20px",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
            width: "100%",
          }}
        >
          이 코스로 산책 시작하기
        </button>
      </div>
    </div>
  );
}

function BackSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function MapSvg() {
  return (
    <svg width="100%" viewBox="0 0 248 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Map background */}
      <rect width="248" height="140" fill="#E8F0E8" />

      {/* Roads */}
      <path d="M0 70 H248" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M0 95 H248" stroke="#FFFFFF" strokeWidth="5" />
      <path d="M80 0 V140" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M160 0 V140" stroke="#FFFFFF" strokeWidth="5" />
      <path d="M0 30 H248" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M30 0 V140" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M200 0 V140" stroke="#FFFFFF" strokeWidth="4" />

      {/* River */}
      <path d="M0 108 Q60 100 120 110 Q180 120 248 105" stroke="#93C5FD" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M0 108 Q60 100 120 110 Q180 120 248 105" stroke="#BFDBFE" strokeWidth="14" fill="none" strokeLinecap="round" />

      {/* Parks (green areas) */}
      <rect x="84" y="72" width="70" height="24" rx="4" fill="#86EFAC" opacity="0.7" />
      <rect x="0" y="100" width="30" height="20" rx="4" fill="#86EFAC" opacity="0.5" />

      {/* Buildings */}
      {[
        [5, 35, 22, 30], [32, 35, 40, 28], [5, 5, 20, 25], [32, 5, 42, 22],
        [84, 5, 70, 20], [165, 35, 30, 30], [205, 5, 38, 22], [165, 5, 30, 25],
        [205, 35, 40, 28], [84, 35, 30, 30],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="#D1D5DB" opacity="0.6" />
      ))}

      {/* Walking route */}
      <path
        d="M40 70 Q60 68 80 72 Q100 76 120 74 Q150 70 170 72 Q190 74 205 70"
        stroke="#2563EB"
        strokeWidth="3"
        fill="none"
        strokeDasharray="6 3"
        strokeLinecap="round"
      />

      {/* Start marker */}
      <circle cx="40" cy="70" r="7" fill="#10B981" />
      <text x="40" y="73" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">S</text>

      {/* End marker */}
      <circle cx="205" cy="70" r="7" fill="#EF4444" />
      <text x="205" y="73" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">E</text>

      {/* Intermediate waypoints */}
      <circle cx="100" cy="74" r="4" fill="#2563EB" />
      <circle cx="155" cy="72" r="4" fill="#2563EB" />

      {/* Distance label */}
      <rect x="90" y="52" width="48" height="14" rx="7" fill="#1D4ED8" />
      <text x="114" y="62" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">3.2 km</text>
    </svg>
  );
}

function TreeSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 14v4" />
      <path d="M7 14v4" />
      <path d="M12 2L2 14h20L12 2z" />
      <path d="M12 8l-5 6h10L12 8z" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  );
}

function DistanceSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TimeSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round">
      <path d="M5 3h14" />
      <path d="M5 21h14" />
      <path d="M17 3v3.75a2 2 0 0 1-.659 1.491L12 12l4.341 3.759A2 2 0 0 1 17 17.25V21" />
      <path d="M7 3v3.75a2 2 0 0 0 .659 1.491L12 12l-4.341 3.759A2 2 0 0 0 7 17.25V21" />
    </svg>
  );
}

function SafeSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
