// import React from 'react';


// // const Works = () => {
// //   return (
// //     <div>
// //       <h3 id="Works">系列作品</h3>
// //       <div style={{ height: '500px', backgroundColor: 'gray' }}>
// //         四塊Card 麵包 蛋糕 餅乾 教學
// //       </div>
// //     </div>
// //   );
// // };

// // export default Works;

// // function Works() {
// //   return (
// //       <section id="Works" className="container">
// //           <div className="container">
// //               <h2>系列作品</h2>
// //               <div style={{ height: '500px', backgroundColor: 'gray' }}>
// // //         四塊Card 麵包 蛋糕 餅乾 教學
// // //       </div>
              
// //           </div>
// //       </section>
// //   );
// // }

// // export default Works;









import ImageViewer from './Collection';
import './Collection.css';
import breadco from '../picture/breadco.jpg'
import cookieco from '../picture/cookieco.jpg'
import cakeco from '../picture/cakeco.jpg'
import teachco from '../picture/teachco.jpg'
function Work() {
    
    const imageData = [
        {
            id: 1,
            image: breadco,
            title: 'Image 1',
            description: 'Description for Image 1',
            datatitle:'麵包系列',
        },
        {
            id: 2,
            image: cookieco,
            title: 'Image 2',
            description: 'Description for Image 2',
            datatitle:'餅乾系列',
        },

        {
            id: 3,
            image: cakeco,
            title: 'Image 3',
            description: 'Description for Image 3',
            datatitle:'蛋糕系列',
        },

        {
            id: 4,
            image: teachco,
            title: 'Image 4',
            description: 'Description for Image 4',
            datatitle:'烘培教學',
        },
       
    ];

    return (
        <section id="Works" className="container">
            <div className="work-container">
                <h2>系列作品</h2>
                <div className="withcontainer" style={{ height: '500px', backgroundColor: '#FFFFF4' }}>
                    {imageData.map((data) => (
                        <div className="image-card-container" key={data.id}>
                        <ImageViewer
                            key={data.id}
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            
                            />
                              <p style={{ color: '#000000' }}>{data.datatitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;
