import React, { useState } from "react";
import styles from "./about.module.css"
import Info from "./about/info/info";
import Skills from "./about/skills/skills";


function About() {
   const [count, setCount] = useState((Info))

   function addInfo() {
      setCount(Info)
   }

   function addSkills() {
      setCount(Skills)
   }

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <div className={styles.myButton} onClick={addInfo} >INFO</div>
            <div className={styles.myButton} onClick={addSkills} > SKILLS </div>
         </div>

         <div className={styles.main}>{count}</div>
      </div>
   )
}

export default About;