import React from 'react'
import img1 from './library1.webp'
import img2 from './library2.webp'

export default function library() {
  const styles={
    body:{
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
      marginLeft : '-1%%',
      width:'400px',
      height:'300px',
      marginBottom:'15%',
      border: '2px solid white',
      boxShadow: '0 0 90px cyan',
    },
    pic2:{
      width:'500px',
      height:'300px',
      border: '2px solid cyan',
      boxShadow: '0 0 90px rgb(252, 254, 254)',
      
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
  <h1 style={styles.h1}>LIBRARY MANAGEMENT SYSTEM</h1>
  <div style={styles.part1}>
    <div style={styles.first}>
      <ul style={styles.ul}>
        <li>a terminal-based project that utilized a MySQL database using OOPS.</li><br/>
        <li>"OOPS" stands for "Object-Oriented Programming System" <br/>or "Object-Oriented Programming Paradigm." </li><br/>
        <li> Used four pillars of OOPS named as Abstraction , Polymorphism,Inheritance,Encapsulation.</li>
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
        <li>Offers information about a COLLECTION OF BOOKS and allows you to perform MATHEMATICAL op- erations such as counting specific books , total number of books in a partcular category etc.</li><br/>
        <li>can search books based on category , author etc.</li>
      </ul>
      <h4 style={styles.h4}>Github link</h4>
    </div>
  </div>
</div>
)
}