export default function Article3() {
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
        2026.09.13 ・ AI駆動開発 / 要件定義 / 個人開発
      </p>

      <h1
        style={{
          fontSize: "42px",
          lineHeight: "1.5",
          marginBottom: "24px",
        }}
      >
        アラフォー薬剤師がAIと一緒にWebアプリの要件定義をやってみた
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#cbd5e1",
          lineHeight: "1.8",
          marginBottom: "50px",
        }}
      >
        「家族の予定を共有できるカレンダーが欲しい」という
        漠然としたアイデアをもとにAIと壁打ち。
        無料でできる範囲で「何をつくるか」決めていった。
      </p>

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
        今回からは、家族カレンダーアプリの開発過程を細かく振り返ってみたい。
      </p>

      <p>最初のテーマは「要件定義」である。</p>

      <p>とは言っても、「要件定義書」のようなものを作成したわけではなく、</p>

      <p>「こんなアプリ」を作りたいとAIに伝えただけである。</p>

      <p>そこから何度かAIと壁打ちを行い、必要最低限の機能を決定した。</p>

      <p>
        開発途中においても、AIと相談しながらその都度実装する機能を決定していった。
      </p>

      <p>今思うと一般的な「要件定義」ではなかったと思うが、その過程を</p>

      <p>振り返ってみる。</p>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        まずは必要最低限の機能を
      </h2>

      <p>まず、AIに</p>

      <p>
        <strong>
          「仕事のシフトや子供の行事を共有できるカレンダーアプリを作りたい」
        </strong>
      </p>

      <p>と伝えてみた。</p>

      <p>するとまずはこれだけとAIが最小機能を提案してくれた。</p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <li>カレンダー表示</li>
        <li>予定の登録・編集</li>
        <li>共有（ログイン or 招待）</li>
      </ul>

      <p>上記のうち、まずは「カレンダー表示」、「予定の登録」を実装した。</p>

      <p>予定の編集と共有は、後回しにすることにした。</p>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        AIに提案された技術構成
      </h2>

      <p>必要最低限の機能とともに提案された技術構成は以下の通りである。</p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <li>フロントエンド：React（Next.js）</li>
        <li>バックエンド：Firebase</li>
        <li>認証：Firebase Auth</li>
        <li>データベース：Firestore</li>
      </ul>

      <p>
        他の記事でも書いたように、この時点では提案された技術に対する理解はほとんどなく、何ができる技術なのか多少調べた程度であった。
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
        開発中に順次要件を追加・変更
      </h2>

      <p>
        開発を進めていくと、追加で実装したい機能が出てきたので、その都度AIに相談しながら追加していった。
      </p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginTop: "15px",
          marginBottom: "15px",
          fontSize: "24px",
        }}
      >
        <li>家族ごとに色分けしたい</li>
      </ul>

      <p>「登録した予定が誰の予定なのか、すぐわかるようにしたい」</p>
      <p>という考えから、登録時に誰の予定なのか選択できるようにした。</p>
      <p>
        さらに、家族ごとに表示する色を変えることで、より直感的に誰の予定なのかがわかりやすいようにした。
      </p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginTop: "15px",
          marginBottom: "15px",
          fontSize: "24px",
        }}
      >
        <li>登録した予定を保存したい</li>
      </ul>
      <p>登録した予定を保存できなければカレンダーとして機能しない。</p>
      <p>
        登録した予定を保存しておきたいが、当初AIに提案されたFirebaseをいきなり実装するのは、かなりハードルが高いと感じた。
      </p>
      <p>
        「Webアプリを一つ完成させて公開する」ことを優先するために、AIに他の方法はないか相談したところ、ブラウザにデータを保存できるLocalStorageを使う方法を提案してくれた。
      </p>
      <p>
        これにより、登録した予定の保存も可能となったが、「予定が共有できる」という機能の実装は今回は見送ることとなった。
      </p>
      <p>
        今後、データを共有できる仕組みについて検討し、実装できればと考えている。
      </p>
      <p>
        また、バックエンドや認証機能についても今回は実装を見送ることとした。
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
      <p>このように実際に開発しながら機能を追加していった。</p>
      <p>
        また、予定の保存で紹介したように実装を見送るという判断も経験することができた。
      </p>
      <p>
        今後の開発では、要件定義書の作成もAIに相談しながらやってみようと考えている。
      </p>
    </div>
  );
}
