import { useState } from "react";
import "./style.css";

const words = [
  {
    english: "Abandon",
    persian: "ترک کردن",
    id: "1",
  },
  {
    english: "Keen",
    persian: "تیز، مشتاق",
    id: "2",
  },
  {
    english: "Jealous",
    persian: "حسود",
    id: "3",
  },
  {
    english: "Tact",
    persian: "تدبیر، درایت",
    id: "4",
  },
  {
    english: "Oath",
    persian: "سوگند، دشنام",
    id: "5",
  },
  {
    english: "Vacant",
    persian: "خالی، اشغال نشده",
    id: "6",
  },
  {
    english: "Hardship",
    persian: "بی نوایی، سختی",
    id: "7",
  },
  {
    english: "Gallant",
    persian: "شجاع، جنتلمن",
    id: "8",
  },
  {
    english: "Data",
    persian: "اطلاعات، داده ها",
    id: "9",
  },
  {
    english: "Unccustomed",
    persian: "غیر عادی، عادت نداشتن",
    id: "10",
  },
  {
    english: "Bachelor",
    persian: "مرد مجرد، عزب",
    id: "11",
  },
  {
    english: "Qulify",
    persian: "واجد شرایط شدن",
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
          <p>{word.id === selectedId ? word.persian : word.english}</p>
        </div>
      ))}
    </div>
  );
}
