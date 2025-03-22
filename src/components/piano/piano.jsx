import React from "react";
import * as Tone from "tone";
import styles from "./piano.module.css";
import {piano} from '../../utils/audioSrc'

const notes = [
  { note: "C4", key: "A", className: styles.c },
  { note: "C#4", key: "W", className: styles.cs },
  { note: "D4", key: "S", className: styles.d },
  { note: "D#4", key: "E", className: styles.ds },
  { note: "E4", key: "D", className: styles.e },
  { note: "F4", key: "F", className: styles.f },
  { note: "F#4", key: "T", className: styles.fs },
  { note: "G4", key: "G", className: styles.g },
  { note: "G#4", key: "Y", className: styles.gs },
  { note: "A4", key: "H", className: styles.a },
  { note: "A#4", key: "U", className: styles.as },
  { note: "B4", key: "J", className: styles.b },
];

const Piano = () => {

  const playNote = (note) => {
    piano.triggerAttackRelease(note, "8n");
  };

  return (
    <ul className={`${styles.set} ${styles.piano}`}>
      {notes.map(({ note, key, className }) => (
        <li
          key={note}
          className={`${className} ${styles.note} ${note.includes("#") ? styles.black : styles.white}`}
          onClick={() => playNote(note)}
        >
          {note.slice(0,-1)}
        </li>
      ))}
    </ul>
  );
};

export default Piano;