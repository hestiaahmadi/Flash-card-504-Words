import { useState } from "react";
import "./style.css";
import { lessons } from "./lessons";

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
  const [lessonId, setLessonId] = useState("1");

  function handleClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  const currentLesson = lessons.find((l) => l.id === lessonId);

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
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="arabic">Arabic</option>
          <option value="example1">Example English</option>
          <option value="example2">Example Chinese</option>
          <option value="example3">Example Spanish</option>
          <option value="example4">Example French</option>
          <option value="example5">Example Arabic</option>
        </select>
      </label>

      {/*select lesson*/}
      <label>
        <select
          className="lessons"
          value={lessonId}
          onChange={(e) => setLessonId(e.target.value)}
        >
          {lessons.map((lesson) => (
            <option key={lesson.id} value={lesson.id}>
              {lesson.title}
            </option>
          ))}
        </select>
      </label>

      {/*show title lesson*/}
      <h2>{currentLesson.title}</h2>

      {/*flash cards*/}
      <div className="flashcards">
        {currentLesson.words.map((word) => (
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



