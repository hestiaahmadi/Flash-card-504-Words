import { useState } from "react";
import "./style.css";

const words = [
  {
    english: "Abandon",
    chinese: "放弃",
    hindi: "छोड़ देना",
    spanish: "Abandonar",
    french: "abandonner",
    arabic: "تَرَكَ",
    bengali: "পরিত্যাগ করা",
    russian: "бросить",
    portuguese: "abandonar",
    urdu: "ترک کرنا",
    id: "1",
  },
  {
    english: "Keen",
    chinese: "敏锐的",
    hindi: "उत्सुक",
    spanish: "Interesada",
    french: "Passionnée",
    arabic: "حَادّ",
    bengali: "তীক্ষ্ণ",
    russian: "острый",
    portuguese: "afiado",
    urdu: "پُرجوش",
    id: "2",
  },
  {
    english: "Jealous",
    chinese: "嫉妒的",
    hindi: "ईर्ष्या",
    spanish: "celosa",
    french: "Jalouse",
    arabic: "غَيُور",
    bengali: "ঈর্ষান্বিত",
    russian: "ревнивый",
    portuguese: "ciumento",
    urdu: "حسد کرنے والا",
    id: "3",
  },
  {
    english: "Tact",
    chinese: "机智",
    hindi: "चातुर्य",
    spanish: "tacto",
    french: "Tact",
    arabic: "لَبَاقَة",
    bengali: "বিবেচনা",
    russian: "такт",
    portuguese: "tato",
    urdu: "حکمت",
    id: "4",
  },
  {
    english: "Oath",
    chinese: "誓言",
    hindi: "शपथ",
    spanish: "juramento",
    french: "Serment",
    arabic: "قَسَم",
    bengali: "শপথ",
    russian: "клятва",
    portuguese: "juramento",
    urdu: "قسم",
    id: "5",
  },
  {
    english: "Vacant",
    chinese: "空缺",
    hindi: "खाली",
    spanish: "vacante",
    french: "Vacante",
    arabic: "شَاغِر",
    bengali: "শূন্য",
    russian: "пустой",
    portuguese: "vago",
    urdu: "خالی",
    id: "6",
  },
  {
    english: "Hardship",
    chinese: "困难",
    hindi: "कठिनाई",
    spanish: "privación",
    french: "Épreuves",
    arabic: "مَشَقَّة",
    bengali: "দুঃখ",
    russian: "трудность",
    portuguese: "dificuldade",
    urdu: "مشکل",
    id: "7",
  },
  {
    english: "Gallant",
    chinese: "英勇",
    hindi: "वीर",
    spanish: "galante",
    french: "Galante",
    arabic: "شُجَاع",
    bengali: "ভদ্র",
    russian: "храбрый",
    portuguese: "cavalheiro",
    urdu: "بہادر",
    id: "8",
  },
  {
    english: "Data",
    chinese: "数据",
    hindi: "डेटा",
    spanish: "datos",
    french: "Données",
    arabic: "بَيَانَات",
    bengali: "তথ্য",
    russian: "данные",
    portuguese: "dados",
    urdu: "معلومات",
    id: "9",
  },
  {
    english: "Unccustomed",
    chinese: "不习惯",
    hindi: "अनभ्यस्त",
    spanish: "no acostumbrado",
    french: "Inhabituelle",
    arabic: "غَيْرُ مُعْتَاد",
    bengali: "অচেনা",
    russian: "непривычный",
    portuguese: "desacostumado",
    urdu: "ناواقف",
    id: "10",
  },
  {
    english: "Bachelor",
    chinese: "学士",
    hindi: "अविवाहित पुरुष",
    spanish: "bachiller",
    french: "Célibataire",
    arabic: "أَعْزَب",
    bengali: "অবিবাহিত পুরুষ",
    russian: "холостяк",
    portuguese: "solteiro",
    urdu: "کنوارا",
    id: "11",
  },
  {
    english: "Qualify",
    chinese: "资格",
    hindi: "योग्यता",
    spanish: "calificar",
    french: "Qualifier",
    arabic: "يَتَأَهَّل",
    bengali: "যোগ্য হওয়া",
    russian: "квалифицироваться",
    portuguese: "qualificar",
    urdu: "اہل ہونا",
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
  const [targetLanguage, setTargetLanguage] = useState();

  function handleClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <div>
      {/*menu*/}
      <label>
        <select
          className="languages"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="Nothing">Choice Language</option>
          <option value="chinese">Chinese</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="arabic">Arabic</option>
          <option value="bengali">Bengali</option>
          <option value="russian">Russian</option>
          <option value="portuguese">Portuguese</option>
          <option value="urdu">Urdu</option>
        </select>
      </label>

      {/*flash cards*/}
      <div className="flashcards">
        {words.map((word) => (
          <div
            key={word.id}
            onClick={() => handleClick(word.id)}
            className={word.id === selectedId ? "selected" : ""}
          >
            {/*show choisen language*/}
            <p>
              {word.id === selectedId
                ? word[targetLanguage] || "Not Translation"
                : word.english}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

