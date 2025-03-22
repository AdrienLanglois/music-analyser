import React from 'react';
import * as Tone from "tone";
import styles from './keyPannel.module.css'
import * as Chord from '../../utils/chords'
import * as AudioSrc from '../../utils/audioSrc'

export default function KeyPannel({scale, chords, notes}){
    const chordsIndex = ["I", "II", "III", "IV", "V", "VI", "VII"];
    

    function getNotesWithOctave(){
        let octave = scale.startsWith("A") || scale.startsWith("B") || scale.startsWith("C") ? 3 : 4;
        let scaleNotes = notes.map(note => {
            if (note.startsWith("C")){
                octave ++;
            }
            return note + octave
        });
        scaleNotes.push(notes[0].startsWith('C') ? notes[0] + (octave + 1) : notes[0] + octave);
        return scaleNotes;
    }

    async function playScale() {
        await Tone.loaded(); // Wait until all samples are loaded
        await Tone.start(); // Ensure audio is enabled
        const now = Tone.now(); // Get current time

        getNotesWithOctave().forEach((note, index) => {
            AudioSrc.piano.triggerAttackRelease(note, "8n", now + index * 0.5);
        });
    }

    

    return(
        <div>
            <span className={styles.title}>{scale} Major</span><br />
            <span className={styles.subtitle}>Scale</span>

            <div className="flex flex-row justify-center items-center gap-4">
                <div className={styles.buttonContainer} onClick={playScale}>
                    <label className={styles.buttonLabel}>
                        <div className={styles.buttonIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24">
                            <path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z"></path>
                            </svg>
                        </div>
                    </label>
                </div>
                <div className='flex gap-3'>
                    {notes.map((note, index) => (
                        <span key={index} className={styles.text}> {note}</span>
                    ))}
                </div>
            </div>
                    <br />
            <span className={styles.subtitle} style={{marginTop:'2em'}}>Chords</span>
            <div className={styles.gridContainer}>
                {/* First row: Text labels */}
                {chordsIndex.map((label, index) => (
                    <div key={index} className={`${styles.romanNumbers} ${styles.text}`}>
                        {label}
                    </div>
                ))}

                {chords.map((chord, index) => (
                    <button key={index} className={styles.chordBtn} onClick={() => Chord.play(chord)}>
                        {chord}
                    </button>
                ))}
            </div>
        </div>
    )
}

