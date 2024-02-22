import img1 from './health1.png'
import img2 from './health2.webp'
import React from 'react'

export default function HealthStack() {
    const styles={
        body:{
            // backgroundColor:'blue',
            marginLeft:'5%'
        },
        h1:{
            color:'yellow',
            fontSize:'40px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom:'5%',
            textDecoration:'underline',
            textDecorationColor: 'white',
            textUnderlineOffset:'15%'
        },
        ul:{
            color:'white',
            fontSize:'25px',
            fontWeight: 'bold',
            paddingLeft:'15%',
            fontWeight :'bold',
        },
        part1:{
          display:'flex'
        },
        part2:{
          display:'flex'
        },
        pic1:{
          marginLeft : '5%',
          width:'500px',
          height:'300px',
          marginBottom:'15%',
          marginRight:'-10%',
          border: '2px solid white',
          boxShadow: '0 0 90px cyan',
        },
        pic2:{
          width:'500px',
          height:'300px',
          border: '2px solid cyan',
          boxShadow: '0 0 90px white',
        },
        second:{
          paddingLeft:'2%'
        },
        h4:{
          paddingTop:'3%',
          paddingLeft:'65%',
          color:'cyan'
        },
        first:{
          marginLeft:'-10%'
        }
        
    };
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>HEALTH STACK</h1>
      <div style={styles.part1}>
        <div style={styles.first}>
          <ul style={styles.ul}>
            <li>Developed an e-commerce platform with admin portal using 
                MERN Stack.</li><br/>
            <li>used MongoDb(M),Express js(E),React js(R),Node js(N).</li><br/>
            <li> An e-commerce website for Online medicine , pharmaceutical, <br/><br/> Healthcare products shopping
              like Amazon,Flipkart,etc.</li>
          </ul>
        </div>
        <div>
          <img style={styles.pic1} src={img1} alt="Profile Photo" />
        </div>
      </div>
      <div style={styles.part2}>
        <div>
          <img style={styles.pic2} src={img2} alt="Profile Photo" />
        </div>
        <div style={styles.second}>
          <ul style={styles.ul}>
            <li>Implemented user management and support system for
                sellers and consumers.</li><br/>
            <li>features including FAQ's,login ,register,product rating,product wishlist etc.</li>
          </ul>
          <h4 style={styles.h4}>Github link</h4>
        </div>
      </div>
    </div>
  )
}

