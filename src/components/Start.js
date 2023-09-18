import React from 'react';

import './Headers.css';
import { Link } from 'react-scroll'
import breadwebcover from '../picture/breadwebcover.jpg'

// {/* <header className="Cover">
//   <div className="Welcome">
//     歡迎光臨來到某網站
//   </div>
//   {/* 其他内容 */}
// </header> */}



function Start() {
    return (
        <section id="Start" className="container">
            <div className="container">
                <h2>首頁</h2>
                <div style={{ height: '620px', backgroundColor: 'gray' }}
                className="start-change"
                >
                <img
                    src={breadwebcover}
                    style={{ width: '1020px', height: '620px' }}
                    className="image-change"
                    
/>

         </div>
                
            </div>
        </section>
    );
  }
  
  export default Start;