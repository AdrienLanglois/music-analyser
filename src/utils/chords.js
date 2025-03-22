import * as Tone from 'tone';
import { piano } from './audioSrc';


const encodedNotes = {
    "C": 0, "C#": 1, "Db": 1, "D": 2, "D#": 3, "Eb": 3, 
    "E": 4, "F": 5, "F#": 6, "Gb": 6, "G": 7, "G#": 8, 
    "Ab": 8, "A": 9, "A#": 10, "Bb": 10, "B": 11, "Cb": 11
};
const allNotes = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
  ];
const intervals = {
    major: [4, 3],
    minor: [3, 4],
    aug: [4, 4],
    dim: [3,3]
}

export const keyNotes = {
    "C":  ["C", "D", "E", "F", "G", "A", "B"],
    "G":  ["G", "A", "B", "C", "D", "E", "F#"],
    "D":  ["D", "E", "F#", "G", "A", "B", "C#"],
    "A":  ["A", "B", "C#", "D", "E", "F#", "G#"],
    "E":  ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "B":  ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    "F":  ["F", "G", "A", "Bb", "C", "D", "E"],
    "Bb": ["Bb", "C", "D", "Eb", "F", "G", "A"],
    "Eb": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
    "Ab": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    "Db": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    "Gb": ["Gb", "Ab", "Bb", "B", "Db", "Eb", "F"], // Cb is enharmonic to B
    "Cb": ["B", "Db", "Eb", "E", "Gb", "Ab", "Bb"]  // Fb is enharmonic to E
};

export async function play(chord) {
    await Tone.start();
    const notes = getChordNotes(chord)
    console.log(notes)
    const notesWithOctave = notes.map(note => note+'4')
    piano.triggerAttackRelease(notesWithOctave, "4n"); // G major chord
}

export function sharpToFlat(notes){
    const sharpToFlat = {
        "C#": "Db",
        "D#": "Eb",
        "F#": "Gb",
        "G#": "Ab",
        "A#": "Bb",
    };
    
    return notes.map(note => sharpToFlat[note] || note);
}

export function getChordNotes(chord){
    const regex = /[A-Z](b|#)?/g;
    const firstNote = chord.match(regex)[0];

    const encodedFirstNote = encodedNotes[firstNote];

    const intervals = getInterval(chord)
    const secondNoteIndex = (encodedFirstNote + intervals[0]) % allNotes.length
    const thirdNoteIndex = (encodedFirstNote + intervals[0] + intervals[1]) % allNotes.length

    return [firstNote, allNotes[secondNoteIndex], allNotes[thirdNoteIndex]]
}

function getInterval(chord){
    if (chord.includes("dim")) return intervals.dim;
    if (chord.includes("aug")) return intervals.aug;
    if (chord.includes("m")) return intervals.minor;
    return intervals.major;
}
