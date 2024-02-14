
import React from 'react'

export default function project2() {
    const styles={
        body:{
            backgroundImage: 'url("src/component/project2.js")',
        },
        h1:{
            color:'yellow',
            fontSize:'30px',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        ul:{
            color:'white',
            fontsize:'15px',
            fontWeight: 'bold',
            paddingLeft:'15%',
        }
        
    };
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>DRUG TARGET INTERACTION AND PREDICTION</h1>
      <ul style={styles.ul}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  )
}
