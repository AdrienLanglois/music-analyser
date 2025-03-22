import React, { useState } from "react";
import * as Tone from "tone";
import styles from "./circleOfFifth.module.css";
import { getChordNotes, keyNotes, sharpToFlat } from "../../utils/chords";



export default function CircleOfFifth({ onSelectNote }){
  const [cfRotation, setCfRotation] = useState(0)
  const [textColors, SetTextColors] = useState({
    "C":styles.rootChord,
    "G":styles.majorChord,
    "D":styles.minorChord,
    "A":styles.minorChord,
    "E":styles.minorChord,
    "B":styles.dimChord,
    "Gb":styles.unusedChord,
    "Db":styles.unusedChord,
    "Ab":styles.unusedChord,
    "Eb":styles.unusedChord,
    "Bb":styles.unusedChord,
    "F":styles.majorChord
  })
  const notes = ["C", "G", "D", "A", "E", "B", "Gb", "Db", "Ab", "Eb", "Bb", "F"];

  function handleScaleClick(note){
    onSelectNote(note)
    rotateCf(note)

    const chordNotes = sharpToFlat(keyNotes[note]);
    const major = [ chordNotes[3], chordNotes[4]];
    const minor = [chordNotes[1], chordNotes[2], chordNotes[5]];
    const root = chordNotes[0];
    const diminished = chordNotes[6];

    let newTextColors = textColors;
    notes.forEach(n=>{
        newTextColors[n] = styles.unusedChord;
    })
    major.forEach(n => newTextColors[n] = styles.majorChord);
    minor.forEach(n => newTextColors[n] = styles.minorChord);
    newTextColors[diminished] = styles.dimChord;
    newTextColors[root] = styles.rootChord;
    console.log(newTextColors);

    SetTextColors(newTextColors);
  }

  function rotateCf(note){
    const index = notes.indexOf(note);
    const degrees = -(index * 30);
    setCfRotation(degrees)
  }

  return (
    
    <div>
      <svg id="app" className={styles.cf} viewBox="0 0 300 300" transform={`rotate(${cfRotation})`}>
          <g className={styles.cfArcs}>
            <path d="M250.00,150.00A100,100,0,0,1,235.72,201.50L210.00,186.05A70,70,0,0,0,220.00,150.00Z" onClick={() => handleScaleClick("A")} className={textColors.A == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M220.00,150.00A70,70,0,0,1,210.00,186.05L184.29,170.60A40,40,0,0,0,190.00,150.00Z"></path>
          </g>
         
          

          <text x="235" y="153" className={`${styles.cfTextMiddle} ${textColors.A}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(90, 235, 153)">
            A
          </text>         
          <text x="205" y="152" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(90, 205, 152)">
            F<tspan baselineShift="super">#</tspan>m
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M236.60,200.00A100,100,0,0,1,198.48,237.46L183.94,211.22A70,70,0,0,0,210.62,185.00Z" onClick={() => handleScaleClick("E")} className={textColors.E == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M210.62,185.00A70,70,0,0,1,183.94,211.22L169.39,184.98A40,40,0,0,0,184.64,170.00Z"></path>
          </g>
          
          <text x="223.6121593216773" y="195.5" className={`${styles.cfTextMiddle} ${textColors.E}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(120, 223.6121593216773, 195.5)">
            E
          </text>
          <text x="197.63139720814414" y="179.5" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(120, 197.63139720814414, 179.5)">
            C<tspan baselineShift="super">#</tspan>m
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M200.00,236.60A100,100,0,0,1,148.25,249.98L148.78,219.99A70,70,0,0,0,185.00,210.62Z" onClick={() => handleScaleClick("B")} className={textColors.B == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M185.00,210.62A70,70,0,0,1,148.78,219.99L149.30,189.99A40,40,0,0,0,170.00,184.64Z"></path>
          </g>
          
          <text x="192.5" y="226.61215932167727" className={`${styles.cfTextMiddle} ${textColors.B}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(150,192.5, 226.61215932167727)">
            B
          </text>
          <text x="177.5" y="199.6313972081441" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(150,177.5, 199.6313972081441)" >
            G<tspan baselineShift="super">#</tspan>m
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M150.00,250.00A100,100,0,0,1,98.496,235.72L113.95,210.00A70,70,0,0,0,150.00,220.00Z" onClick={() => handleScaleClick("Gb")} className={textColors["Gb"] == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M150.00,220.00A70,70,0,0,1,113.95,210.00L129.40,184.29A40,40,0,0,0,150.00,190.00Z"></path>
          </g>
          
          <text x="150" y="238" className={`${styles.cfTextMiddle} ${textColors.Gb}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(180,150, 238)">
            G<tspan baselineShift="super">b</tspan>
          </text>
          <text x="150" y="207" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(180,150, 207)">
            D<tspan baselineShift="super">#</tspan>m
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M100.00,236.60A100,100,0,0,1,62.538,198.48L88.777,183.94A70,70,0,0,0,115.00,210.62Z" onClick={() => handleScaleClick("Db")} className={textColors["Db"] == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M115.00,210.62A70,70,0,0,1,88.777,183.94L115.02,169.39A40,40,0,0,0,130.00,184.64Z"></path>
          </g>
          
          <text x="107.50000000000003" y="226.6121593216773" className={`${styles.cfTextMiddle} ${textColors.Db}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(-150,107.5, 226)">
            D<tspan baselineShift="super">b</tspan>
          </text>
          <text x="122.50000000000001" y="199.63139720814414" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(-150,122.5, 200)">
            B<tspan baselineShift="super">b</tspan>m
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M63.397,200.00A100,100,0,0,1,50.015,148.25L80.011,148.78A70,70,0,0,0,89.378,185.00Z" onClick={() => handleScaleClick("Ab")} className={textColors["Ab"] == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M89.378,185.00A70,70,0,0,1,80.011,148.78L110.01,149.30A40,40,0,0,0,115.36,170.00Z"></path>
          </g>
          
          <text x="76.3878406783227" y="195.5" className={`${styles.cfTextMiddle} ${textColors.Ab}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(-120,76, 195)">
            A<tspan baselineShift="super">b</tspan>
          </text>
          <text x="102.36860279185586" y="179.5" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(-120,102, 180)">
            Fm
            </text>
          
          <g className={styles.cfArcs}>
            <path d="M50.000,150.00A100,100,0,0,1,64.283,98.496L89.998,113.95A70,70,0,0,0,80.000,150.00Z" onClick={() => handleScaleClick("Eb")} className={textColors["Eb"] == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M80.000,150.00A70,70,0,0,1,89.998,113.95L115.71,129.40A40,40,0,0,0,110.00,150.00Z"></path>
          </g>
          
          <text x="65" y="153" className={`${styles.cfTextMiddle} ${textColors.Eb}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,65, 153)">
            E<tspan baselineShift="super">b</tspan>
          </text>
          <text x="95" y="152" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,95, 152)">
            Cm
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M63.397,100.00A100,100,0,0,1,101.52,62.538L116.06,88.777A70,70,0,0,0,89.378,115.00Z" onClick={() => handleScaleClick("Bb")} className={textColors["Bb"] == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M89.378,115.00A70,70,0,0,1,116.06,88.777L130.61,115.02A40,40,0,0,0,115.36,130.00Z"></path>
          </g>
          
          <text x="76.38784067832272" y="110.5" className={`${styles.cfTextMiddle} ${textColors.Bb}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(-60,76, 110.5)">
            B<tspan baselineShift="super">b</tspan>
          </text>
          <text x="102.36860279185588" y="124.5" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(-60,102, 124.5)">
            Gm
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M100.00,63.397A100,100,0,0,1,151.75,50.015L151.22,80.011A70,70,0,0,0,115.00,89.378Z" onClick={() => handleScaleClick("F")} className={textColors["F"] == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M115.00,89.378A70,70,0,0,1,151.22,80.011L150.70,110.01A40,40,0,0,0,130.00,115.36Z"></path>
          </g>
          
          <text x="107.49999999999997" y="79.38784067832273" className={`${styles.cfTextMiddle} ${textColors.F}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(-30,107, 79)">
            F
          </text>
          <text x="122.49999999999997" y="104.36860279185589" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(-30,122, 104)">
            Dm
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M150.00,50.000A100,100,0,0,1,201.50,64.283L186.05,89.998A70,70,0,0,0,150.00,80.000Z" onClick={() => handleScaleClick("C")} className={textColors.C == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M150.00,80.000A70,70,0,0,1,186.05,89.998L170.60,115.71A40,40,0,0,0,150.00,110.00Z"></path>
          </g>
          
          <text x="149.99999999999997" y="68" className={`${styles.cfTextMiddle} ${textColors.C}`}>C</text>
          <text x="150" y="97" className={styles.cfTextInner}>Am</text>
          
          <g className={styles.cfArcs}>
            <path d="M200.00,63.397A100,100,0,0,1,237.46,101.52L211.22,116.06A70,70,0,0,0,185.00,89.378Z" onClick={() => handleScaleClick("G")} className={textColors.G == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M185.00,89.378A70,70,0,0,1,211.22,116.06L184.98,130.61A40,40,0,0,0,170.00,115.36Z"></path>
          </g>
          
          <text x="192.5" y="79.38784067832272" className={`${styles.cfTextMiddle} ${textColors.G}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(30,192, 79)">
            G
          </text>
          <text x="177.5" y="104.36860279185588" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(30,177, 104)">
            Em
          </text>
          
          <g className={styles.cfArcs}>
            <path d="M236.60,100.00A100,100,0,0,1,249.98,151.75L219.99,151.22A70,70,0,0,0,210.62,115.00Z" onClick={() => handleScaleClick("D")} className={textColors.D == styles.unusedChord ? styles.cfUnusedArc : ""}></path>
            <path d="M210.62,115.00A70,70,0,0,1,219.99,151.22L189.99,150.70A40,40,0,0,0,184.64,130.00Z"></path>
          </g>
          
          <text x="223.61215932167727" y="110.49999999999997" className={`${styles.cfTextMiddle} ${textColors.D}`} textAnchor="middle" dominantBaseline="middle" transform="rotate(60,223.5, 110)">
            D
          </text>
          <text x="197.6313972081441" y="124.49999999999997" className={styles.cfTextInner} textAnchor="middle" dominantBaseline="middle" transform="rotate(60,195.5, 124)">
            Bm
          </text>
          </svg>



      <svg style={{ position: "absolute", width: 0, height: 0}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="staff" viewBox="0 0 203.18 132.08">  
            <path style={{ stroke: "var(--light)", strokeWidth: "1pt", fill: "none" }} d="m89.253 345.53 177.07.72m-175.63 21.24 177.07.72m-176.35 21.05 177.07.72m-178.87 21.5 177.07.72m-176.35 21.06 177.07.72" transform="matrix(1.1144 0 0 1 -96.674 -331.49)"/>
            <path fill="var(--light)" transform="matrix(.907 0 0 .91953 -8.112 -4.363)" d="M39.542 140.49c.022 8.47 18.816 7.39 18.753-6.57.025-13.61-17.954-89.748-18.155-104.31-.211-11.556 6.122-24.509 11.548-24.368 4.299.141 8.338 9.873 8.316 21.986.326 39.173-33.981 36.641-33.981 63.409 0 17.303 14.363 21.873 21.545 21.873 24.32-.16 20.239-29.381 4.734-29.381-9.141-.328-17.139 12.076-5.06 22.359-20.403-8.977-9.467-30.685 6.692-30.848 21.545.163 25.299 39.658-6.366 39.828-18.933.16-26.931-16.488-26.768-29.546 0-25.135 37.051-39.662 36.561-60.881 0-13.384-13.873-7.345-14.2 14.201.327 13.384 17.628 84.056 17.465 94.996 0 22.52-28.89 15.18-28.89 3.75.163-16.32 16.975-4.73 11.752-4.24-4.081 7.18-3.946 7.74-3.946 7.74z"/>
            <path fill="var(--light)" transform="matrix(.907 0 0 .91953 -8.112 -4.363)" d="M47.37 133.39c0 3.79-3.161 6.87-7.054 6.87s-7.053-3.08-7.053-6.87 3.16-6.86 7.053-6.86 7.054 3.07 7.054 6.86z"/>
          </symbol>
          <symbol id="sharp" viewBox="0 0 6 19">
            <path fill="var(--light)" d="M1.906 12.154V7.45l2-.552v4.68l-2 .576zm3.938-1.138-1.375.394V6.73l1.375-.384V4.402l-1.375.384V.004h-.563v4.927l-2 .575V.856h-.531v4.827L0 6.068v1.948l1.375-.384v4.671L0 12.686v1.94l1.375-.384v4.755h.531v-4.925l2-.55v4.626h.563v-4.8l1.375-.385v-1.947z"/>
          </symbol>
          <symbol id="flat" viewBox="0 0 .908 2.512">
            <path fill="var(--light)" d="m.216 1.696-.004.264v.044c0 .088.004.176.016.264.18-.152.372-.32.372-.556 0-.132-.056-.268-.172-.268-.124 0-.208.12-.212.252zm-.168.716L0 .032A.212.212 0 0 1 .108 0c.036 0 .076.012.108.032l-.028 1.38a.577.577 0 0 1 .364-.136c.208 0 .356.192.356.408 0 .32-.344.468-.588.676-.06.052-.096.152-.18.152-.052 0-.092-.044-.092-.1z"/>
          </symbol>
        </defs>
      </svg>
    </div>
      
    
  );
};

