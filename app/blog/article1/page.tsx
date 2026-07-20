export default function Article1() {
  return (
    <div
      style={{
        maxWidth: "860px",
        margin: "60px auto",
        padding: "50px",
        backgroundColor: "#1a1d25",
        color: "#f8fafc",
        borderRadius: "20px",
        lineHeight: "2",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <p
        style={{
          color: "#777",
          marginBottom: "10px",
          fontSize: "14px",
        }}
      >
        2026.05.03 ・ Next.js / React / 個人開発
      </p>

      <h1
        style={{
          fontSize: "42px",
          lineHeight: "1.5",
          marginBottom: "24px",
        }}
      >
        アラフォー薬剤師がITエンジニア転職を目指して、
        カレンダーアプリを作ってみた話
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#cbd5e1",
          lineHeight: "1.8",
          marginBottom: "50px",
        }}
      >
        未経験からNext.jsとChatGPTを使い、
        家族向けカレンダーアプリを作成した記録。
        npmエラーやPowerShell地獄を越えながら、
        初めての個人開発に挑戦した。
      </p>

      <img
        src="/calender1.png"
        style={{
          width: "100%",
          borderRadius: "16px",
          marginBottom: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #60a5fa",
          paddingLeft: "16px",
        }}
      >
        はじめに
      </h2>

      <p>
        妻とのシフト共有や子どもの行事管理がうまくいかず、
        「家族で使えるカレンダーが欲しい」と思ったのが最初のきっかけ。
      </p>

      <p>
        ただ、それ以上に大きかったのは
        <strong> ITエンジニアへ転職したかったこと。</strong>
      </p>

      <p>
        実務経験はゼロ。
        とにかく一度“開発”というものを体験したいと思い、
        模擬的でもいいからアプリを作ってみることにした。
      </p>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        なぜアプリを作ろうと思ったのか
      </h2>

      <ul
        style={{
          listStyleType:"disc",
          paddingLeft:"30px",
          marginBottom:"20px",
        }}
      >
        <li>実務経験がない</li>
        <li>開発の流れが分からない</li>
        <li>自分に向いているかも分からない</li>
      </ul>

      <p>
        つまり「何も分からない」状態。
        だからこそ、とりあえず一通りやってみることにした。
      </p>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        実際にやったこと
      </h2>

      <h3>① 環境構築</h3>
      <p>npmエラーやPowerShellの問題でいきなり詰まる。</p>

      <h3>② とりあえず動かす</h3>
      <p>ブラウザに表示された瞬間はかなり感動した。</p>

      <h3>③ カレンダー表示</h3>
      <p>ライブラリを使ってアプリっぽくなってきた。</p>

      <h3>④ 予定の追加・削除</h3>
      <p>少しずつ「使えるもの」になっていく感覚。</p>

      <h3>⑤ 色分け</h3>
      <p>家族ごとに色を分けて実用性アップ。</p>

      <img
        src="/calender2.png"
        style={{
          width: "100%",
          borderRadius: "16px",
          marginTop: "30px",
          marginBottom: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        完成したもの
      </h2>

      <p>
        シンプルではあるものの、
        家族の予定共有という目的は最低限実現できるレベルになった。
      </p>

      <ul
        style={{
          listStyleType:"disc",
          paddingLeft:"30px",
          marginBottom:"20px",
        }}
      >
        <li>カレンダー表示</li>
        <li>予定追加</li>
        <li>予定削除</li>
        <li>家族ごとの色分け</li>
      </ul>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        やってみて思ったこと
      </h2>

      <p>
        一番大きかったのは、
        「開発の流れ」が少し見えたこと。
      </p>

      <p>
        環境構築、実装、エラー対応、修正という一連の流れを、
        実際に体験できたのはかなり大きかった。
      </p>

      <p>
        また、「自分でも作れるんだ」という感覚が得られたのも収穫だった。
      </p>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        今後やりたいこと
      </h2>

      <ul
        style={{
          listStyleType:"disc",
          paddingLeft:"30px",
          marginBottom:"20px",
        }}
      >
        <li>入力UI化</li>
        <li>データ保存（DB連携）</li>
        <li>クラウド共有</li>
        <li>インフラ構築</li>
      </ul>

      <p>
        最終的には、
        フルスタックで運用できる状態を目指したい。
      </p>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        まとめ
      </h2>

      <p>
        未経験でも泥臭くやれば、
        動くものを作るところまでは到達できると感じた。
      </p>

      <p>
        もちろんコード理解やエラー理解はまだまだ不足しているが、
        実際に作ってみた経験はかなり大きい。
      </p>

      <p>
        これからも改善を続けながら、
        少しずつ「作れること」を増やしていきたい。
      </p>
    </div>
  );
}