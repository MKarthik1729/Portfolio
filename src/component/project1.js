
import React from 'react'

export default function project1() {
    const styles={
        body:{
            backgroundImage: 'url("src/component/merns.jpeg")',
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
      <h1 style={styles.h1}>HEALTH STACK</h1>
      <ul style={styles.ul}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  )
}
