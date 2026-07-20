import Link from "next/link";

export default function BlogPage() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "12px",
            fontWeight: "bold",
          }}
        >
          Tech Blog
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          アラフォー薬剤師がITエンジニア転職を目指して、
          学習記録や個人開発を発信するブログ。
        </p>

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
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              marginBottom: "32px",
              transition: "0.2s",
            }}
          >
            <img
              src="/calender1.png"
              style={{
                width: "100%",
                display: "block",
              }}
            />

            <div style={{ padding: "24px" }}>
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                2026.05.03
              </p>

              <h2
                style={{
                  fontSize: "28px",
                  marginBottom: "16px",
                  lineHeight: "1.5",
                  color: "#111",
                }}
              >
                アラフォー薬剤師がITエンジニア転職を目指して、
                カレンダーアプリを作ってみた話
              </h2>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.8",
                }}
              >
                未経験からNext.jsとChatGPTを使って、
                家族用カレンダーアプリを作った記録。
                npmエラーやPowerShell地獄を越えながら、
                初めての個人開発に挑戦。
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}