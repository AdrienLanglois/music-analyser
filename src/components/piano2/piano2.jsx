import React from "react";
import styles from './piano2.module.css'
import {guitar, piano} from '../../utils/audioSrc'


export default function Piano2(){
    const notes = [
        "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
        "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4",
        "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5"
      ];
      
      const keys = [
        { type: styles.white, id: "01", note: notes[0] },
        { type: styles.black, id: "02", note: notes[1] },
        { type: styles.white, id: "03", note: notes[2] },
        { type: styles.black, id: "04", note: notes[3] },
        { type: styles.white, id: "05", note: notes[4] },
        { type: styles.black, id: "06", note: notes[5] },
        { type: styles.white, id: "07", note: notes[6] },
        { type: styles.white, id: "08", note: notes[7] },
        { type: styles.black, id: "08", note: notes[8] },
        { type: styles.white, id: "09", note: notes[9] },
        { type: styles.black, id: "10", note: notes[10] },
        { type: styles.white, id: "11", note: notes[11] },
        { type: styles.white, id: "12", note: notes[12] },
        { type: styles.black, id: "13", note: notes[13] },
        { type: styles.white, id: "14", note: notes[14] },
        { type: styles.black, id: "15", note: notes[15] },
        { type: styles.white, id: "16", note: notes[16] },
        { type: styles.black, id: "17", note: notes[17] },
        { type: styles.white, id: "18", note: notes[18] },
        { type: styles.white, id: "19", note: notes[19] },
        { type: styles.black, id: "11", note: notes[20] },
        { type: styles.white, id: "20", note: notes[21] },
        { type: styles.black, id: "21", note: notes[22] },
        { type: styles.white, id: "22", note: notes[23] },
      ];

      const playNote = (note) => {
        console.log(note)
          piano.triggerAttackRelease(note, "8n");
        };
    
      return (
        <div className={styles.container}>
          <div className={styles.pianoContainer}>
            <ul className={styles.pianoKeysList}>
              {keys.map((key, index) => (
                <li key={index} className={key.type} data-list={key.id} onClick={() => playNote(key.note)}></li>
              ))}
            </ul>
          </div>
        </div>
      );
    
}