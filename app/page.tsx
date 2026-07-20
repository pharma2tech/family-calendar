import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "40px",
          fontWeight: "bold",
          color: "#111",
        }}
      >
        Tech Blog
      </h1>

      <Link
        href="/blog/article1"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src="/calender1.png"
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />

          <p
            style={{
              color: "#666",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            2026.05.03
          </p>

          <h2
            style={{
              fontSize: "24px",
              marginBottom: "12px",
              color: "#111",
            }}
          >
            アラフォー薬剤師がITエンジニア転職を目指して、
            カレンダーアプリを作ってみた話
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
            }}
          >
            未経験からNext.jsとChatGPTを使って
            家族用カレンダーアプリを作った記録。
          </p>
        </div>
      </Link>
    </div>
  );
}