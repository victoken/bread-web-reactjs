import React from 'react';

// const About = () => {
//   return (
//     <div>
//       <h3 id="About">關於作者Jane</h3>
//       <div style={{ height: '500px', backgroundColor:  'marigold' }}>
//         放一張圖片介紹媽媽
//       </div>
//     </div>
//   );
// };

// export default About;

// function About() {
//   return (
//       <section id="About" className="container">
//           <div className="container">
//               <h2>關於作者Jane</h2>
//               <div style={{ height: '500px', backgroundColor: 'gray' }}>
// //         放一張圖片介紹媽媽
// //       </div>
              
//           </div>
//       </section>
//   );
// }

// export default About;


import './About.css'; 
import aboutpic from '../picture/aboutpic.jpg'
function About() {
  return (
    <section id="About" className="container">
      <h2>關於作者Jane</h2>
      <div style={{ height: '500px', backgroundColor: '#FFED97' }}>
      <div className="container">
        <div className="about-content">
          
            <p className="about-text">
              介紹媽媽
            
            
            
            </p>
          
           
          <img src={aboutpic}className="about-image"/>
          
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
