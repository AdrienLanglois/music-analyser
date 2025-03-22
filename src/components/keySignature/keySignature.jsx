import React from "react";
import styles from './keySignature.module.css';

export default function KeySignature(){

    return(
        <div>
            <g transform="translate(260, 0)">
                <use width="30" xlinkHref="#staff"></use>
                    <use width="2" xlinkHref="#sharp" className={styles.cfSharp1}></use>
                    <use width="2" xlinkHref="#sharp" className={styles.cfSharp2}></use>
                    <use width="2" xlinkHref="#sharp" className={styles.cfSharp3}></use>
            </g>

            
        </div>
    )
}