import Link from 'next/link';
import BlogCard from '../components/BlogCard';

export default function BlogPage() {
  const articles = [
    {
      href: '/blog/article1',
      date: '2026.05.03',
      title:
        'アラフォー薬剤師がITエンジニア転職を目指して、カレンダーアプリを作ってみた話',
      description:
        '未経験からNext.jsとChatGPTを使って、家族用カレンダーアプリを作った記録。npmエラーやPowerShell地獄を越えながら、初めての個人開発に挑戦。',
      image: '/calender1.png',
    },
    {
      href: '/blog/article2',
      date: '2026.08.15',
      title:
        'アラフォー薬剤師がAIに頼りながら家族カレンダーを作ってみた｜3か月の開発で何が変わったのか',
      description:
        'AIにかなり頼りながら家族カレンダーWebアプリを約3か月かけて開発。最初はコードの意味も十分に理解しないまま進めていたが、Vercelへの公開まで経験したことで、少しずつ技術への理解も深まってきた。',
    },
    {
      href: '/blog/article3',
      date: '2026.09.13',
      title: 'アラフォー薬剤師がAIと一緒にWebアプリの要件定義をやってみた',
      description:
        '「家族の予定を共有できるカレンダーが欲しい」という漠然としたアイデアをもとにAIと壁打ち。無料でできる範囲で「何をつくるか」決めていった。',
    },
  ];
  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '42px',
            marginBottom: '12px',
            fontWeight: 'bold',
          }}
        >
          Tech Blog
        </h1>

        <p
          style={{
            color: '#666',
            marginBottom: '40px',
            fontSize: '18px',
          }}
        >
          アラフォー薬剤師がITエンジニア転職を目指して、
          学習記録や個人開発を発信するブログ。
        </p>

        {articles.map((article) => (
          <BlogCard
            key={article.href}
            href={article.href}
            date={article.date}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
}
