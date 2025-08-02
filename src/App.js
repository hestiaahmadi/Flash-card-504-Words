import { useState } from "react";
import "./style.css";

const words = [
  {
    english: "Abandon",
    persian: "ترک کردن",
    korean: "버리다",
    id: "1",
  },
  {
    english: "Keen",
    persian: "تیز، مشتاق",
    korean: "날카로운",
    id: "2",
  },
  {
    english: "Jealous",
    persian: "حسود",
    korean: "질투하는",
    id: "3",
  },
  {
    english: "Tact",
    persian: "تدبیر، درایت",
     korean: "재치",
    id: "4",
  },
  {
    english: "Oath",
    persian: "سوگند، دشنام",
    korean: "맹세",
    id: "5",
  },
  {
    english: "Vacant",
    persian: "خالی، اشغال نشده",
    korean: "빈",
    id: "6",
  },
  {
    english: "Hardship",
    persian: "بی نوایی، سختی",
    korean: "고난",
    id: "7",
  },
  {
    english: "Gallant",
    persian: "شجاع، جنتلمن",
    korean: "용감한",
    id: "8",
  },
  {
    english: "Data",
    persian: "اطلاعات، داده ها",
    korean: "데이터",
    id: "9",
  },
  {
    english: "Unccustomed",
    persian: "غیر عادی، عادت نداشتن",
    korean: "예사롭지 않은",
    id: "10",
  },
  {
    english: "Bachelor",
    persian: "مرد مجرد، عزب",
    korean: "미혼 남자",
    id: "11",
  },
  {
    english: "Qulify",
    persian: "واجد شرایط شدن",
    korean: "자격을 얻다",
    id: "12",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <div className="flashcards">
      {words.map((word) => (
        <div
          key={word.id}
          onClick={() => handleClick(word.id)}
          className={word.id === selectedId ? "selected" : ""}
        >
          <p>{word.id === selectedId ? word.korean : word.english}</p>
        </div>
      ))}
    </div>
  );
}

