import Piano from "../../components/piano/piano";
import CircleOfFifth from '../../components/circleOfFifth/circleOfFifth';
import KeyPannel from '../../components/keyPannel/keyPannel';
import '../../utils.css'
import styles from './home.module.css'
import { useState } from "react";
import {keyNotes, play} from '../../utils/chords'
import Piano2 from "../../components/piano2/piano2";

export default function Home(){

    const chords = {
        "C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
        "G": ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
        "D": ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
        "A": ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
        "E": ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
        "B": ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
        "F": ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
        "Bb": ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"],
        "Eb": ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Ddim"],
        "Ab": ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gdim"],
        "Db": ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"],
        "Gb": ["Gb", "Abm", "Bbm", "B", "Db", "Ebm", "Fdim"],
        "Cb": ["B", "Dbm", "Ebm", "E", "Gb", "Abm", "Bdim"]
    };
    

      const [selectedNote, setSelectedNote] = useState("C");

    return (
        <div>
            <div style={{zIndex:10, position:"relative"}}>
                <h1 className={styles.title}>An Interactive <br />Circle of Fifths</h1>
                <p className={styles.websiteDesc}>
                    <span >A tool designed to help you study music theory and compose songs.</span>
                    <br />
                    <span className={styles.usage}>Click on any key on the Circle Of Fifth </span>to see it's scale and chords.
                </p>

            </div>
            <div className="flex items-center">
                <CircleOfFifth onSelectNote={setSelectedNote}/>
                <div className={styles.rightPannel}>
                    <KeyPannel scale={selectedNote} chords={chords[selectedNote]} notes={keyNotes[selectedNote]}/>
                    <Piano2/>                    
                </div>
            </div>
        </div>
    )
}