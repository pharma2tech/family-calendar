export default function Article2() {
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
        2026.08.15 ・ AI駆動開発 / Next.js / React / TypeScript / 個人開発
      </p>

      <h1
        style={{
          fontSize: "42px",
          lineHeight: "1.5",
          marginBottom: "24px",
        }}
      >
        アラフォー薬剤師がAIに頼りながら家族カレンダーを作ってみた｜
        3か月の開発で何が変わったのか
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#cbd5e1",
          lineHeight: "1.8",
          marginBottom: "50px",
        }}
      >
        AIにかなり頼りながら家族カレンダーWebアプリを約3か月かけて開発。
        最初はコードの意味も十分に理解しないまま進めていたが、
        Vercelへの公開まで経験したことで、少しずつ技術への理解も深まってきた。
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
        以前の記事で、ITエンジニアへの転職を目指して家族カレンダーアプリを作り始めたことを書いた。
      </p>

      <p>
        開発を始めたときの自分は、Webアプリ開発についてほとんど何も分かっていなかった。
      </p>

      <p>
        Next.js、React、TypeScript。
      </p>

      <p>
        名前は聞いたことがあっても、それぞれが何をしているのかを説明できる状態ではない。
      </p>

      <p>
        では、そんな状態でどうやってアプリを作ったのか。
      </p>

      <p>
        答えはシンプルで、<strong>AIにかなり頼った。</strong>
      </p>

      <p>
        とりあえず、AIに「こういうアプリを作りたい」と伝え、コードを書いてもらい、
        そのコードをほぼ言われるがままに使った。
      </p>

      <p>
        エラーが出れば、そのエラーをAIに伝える。
      </p>

      <p>
        するとAIが「ここを修正してください」と教えてくれる。
      </p>

      <p>
        その通りに修正して、また動かしてみる。
      </p>

      <p>
        そんなことを繰り返しながら、少しずつアプリを形にしていった。
      </p>

      <p>
        つまり今回の開発では、
      </p>

      <p>
        <strong>「技術を理解してから作る」</strong>
      </p>

      <p>という順番ではなかった。</p>

      <p>
        むしろ、
      </p>

      <p>
        <strong>「まずAIを使って作る。その後で理解する」</strong>
      </p>

      <p>
        という順番だった。
      </p>

      <p>
        今回は、そんな形で約3か月開発してきた家族カレンダーアプリについて、
        開発初期から現在までに何が変わったのかを振り返ってみたい。
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
        そもそも、なぜAIに頼ったのか
      </h2>

      <p>
        今回の開発目的は、単純にWebアプリを完成させることだけではない。
      </p>

      <p>
        アラフォー薬剤師からITエンジニアへの転職を目指す中で、
        実際のWebアプリ開発がどのように進んでいくのかを経験してみたかった。
      </p>

      <p>
        しかし、プログラミング経験がほとんどない状態で、
        いきなりすべてを自分で実装するのは難しい。
      </p>

      <p>そこでAIを使うことにした。</p>

      <p>
        最初から、
      </p>

      <p>
        「Reactの勉強をして、TypeScriptを勉強して、Next.jsを勉強して、
        それからアプリを作ろう」ではなく、
      </p>

      <p>
        <strong>「まず一つ動くものを作ってみよう」</strong>
      </p>

      <p>と考えた。</p>

      <p>そのためにAIをかなり積極的に利用した。</p>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        実際の開発は「AIに聞く」の繰り返しだった
      </h2>

      <p>例えば、</p>

      <p>
        「家族の予定を登録できるカレンダーを作りたい」
      </p>

      <p>とAIに伝える。</p>

      <p>するとコードが提示される。</p>

      <p>そのコードを使って実行してみる。</p>

      <p>動けば次の機能を追加する。</p>

      <p>エラーが出れば、エラーメッセージをそのままAIに伝える。</p>

      <p>そして、</p>

      <p>「このエラーは何？」</p>

      <p>「どう直せばいい？」</p>

      <p>と聞く。</p>

      <p>
        AIから修正方法を教えてもらい、その通りに修正する。
      </p>

      <p>この繰り返しだった。</p>

      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "30px",
          borderLeft: "6px solid #333",
          paddingLeft: "16px",
        }}
      >
        「理解してから作る」ではなく「作ってから理解する」
      </h2>

      <p>
        ここが今回の開発で一番大きなポイントだったと思う。
      </p>

      <p>一般的なプログラミング学習では、</p>

      <p>
        <strong>技術を学ぶ → コードを書く → アプリを作る</strong>
      </p>

      <p>という流れをイメージする。</p>

      <p>自分のもそうだった。</p>

      <p>しかし、ひとまず動くものを作りたかったので、</p>

      <p>
        <strong>
          AIに相談する → コードを書く・修正する → アプリを動かす
          → エラーに遭遇する → AIに聞く → 少しずつコードの意味を理解する
        </strong>
      </p>

      <p>
        という流れでやってみることにした。
      </p>

      <p>
        例えば、最初はReactの
        <code
          style={{
            backgroundColor: "#2a2f3a",
            padding: "3px 7px",
            borderRadius: "5px",
          }}
        >
          useState
        </code>
        が何をしているのかも、深く理解していたわけではない。
      </p>

      <p>
        しかし、実際にカレンダーの予定を管理するために使ってみると、
      </p>

      <p>
        「なぜこの変数をuseStateで管理する必要があるのか？」
      </p>

      <p>
        という疑問が出てくる。
      </p>

      <p>
        そこからReactのstateについて少し調べてみる。
      </p>

      <p>TypeScriptも同じだった。</p>

      <p>
        最初から型の重要性を理解していたわけではない。
      </p>

      <p>実際に開発していると、</p>

      <pre
        style={{
          backgroundColor: "#11151c",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
        Type error: ...
      </pre>

      <p>というエラーが出てくる。</p>

      <p>それを修正していく中で、</p>

      <p>
        「そもそもTypeScriptは何のために型を指定しているのか？」
      </p>

      <p>と考えるようになる。</p>

      <p>
        つまり、自分の場合は
        <strong>
          実際に使ってみて、後から理解していく。
        </strong>
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
        最初は「予定を追加できるだけ」のカレンダーだった
      </h2>

      <p>
        開発初期のアプリは非常にシンプルだった。
      </p>

      <p>
        カレンダーを表示して、日付を選択し、予定名と担当者を入力する。
      </p>

      <p>それだけでも、自分にとっては大きな一歩だった。</p>

      <p>担当者も最初は、</p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginBottom: "20px",
        }}
      >
        <li>自分</li>
        <li>妻</li>
        <li>長男</li>
      </ul>

      <p>
        の3人。
      </p>

      <p>
        まずは「家族の予定をカレンダーに登録できる」という最低限の形を作ることを優先した。
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
        約3か月でここまで変わった
      </h2>

      <p>
        そこから少しずつ機能を追加していった。
      </p>

      <p>現在は、</p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginBottom: "20px",
        }}
      >
        <li>長女の追加</li>
        <li>担当者ごとの色分け</li>
        <li>日付選択時の表示</li>
        <li>選択した予定の詳細表示</li>
        <li>予定の編集</li>
        <li>予定の削除</li>
        <li>担当者の色付きタグ</li>
        <li>家族フィルター</li>
        <li>LocalStorageへの保存</li>
        <li>ブラウザ再読み込み後の予定復元</li>
        <li>初回アクセス時のサンプルデータ</li>
        <li>TypeScriptによる型付け</li>
        <li>Git / GitHubによるバージョン管理</li>
        <li>README</li>
        <li>ブログページ</li>
        <li>Vercelへのデプロイ</li>
      </ul>

      <p>
        開発初期と現在を比較すると、かなり違うアプリになっている。
      </p>

      <div style={{ overflowX: "auto", marginTop: "30px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "650px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #444", padding: "10px" }}>
                機能・項目
              </th>
              <th style={{ border: "1px solid #444", padding: "10px" }}>
                最初のローカル版
              </th>
              <th style={{ border: "1px solid #444", padding: "10px" }}>
                Vercel公開時点
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                カレンダー表示
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                予定追加
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                担当者
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                自分・妻・長男
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                自分・妻・長男・長女
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                予定編集
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                予定削除
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                予定詳細表示
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                家族フィルター
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                LocalStorage保存
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                予定の再読み込み
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                サンプルデータ
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                TypeScript
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                最小限
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                型付けを改善
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                Git / GitHub
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                README
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                ブログページ
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "10px" }}>
                Vercel公開
              </td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>―</td>
              <td style={{ border: "1px solid #444", padding: "10px" }}>○</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        最初は「カレンダーを表示して予定を追加する」だけだったものが、
        少しずつ予定を管理できるアプリへ変わっていった。
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
        LocalStorageを使って予定を保存
      </h2>

      <p>
        個人的に大きかったのが、LocalStorageによるデータ保存だった。
      </p>

      <p>
        開発初期は、ブラウザを再読み込みすると登録した予定が消えてしまった。
      </p>

      <p>
        当然、このままでは実際には使いにくい。
      </p>

      <p>
        そこでAIに相談しながらLocalStorageを使った保存機能を追加した。
      </p>

      <p>現在は、</p>

      <p>
        <strong>予定を追加する</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>LocalStorageに保存</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>ブラウザを再読み込みする</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>保存された予定を読み込む</strong>
      </p>

      <p>
        という仕組みになっている。
      </p>

      <p>
        もちろん、これはデータベースを使った本格的なデータ保存ではない。
      </p>

      <p>
        また、LocalStorageなので、現時点では家族全員が同じ予定を共有できるわけでもない。
      </p>

      <p>
        それでも、Webアプリで「データを保存する」という仕組みを実際に経験できたことは大きかった。
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
        TypeScriptのエラーにもかなり苦しめられた
      </h2>

      <p>
        開発を進める中では、当然エラーもたくさん出た。
      </p>

      <p>例えば、TypeScriptの型エラー。</p>

      <p>
        あるときは、
        <code
          style={{
            backgroundColor: "#2a2f3a",
            padding: "3px 7px",
            borderRadius: "5px",
          }}
        >
          CalendarEvent
        </code>
        と定義していた型名を間違えて記述してしまい、ビルド時にエラーが発生した。
      </p>

      <p>
        また、
        <code
          style={{
            backgroundColor: "#2a2f3a",
            padding: "3px 7px",
            borderRadius: "5px",
          }}
        >
          miniWidht
        </code>
        という単純なスペルミスもあった。
      </p>

      <p>
        正しくは、
        <code
          style={{
            backgroundColor: "#2a2f3a",
            padding: "3px 7px",
            borderRadius: "5px",
          }}
        >
          minWidth
        </code>
        だった。
      </p>

      <p>
        さらに、「selectedSlotがnullかもしれない」というTypeScriptからの指摘もあった。
      </p>

      <p>
        最初は、「なんでこんなことでエラーになるんだ？」と思った。
      </p>

      <p>
        しかし、エラーを修正していくうちに、
      </p>

      <p>
        <strong>
          TypeScriptがコードの間違いや危険な状態を、実際に実行する前に教えてくれている
        </strong>
      </p>

      <p>
        ということが少しずつ分かってきた。
      </p>

      <p>
        これは、単にTypeScriptの知識を本で勉強するだけでは、
        なかなか実感できなかったことだと思う。
      </p>

      <p>
        実際にエラーに遭遇したからこそ、
      </p>

      <p>
        「この型チェックにはこういう意味があるのか」
      </p>

      <p>
        と理解できるようになった。
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
        GitHubを使うようになった
      </h2>

      <p>
        開発初期は、GitやGitHubについてもほとんど意識していなかった。
      </p>

      <p>
        しかし、開発が進むにつれてコードの変更も増えてきた。
      </p>

      <p>
        そこでGitを使って変更履歴を管理し、GitHubにコードを保存するようにした。
      </p>

      <p>例えば今回も、</p>

      <pre
        style={{
          backgroundColor: "#11151c",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
        Improve TypeScript typing
      </pre>

      <p>
        というcommitを作成してGitHubへpushしている。
      </p>

      <p>
        最初は「コードを保存する場所」くらいの認識だったが、
        実際に使ってみることで、
      </p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginBottom: "20px",
        }}
      >
        <li>変更履歴を残す</li>
        <li>どこを修正したのか確認する</li>
        <li>開発の区切りを作る</li>
        <li>GitHubにソースコードを公開する</li>
      </ul>

      <p>
        といった使い方が少しずつ分かってきた。
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
        そしてVercelへ公開
      </h2>

      <p>
        最終的には、Vercelを利用してアプリをインターネット上に公開した。
      </p>

      <p>開発初期は、</p>

      <pre
        style={{
          backgroundColor: "#11151c",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
        localhost:3000
      </pre>

      <p>
        で自分のPCから見るだけだった。
      </p>

      <p>それが、</p>

      <pre
        style={{
          backgroundColor: "#11151c",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
{`GitHub
   ↓
Vercel
   ↓
インターネット上に公開`}
      </pre>

      <p>
        というところまで進んだ。
      </p>

      <p>
        公開前には
        <code
          style={{
            backgroundColor: "#2a2f3a",
            padding: "3px 7px",
            borderRadius: "5px",
          }}
        >
          npm run build
        </code>
        を実行した。
      </p>

      <p>
        途中ではTypeScriptのエラーも発生したが、一つずつ修正していった。
      </p>

      <p>最終的には、</p>

      <pre
        style={{
          backgroundColor: "#11151c",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
{`✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization`}
      </pre>

      <p>
        となり、ビルドを成功させることができた。
      </p>

      <p>
        そしてGitHubとVercelを連携し、無事に公開まで完了した。
      </p>

      <p>
        開発初期には、自分のPCの中でしか動かなかったアプリが、
        実際にインターネット上からアクセスできるようになった。
      </p>

      <p>
        これは今回の開発の中でも、かなり大きな達成感があった。
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
        AIに頼ったからこそ、次の課題が見えてきた
      </h2>

      <p>
        今回の開発を振り返ると、AIにはかなり頼った。
      </p>

      <p>
        自分一人では書けなかったコードもたくさんある。
      </p>

      <p>
        AIにコードを書いてもらい、エラーが出たらAIに修正方法を聞いた。
      </p>

      <p>
        正直、
        <strong>コードの意味を十分に理解しないまま先に進んだ部分もかなりある。</strong>
      </p>

      <p>だからこそ、現在は次の段階に進もうとしている。</p>

      <p>
        それは、
      </p>

      <p>
        <strong>「自分が使った技術を理解する」</strong>
      </p>

      <p>ということ。</p>

      <p>例えば、</p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginBottom: "20px",
        }}
      >
        <li>Reactのコンポーネントとは何なのか</li>
        <li>stateとは何なのか</li>
        <li>useStateやuseEffectは何をしているのか</li>
        <li>TypeScriptの型付けにはどんな意味があるのか</li>
        <li>Next.jsはReactと何が違うのか</li>
        <li>LocalStorageはどういう仕組みなのか</li>
        <li>GitとGitHubはなぜ必要なのか</li>
      </ul>

      <p>
        といったことを、実際に自分が書いたコードを題材にして学んでいく。
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
        「AIに作ってもらった」で終わらせない
      </h2>

      <p>
        今回の開発で一番大切にしたいのはここかもしれない。
      </p>

      <p>
        AIを使えば、プログラミング初心者でもある程度動くアプリを作ることができる。
      </p>

      <p>
        これは今回、自分自身が実際に経験した。
      </p>

      <p>
        しかし、
      </p>

      <p>
        <strong>
          「AIにコードを書いてもらった」＝「自分がWebアプリ開発を理解した」
        </strong>
      </p>

      <p>ではない。</p>

      <p>
        AIが書いたコードを使ってアプリが動いたとしても、
        そのコードが何をしているのか分からなければ、
        少し複雑な問題が発生したときに対応できない。
      </p>

      <p>
        今回の開発でも、実際にエラーが発生するたびにそのことを感じた。
      </p>

      <p>
        だからこそ、今後は、
      </p>

      <p>
        <strong>AIに頼って作る</strong>
      </p>

      <p>だけではなく、</p>

      <p>
        <strong>AIに頼って作ったものを、自分で理解する</strong>
      </p>

      <p>
        という段階に進みたいと思っている。
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
        これからは開発工程そのものを振り返る
      </h2>

      <p>
        今回の約3か月間では、AIを使いながら一つのWebアプリを形にすることを優先した。
      </p>

      <p>その結果、</p>

      <p>
        <strong>要件定義・設計</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>実装</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>テスト・QA</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>修正・改善</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>Git / GitHub</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>ドキュメント化</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>Vercelへのデプロイ</strong>
      </p>

      <p>
        という一連の流れを経験することができた。
      </p>

      <p>
        ただ、まだ「経験した」だけで、すべてを理解できているわけではない。
      </p>

      <p>
        そこで今後は、この開発工程を一つずつ振り返っていく。
      </p>

      <p>例えば、</p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginBottom: "20px",
        }}
      >
        <li>そもそもこのアプリの要件をどう決めたのか？</li>
        <li>なぜNext.jsを使ったのか？</li>
        <li>Reactのstateは実際に何をしていたのか？</li>
        <li>TypeScriptの型付けは開発にどう役立ったのか？</li>
        <li>Vercelへのデプロイでは何が起きていたのか？</li>
      </ul>

      <p>
        といったことを、実際に自分が作ったアプリを題材にして整理していく。
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
        今回の家族カレンダー開発では、最初から技術を理解していたわけではない。
      </p>

      <p>
        むしろ、
      </p>

      <p>
        <strong>AIにかなり頼った。</strong>
      </p>

      <p>
        時にはAIに言われるがままコードを書いた。
      </p>

      <p>
        コードの意味を十分に理解しないまま先に進んだこともある。
      </p>

      <p>
        それでも、とにかく一つのWebアプリを形にすることを優先した。
      </p>

      <p>その結果、最初はローカル環境で予定を追加するだけだったアプリが、</p>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "30px",
          marginBottom: "20px",
        }}
      >
        <li>予定の編集・削除</li>
        <li>家族フィルター</li>
        <li>LocalStorageによる保存</li>
        <li>TypeScriptによる型付け</li>
        <li>Git / GitHubによるバージョン管理</li>
        <li>READMEやブログによるドキュメント化</li>
        <li>Vercelへのデプロイ</li>
      </ul>

      <p>
        まで進めることができた。
      </p>

      <p>そして今、アプリが形になったからこそ、</p>

      <p>
        <strong>「このコードは何をしているんだろう？」</strong>
      </p>

      <p>
        <strong>「なぜこの技術を使っているんだろう？」</strong>
      </p>

      <p>
        という疑問が出てきた。
      </p>

      <p>これからは、その疑問を一つずつ解消していきたい。</p>

      <p>今回の開発を、</p>

      <p>
        <strong>AIに頼りながらまず作る</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>実際に問題にぶつかる</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>後から技術を理解する</strong>
      </p>

      <p>↓</p>

      <p>
        <strong>開発工程そのものを学ぶ</strong>
      </p>

      <p>
        という学習の過程として記録していく。
      </p>

      <p>
        「AIを使えば簡単にアプリが作れる」という話でもなければ、
        「AIに頼るのは邪道」という話でもない。
      </p>

      <p>
        プログラミング未経験に近いアラフォー薬剤師が、
        AIにかなり頼りながら実際にWebアプリを作ってみたらどうなったのか。
      </p>

      <p>
        そして、そこから何を学んでいくのか。
      </p>

      <p>
        その過程を、これからもこのブログに残していこうと思う。
      </p>
    </div>
  );
}