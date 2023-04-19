import React from 'react';
import '../style/aboutstyle.css';
import Layout from '../component/Layout/Layout';
import Aboutbg from '../images/Aboutbg.jpg';
const About = () => {
  return (
    <>
     <Layout>
     <div className="about" style={
          {backgroundImage:`url(${Aboutbg})`}
        }>
        <div className="about_heading">
          <h1>
           Welcome To Art Upgrad 
          </h1>
        </div>
        <div className="about_p">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo iusto ratione sunt molestias voluptatibus consequatur repellendus quod dolorem vel libero at quis labore mollitia, modi asperiores reiciendis. Sit quos unde quo mollitia veniam exercitationem eaque commodi vel facilis fuga expedita dolorum dolor voluptatem omnis officiis reprehenderit, provident ut. Dolores nobis eligendi iure mollitia voluptatem! Esse, dolor cum odio temporibus optio doloremque ullam sequi culpa, tempora mollitia veritatis minima! Explicabo laboriosam debitis minima tenetur voluptates quam quibusdam suscipit error, reiciendis laudantium atque ducimus voluptatem iure. Fuga reiciendis, veniam numquam sapiente quisquam, dignissimos accusamus consequuntur tempore sunt porro doloremque error vitae enim mollitia! Animi vel porro deleniti ab iure nam commodi temporibus quam?
          </p>
          <br />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, pariatur? Voluptas quibusdam harum vel dolor voluptatibus consectetur pariatur nemo laudantium eum tenetur, distinctio tempora quisquam facere veniam in commodi delectus esse nesciunt! Sit, nesciunt vitae saepe tempora voluptatibus aspernatur odio quo a quaerat illo officia. Dolores qui in laboriosam soluta magnam maiores laborum. Pariatur neque laudantium non nam in, molestiae unde tempore ea cupiditate. Tempora quidem iusto et nam esse a eligendi, eum minus earum dolor voluptates in, quisquam modi odit praesentium porro ratione ex commodi dolores laborum perspiciatis. Temporibus similique error explicabo eius optio quia libero nihil.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non saepe quisquam atque eum commodi facere, nisi ex unde recusandae accusantium sint a illum sed dolore aspernatur voluptatum eos possimus id nihil beatae incidunt laborum reiciendis! Quidem, nemo necessitatibus. Quasi quis, nesciunt inventore omnis et doloribus! Molestiae et, minima, perferendis velit enim modi placeat ipsum beatae, reprehenderit natus iste!</p>
        </div>
        </div>
     </Layout> 
    </>
  )
}

export default About
