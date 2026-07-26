"use client";

//ReactのuseStateとuseEffectを使用
import { useState, useEffect } from "react";

//カレンダー表示ライブラリ
import { Calendar, momentLocalizer } from "react-big-calendar";

//日付操作ライブラリ
import moment from "moment";

//日本語表記に
import "moment/locale/ja";

//カレンダーの標準CSS
import "react-big-calendar/lib/css/react-big-calendar.css";

//momentを日本語設定に変更
moment.locale("ja");

//react-big-calendarでmomentを利用する設定
const localizer = momentLocalizer(moment);

//====================
//型定義（TypeScript）
//====================

//カレンダーに登録する予定のデータ構造
//「予定」は必ず以下の4つの情報を持つ
type CalendarEvent = {
  title: string; //予定名
  start: Date; //開始日時
  end: Date; //終了日時
  person: string; //担当者（自分・妻など）
};

//カレンダーで選択した日付範囲のデータ構造
//日付をクリックしたときやドラッグで範囲選択したときに使用する
type SelectedSlot = {
  start: Date; //選択開始日時
  end: Date; //選択終了日時
};

export default function Home() {

  //===========================
  //useState(画面の状態を保存)
  //===========================
  
  //家族一覧(名前と色をまとめて管理)
  const persons = [
  { name: "自分", color: "#3174ad" },
  { name: "妻", color: "#ef4444" },
  { name: "長男", color: "#22c55e" },
  { name: "長女", color: "#f59e0b" },
  ];
  
  // 初回表示用のサンプルデータ
  const sampleEvents = [
  {
    title: "React学習",
    start: new Date(2026, 6, 11, 19, 0),
    end: new Date(2026, 6, 11, 21, 0),
    person: "自分",
  },
  {
    title: "早番",
    start: new Date(2026, 6, 12, 8, 30),
    end: new Date(2026, 6, 12, 17, 30),
    person: "妻",
  },
  {
    title: "サッカー",
    start: new Date(2026, 6, 13, 17, 0),
    end: new Date(2026, 6, 13, 18, 30),
    person: "長男",
  },
  {
    title: "ピアノ教室",
    start: new Date(2026, 6, 14, 16, 0),
    end: new Date(2026, 6, 14, 17, 0),
    person: "長女",
  },
  ];

  //カレンダーの予定一覧を保存
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  
  //入力フォームの予定名
  const [title, setTitle] = useState("");
  
  //入力フォームの担当者
  const [person, setPerson] = useState("自分");
  
  //選択中の日付
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  
  //編集中の予定
  const [editingEvent, setEditingEvent] = useState<CalendarEvent | null>(null);
  
  //クリックされた予定
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  //表示する家族
  const [visiblePersons, setVisiblePersons] = useState(
    persons.map((person) => person.name)
  );

  //=====================
  //LocalStorageから予定を読み込み
  //=====================
  
  useEffect(() => {
  const savedEvents = localStorage.getItem("events");    //保存済みデータ取得

    if (savedEvents) {
      //保存済みデータを読み込む
      const parsedEvents = JSON.parse(savedEvents);     //JSON文字列⇒JavaScriptオブジェクトへ変換

      //start/endをData型へ戻す
  
      setEvents(
        parsedEvents.map((event: any) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }))
       );
    } else {
    // 初回アクセスならサンプルデータを表示
    setEvents(sampleEvents);
    }
  }, []);

  //====================
  //events変更時に自動保存  
  //====================

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  //====================
  //日付選択
  //====================

const handleSelectSlot = ({ start, end }) => {
  setSelectedSlot({ start, end });     //選択した日付を保存
};

  //====================
  //予定クリック
  //====================

const handleSelectEvent = (event) => {
        setSelectedEvent(event);     //選択した予定を保存
      };
  

  //====================
  //編集開始
  //====================

  const handleEdit = () => {
    if (!selectedEvent) return;     //予定未選択なら終了

    setEditingEvent(selectedEvent);     //編集対象として設定
    setTitle(selectedEvent.title);      //入力フォームへ現在地をセット
    setPerson(selectedEvent.person);    //入力フォームへ現在地をセット
  };

  //====================
  //予定削除
  //====================

  const handleDelete = () => {
    if (!selectedEvent) return;     //予定未選択なら終了

    if (confirm("この予定を削除しますか？")) {
      setEvents(events.filter((e) => e !== selectedEvent));     //選択中の予定以外を残す
      setSelectedEvent(null);     //選択状態削除
    }
  };
  
  // サンプルデータに戻す
  const resetToSampleData = () => {
    if (!confirm("サンプルデータに戻しますか？現在の予定は削除されます。")) {
      return;
    }

    setEvents(sampleEvents);
    localStorage.setItem("events", JSON.stringify(sampleEvents));

    setSelectedEvent(null);
    setSelectedSlot(null);
    setEditingEvent(null);
    setTitle("");
  };

  // 全予定を削除
  const clearAllEvents = () => {
    if (!confirm("すべての予定を削除しますか？")) {
      return;
    }

    setEvents([]);
    localStorage.removeItem("events");

    setSelectedEvent(null);
    setSelectedSlot(null);
    setEditingEvent(null);
    setTitle("");
  };

  //====================
  //予定の色分け
  //====================

  const eventStyleGetter = (event) => {
    // 担当者情報を取得
    const personInfo = persons.find(
      (person) => person.name === event.person
    );

    // 見つからなければ青色
    const backgroundColor = personInfo?.color ?? "#3174ad";

    return {
      style: {
        backgroundColor,
        color: "white",
      },
    };
  };
  
  //====================
  //画面表示
  //====================
  
  // 選択中の担当者情報を取得
  const selectedPersonInfo = selectedEvent
  ? persons.find((person) => person.name === selectedEvent.person)
  : null;

  // フィルター後の予定一覧
  const filteredEvents = events.filter((event) =>
  visiblePersons.includes(event.person)
  );

  //====================
  //画面表示
  //====================

  return (
    
    //ページ全体
    <div 
      style={{ 
        minHeight: "calc(100vh - 200px)", 
        padding: "20px" 
      }}
    >
    
      {/* タイトルエリア */}
      <h1
        style={{
          fontSize:"32px",
          marginBottom:"10px",
          color:"#111",
        }}
      >
        家族カレンダー  
      </h1>  
      
      {/* 説明文 */}
      <p
        style={{
          color:"#666",
          marginBottom:"20px",
        }}
      >
        家族の予定を共有するためのカレンダーアプリ  
      </p>  

    {/*入力フォーム*/}
    <div
      style={{
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      marginBottom: "20px",
      display: "flex",
      gap: "12px",
      alignItems: "center",
      flexWrap: "wrap",
      }}
    >

  {/*予定名入力*/} 
  <input
    type="text"
    placeholder="予定名"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    style={{
      padding: "10px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      miniWidht: "250px",
    }}
  />
  
  {/*担当者選択*/}
  <select
    value={person}
    onChange={(e) => setPerson(e.target.value)}
    style={{
      padding: "10px 14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
    }}
  >
   {persons.map((person) => (
    <option
      key={person.name}
      value={person.name}
    >
      {person.name}
    </option>
   ))} 
  </select>
  
  {/*予定追加/更新ボタン*/}
  <button
    onClick={() => {
      if (!title) {
        alert("予定名を入力してください");
        return;
      }

      if (!editingEvent && !selectedSlot) {
        alert("先にカレンダーの日付を選択してください");
        return;
      }

      if (editingEvent) {
        setEvents(
          events.map((e) =>
            e === editingEvent
              ? {
                  ...e,
                  title,
                  person,
                }
              : e
         )
      );

      setEditingEvent(null);
  } else {
    setEvents([
      ...events,
      {
        title,
        start: selectedSlot.start,
        end: selectedSlot.end,
        person,
      },
    ]);
  }

      setTitle("");
      setSelectedSlot(null);
    }}
    style={{
      padding: "10px 20px",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
    >
      {editingEvent ? "予定更新" :"予定追加"}
    </button>
    <div
      style={{
      display: "flex",
      gap: "10px",
      marginLeft: "auto",
    }}
  >
    <button
      onClick={resetToSampleData}
      style={{
        padding: "10px 16px",
        backgroundColor: "#10b981",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
    📄 サンプルデータ
    </button>

     <button
       onClick={clearAllEvents}
       style={{
         padding: "10px 16px",
         backgroundColor: "#ef4444",
         color: "white",
         border: "none",
         borderRadius: "8px",
         cursor: "pointer",
         fontWeight: "bold",
       }}
     >
    🗑 全削除
     </button>
    </div>
    </div>
    
    {/* 家族フィルター */}
    <div
    style={{
      backgroundColor: "#fff",
      padding: "16px 20px",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      marginBottom: "20px",
    }}
    >
    <h3
      style={{
        marginTop: 0,
        marginBottom: "12px",
        color: "#111827",
      }}
    >
    表示する家族
    </h3>

    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      {persons.map((person) => (
        <label
          key={person.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
          }}
        >
        <input
          type="checkbox"
          checked={visiblePersons.includes(person.name)}
          onChange={() => {
            if (visiblePersons.includes(person.name)) {
              setVisiblePersons(
                visiblePersons.filter((p) => p !== person.name)
              );
            } else {
              setVisiblePersons([
                ...visiblePersons,
                person.name,
              ]);
            }
          }}
        />

            <span
              style={{
                color: person.color,
                fontWeight: "bold",
              }}
            >
              {person.name}
            </span>
          </label>
        ))}
      </div>
    </div>
    
    {/*選択中の日付表示*/}
    {selectedSlot && (
      <div
        style={{
          backgroundColor: "#eff6ff",
          border: "1px solid #bfdbfe",
          borderRadius: "10px",
          padding: "12px 16px",
          marginBottom: "20px",
          color: "#1e40af",
          fontWeight: "bold",
        }}
      >
      📅 選択中の日付：
      {selectedSlot.start.toLocaleDateString("ja-JP",{
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      })}
      </div>
    )}

    {/*選択中の予定表示*/}  
    {selectedEvent && (
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
          marginTop: 0,
          marginBottom: "12px",
          color: "#111827",
          }}
        >
         📌 選択中の予定
        </h3>

        {/*タイトル*/}
        <p>
          <strong>タイトル：</strong>
          {selectedEvent.title}
        </p>
        
        {/*担当者*/}
        <p>
          <strong>担当者：</strong>

          <span
            style={{
            display: "inline-block",
            marginLeft: "8px",
            padding: "4px 10px",
            borderRadius: "999px",
            color: "white",
            fontWeight: "bold",
            backgroundColor: selectedPersonInfo?.color ?? "#3174ad",
            }}
        >
            {selectedEvent.person}
          </span>
        </p>

        <div
          style={{
          display: "flex",
          gap: "10px",
          }}
        >
          {/*編集ボタン*/}
          <button
            onClick={handleEdit}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
         >
            ✏️ 編集
         </button>

          {/*削除ボタン*/}
          <button
            onClick={handleDelete}
            style={{
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            cursor: "pointer",
            fontWeight: "bold",
            }}
          >
           🗑️ 削除
          </button>

        </div>
      </div>
    )}  
    
    {/*カレンダー本体*/}
    <div style={{ height: "700px"}}>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventStyleGetter}
        messages={{
        next: "次へ",
        previous: "前へ",
        today: "今日",
        month: "月",
        week: "週",
        day: "日",
        agenda: "予定",
        }}
      />
      </div>
    </div>
  );
};