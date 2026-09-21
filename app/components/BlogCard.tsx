//BlogCardに渡すデータを決める
type BlogCardProps = {
  href: string;
  date: string;
  title: string;
  description: string;
  image?: string;
};

//上記で決めたデータを受け取り、return以下で画面に表示するものを返す
export default function BlogCard({
  href,
  date,
  title,
  description,
  image,
}: BlogCardProps) {
  return (
    <a
      href={href}
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
        {image && (
          <img
            src={image}
            style={{
              width: "100%",
              display: "block",
            }}
          />
        )}

        <div style={{ padding: "24px" }}>
          <p
            style={{
              color: "#888",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {date}
          </p>

          <h2
            style={{
              fontSize: "28px",
              marginBottom: "16px",
              lineHeight: "1.5",
              color: "#111",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
