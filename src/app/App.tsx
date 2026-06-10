import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { QRCodeSVG } from "qrcode.react";
import { Screen1Home } from "./components/Screen1Home";
import { Screen2Course } from "./components/Screen2Course";
import { Screen3Report } from "./components/Screen3Report";

export default function App() {
  const mockupRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const pageUrl = "https://wavenab1111-droid.github.io/dogfit/";

  const handleExport = async () => {
    if (!mockupRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(mockupRef.current, {
        pixelRatio: 3,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = "DogFit_Mockup.png";
      link.href = dataUrl;
      link.click();
    } finally {
      setExporting(false);
    }
  };

  const screens = [<Screen1Home />, <Screen2Course />, <Screen3Report />];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #EEF4FF 0%, #F7FAFF 60%, #E8F0FE 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        padding: "32px 0",
        overflow: "hidden",
      }}
    >
      {/* Carousel — full width, scroll-snapping */}
      <div
        ref={mockupRef}
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          width: "100vw",
          gap: 24,
          paddingLeft: "calc(50vw - 140px)",
          paddingRight: "calc(50vw - 140px)",
          boxSizing: "border-box",
          paddingTop: 32,
          paddingBottom: 32,
          scrollbarWidth: "none",
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {screens.map((screen, i) => (
          <div
            key={i}
            style={{
              scrollSnapAlign: "center",
              flexShrink: 0,
            }}
          >
            <PhoneFrame>{screen}</PhoneFrame>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={handleExport}
          disabled={exporting}
          style={{
            background: exporting ? "#93C5FD" : "linear-gradient(135deg, #1A56DB, #2563EB)",
            color: "#fff",
            border: "none",
            borderRadius: 14,
            padding: "13px 28px",
            fontSize: 14,
            fontWeight: 700,
            cursor: exporting ? "default" : "pointer",
            boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'Noto Sans KR', sans-serif",
          }}
        >
          {exporting ? <><SpinnerSvg />저장 중...</> : <><DownloadSvg />PNG로 저장</>}
        </button>

        <button
          onClick={() => setShowQR(true)}
          style={{
            background: "#fff",
            color: "#1A56DB",
            border: "2px solid #2563EB",
            borderRadius: 14,
            padding: "13px 28px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'Noto Sans KR', sans-serif",
            boxShadow: "0 4px 20px rgba(37,99,235,0.12)",
          }}
        >
          <QrSvg />
          QR 코드 공유
        </button>
      </div>

      {/* QR Modal */}
      {showQR && (
        <div
          onClick={() => setShowQR(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
              maxWidth: 320,
              width: "90%",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#111827", fontFamily: "'Noto Sans KR', sans-serif" }}>
              DogFit 목업 QR 코드
            </div>
            <div style={{ fontSize: 12, color: "#6B7280", textAlign: "center", fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.6 }}>
              스캔하면 이 페이지로 바로 연결됩니다.<br />프레젠테이션 자료에 삽입해 보세요.
            </div>
            <div style={{ padding: 12, background: "#F9FAFB", borderRadius: 16, border: "1px solid #E5E7EB" }}>
              <QRCodeSVG
                value={pageUrl}
                size={200}
                bgColor="#F9FAFB"
                fgColor="#1A56DB"
                level="M"
              />
            </div>
            <div
              style={{
                background: "#F3F4F6",
                borderRadius: 8,
                padding: "8px 12px",
                fontSize: 10,
                color: "#6B7280",
                wordBreak: "break-all",
                textAlign: "center",
                fontFamily: "monospace",
                maxWidth: "100%",
              }}
            >
              {pageUrl}
            </div>
            <button
              onClick={() => setShowQR(false)}
              style={{
                background: "linear-gradient(135deg, #1A56DB, #2563EB)",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "11px 32px",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Noto Sans KR', sans-serif",
                width: "100%",
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: 280,
        height: 580,
        borderRadius: 40,
        background: "#1a1a2e",
        boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      <div style={{ position: "absolute", right: -3, top: 110, width: 3, height: 40, background: "#333", borderRadius: "0 2px 2px 0" }} />
      <div style={{ position: "absolute", left: -3, top: 90, width: 3, height: 28, background: "#333", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: 128, width: 3, height: 28, background: "#333", borderRadius: "2px 0 0 2px" }} />

      <div
        style={{
          position: "absolute",
          inset: 6,
          borderRadius: 34,
          overflow: "hidden",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Status bar */}
        <div style={{ height: 28, background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 20, paddingRight: 16, flexShrink: 0 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#111", fontFamily: "sans-serif" }}>9:41</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: -4, marginBottom: 4, flexShrink: 0 }}>
          <div style={{ width: 80, height: 16, background: "#1a1a2e", borderRadius: 10 }} />
        </div>
        <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>{children}</div>
        <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 8px", flexShrink: 0 }}>
          <div style={{ width: 80, height: 4, background: "#ccc", borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <rect x="0" y="6" width="2" height="4" rx="0.5" fill="#111" />
      <rect x="3" y="4" width="2" height="6" rx="0.5" fill="#111" />
      <rect x="6" y="2" width="2" height="8" rx="0.5" fill="#111" />
      <rect x="9" y="0" width="2" height="10" rx="0.5" fill="#111" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 14 11" fill="none">
      <path d="M7 8.5C7.8 8.5 8.5 9.2 8.5 10S7.8 11.5 7 11.5 5.5 10.8 5.5 10 6.2 8.5 7 8.5Z" fill="#111" />
      <path d="M3.5 6.5C4.5 5.3 5.7 4.5 7 4.5S9.5 5.3 10.5 6.5" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M1 4C2.7 2 4.7 1 7 1S11.3 2 13 4" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
      <rect x="0.5" y="0.5" width="14" height="9" rx="2" stroke="#111" strokeWidth="1" />
      <rect x="2" y="2" width="10" height="6" rx="1" fill="#111" />
      <path d="M15.5 3.5V6.5C16.3 6.2 17 5.6 17 5S16.3 3.8 15.5 3.5Z" fill="#111" />
    </svg>
  );
}

function DownloadSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function QrSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="3" height="3" />
      <line x1="21" y1="14" x2="21" y2="14" />
      <line x1="21" y1="21" x2="21" y2="21" />
      <line x1="14" y1="21" x2="14" y2="21" />
    </svg>
  );
}

function SpinnerSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
