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

function About() {
  return (
    <section id="About" className="container">
      <h2>關於作者Jane</h2>
      <div style={{ height: '500px', backgroundColor: 'gray' }}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">

            <p>介绍媽媽</p>
          </div>
          <div className="about-image"></div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
