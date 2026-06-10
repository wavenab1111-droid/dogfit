export function Screen3Report() {
  const bars = [
    { day: "월", value: 30, active: false },
    { day: "화", value: 45, active: false },
    { day: "수", value: 20, active: false },
    { day: "목", value: 50, active: false },
    { day: "금", value: 38, active: false },
    { day: "토", value: 60, active: false },
    { day: "일", value: 45, active: true },
  ];
  const maxVal = Math.max(...bars.map((b) => b.value));

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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
            <div style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>산책 리포트</div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 10, marginTop: 1 }}>2025년 6월 10일</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>

        {/* Completion Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
            borderRadius: 16,
            padding: "14px 16px",
            border: "1px solid #A7F3D0",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #10B981, #059669)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CheckSvg />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#065F46" }}>도기와의 산책이 완료되었어요!</div>
            <div style={{ fontSize: 10, color: "#059669", marginTop: 2 }}>오늘도 건강한 산책 완료 🐾</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "14px",
            boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
          }}
        >
          <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600, marginBottom: 12 }}>이번 산책 요약</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              {
                icon: <TimeSvg />,
                label: "산책 시간",
                value: "45분",
                bg: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
                color: "#1D4ED8",
                iconBg: "#DBEAFE",
              },
              {
                icon: <DistanceSvg />,
                label: "이동 거리",
                value: "3.2km",
                bg: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
                color: "#6D28D9",
                iconBg: "#EDE9FE",
              },
              {
                icon: <CalSvg />,
                label: "소모 칼로리",
                value: "180kcal",
                bg: "linear-gradient(135deg, #FFF7ED, #FFEDD5)",
                color: "#C2410C",
                iconBg: "#FFEDD5",
              },
              {
                icon: <PawSvg />,
                label: "산책 만족도",
                value: "매우 좋음",
                bg: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
                color: "#065F46",
                iconBg: "#D1FAE5",
              },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: stat.bg,
                  borderRadius: 12,
                  padding: "10px 12px",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: stat.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 8,
                  }}
                >
                  {stat.icon}
                </div>
                <div style={{ fontSize: 9, color: "#6B7280", marginBottom: 3 }}>{stat.label}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: stat.color }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Chart */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "14px",
            boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600 }}>주간 산책 기록</div>
            <div style={{ fontSize: 9, color: "#2563EB", fontWeight: 600 }}>이번 주 총 5회</div>
          </div>

          {/* Bar chart */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
            {bars.map((bar, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%", justifyContent: "flex-end" }}>
                <div
                  style={{
                    width: "100%",
                    height: `${(bar.value / maxVal) * 52}px`,
                    background: bar.active
                      ? "linear-gradient(180deg, #2563EB, #1D4ED8)"
                      : "#BFDBFE",
                    borderRadius: "4px 4px 2px 2px",
                    transition: "height 0.3s",
                    position: "relative",
                  }}
                >
                  {bar.active && (
                    <div
                      style={{
                        position: "absolute",
                        top: -16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#1D4ED8",
                        color: "#fff",
                        fontSize: 7,
                        fontWeight: 700,
                        padding: "1px 4px",
                        borderRadius: 4,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {bar.value}분
                    </div>
                  )}
                </div>
                <div style={{ fontSize: 8, color: bar.active ? "#2563EB" : "#9CA3AF", fontWeight: bar.active ? 700 : 400 }}>
                  {bar.day}
                </div>
              </div>
            ))}
          </div>

          {/* Goal progress */}
          <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid #F3F4F6" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 9, color: "#6B7280" }}>주간 목표 달성률</span>
              <span style={{ fontSize: 9, color: "#2563EB", fontWeight: 700 }}>71%</span>
            </div>
            <div style={{ background: "#E5E7EB", borderRadius: 4, height: 6 }}>
              <div
                style={{
                  background: "linear-gradient(90deg, #2563EB, #3B82F6)",
                  height: "100%",
                  width: "71%",
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        </div>

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

function CheckSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function TimeSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DistanceSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18" />
      <path d="M3 6l9-3 9 3" />
      <path d="M3 18l9 3 9-3" />
    </svg>
  );
}

function CalSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  );
}

function PawSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#065F46">
      <ellipse cx="5" cy="7" rx="2.5" ry="3.5" />
      <ellipse cx="10" cy="4.5" rx="2.5" ry="3.5" />
      <ellipse cx="15.5" cy="4.5" rx="2.5" ry="3.5" />
      <ellipse cx="20" cy="7" rx="2.5" ry="3.5" />
      <path d="M12 10c-4 0-7 3-6 7 .5 2 2 4 6 4s5.5-2 6-4c1-4-2-7-6-7z" />
    </svg>
  );
}
