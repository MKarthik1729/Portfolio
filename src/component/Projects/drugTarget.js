import React from 'react'
import img1 from './drug1.webp'
import img2 from './drug2.webp'

export default function drug() {
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
      // marginLeft : '5%',
      width:'400px',
      height:'300px',
      marginBottom:'5%',
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
      marginLeft:'-12%'
    },
    // part:{
    //   marginLeft:'15%'
    // }
    
};
return (
<div style={styles.body}>
  <h1 style={styles.h1}>DRUG TARGET INTERACTION AND PREDICTION USING ML
</h1>
  <div style={styles.part1}>
    <div style={styles.first}>
      <ul style={styles.ul}>
        <li>A project based on Machine learning utilizing Graph Convolutional <br/>Neural Networks (GCNNs) .</li><br/>
        <li>The main moto is to predict the interactions between the drugs and <br/>their target proteins.</li><br/>
        <li>For prediction we followed 3 major steps namely Webscrapping,Preprocessing,Model designing.</li>
      </ul>
    </div>
    <div style={styles.part}>
      <img style={styles.pic1} src={img1} alt="Profile Photo" />
    </div>
  </div>
  <div style={styles.part2}>
    <div>
      <img style={styles.pic2} src={img2} alt="Profile Photo" />
    </div>
    <div style={styles.second}>
      <ul style={styles.ul}>
        <li>Used Biosnap dataset and binary classification for predicting the interaction between the drug and the target.</li><br/>
        <li>The accuracy of drug-target interaction predicted by our ML model is 83.5.</li>
      </ul>
      <h4 style={styles.h4}>Github link</h4>
    </div>
  </div>
</div>
)
}
