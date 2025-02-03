import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/analysis 1.png",
  "./cubeDrawings/analysis 2.png",
  "./cubeDrawings/analysis 3.png",
  "./cubeDrawings/analysis 4.png",
];

const trees = [
  "./treeDrawings/Gengar3D.png",
  "./treeDrawings/GengarPaper.png",
  "./treeDrawings/LAYOUT1.png",
  "./treeDrawings/LAYOUT2.png",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Project 1
        <div class="three-model">
        <a href="https://kenner-architecural-student-git-acc545-kjamieson3515s-projects.vercel.app/cadavre.png" target="_blank">
      <img src="./cadavre.png" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
          <div id="images">
            <a href="https://kenner-architecural-student-portfolio-1-78p9.vercel.app/cubeDrawings/analysis%201.png" target="_blank">
                <img src="./cubeDrawings/analysis 1.png" alt="cube1" />
            </a>
            <a href="https://kenner-architecural-student-portfolio-1-78p9.vercel.app/cubeDrawings/analysis%202.png" target="_blank">
                <img src="./cubeDrawings/analysis 2.png" alt="cube1" />
            </a>
            <a href="https://kenner-architecural-student-portfolio-1-78p9.vercel.app/cubeDrawings/analysis%203.png" target="_blank">
                <img src="./cubeDrawings/analysis 3.png" alt="cube1" />
            </a>
            <a href="https://kenner-architecural-student-portfolio-1-78p9.vercel.app/cubeDrawings/analysis%204.png" target="_blank">
                <img src="./cubeDrawings/analysis 4.png" alt="cube1" />
            </a>
          </div>
          <h4 id="description">While AI may be able to replicate human mastery over technical skill and displays it can never replicate the spirit and act of true creation that comes from drawing from the collective human experience and emotion that can only be drawn upon through the understanding and connection to the ephemerality of being human. </h4>
        </div>
      </div>

    
      <div id="project-row">
      Project 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="https://kenner-architecural-student-portfolio-1-78p9.vercel.app/treeDrawings/Gengar3D.png" target="_blank">
                <img src="./treeDrawings/Gengar3D.png" alt="cube1" />
            </a>
            <a href="https://kenner-architecural-student-portfolio-1-78p9.vercel.app/treeDrawings/GengarPaper.png" target="_blank">
                <img src="./treeDrawings/GengarPaper.png" alt="cube1" />
            </a>
            <a href="https://kenner-architecural-student-portfolio-1-78p9.vercel.app/treeDrawings/LAYOUT1.png" target="_blank">
                <img src="./treeDrawings/LAYOUT1.png" />
            </a>
            <a href="https://kenner-architecural-student-portfolio-1-78p9.vercel.app/treeDrawings/LAYOUT2.png" target="_blank">
                <img src="./treeDrawings/LAYOUT2.png" />
            </a>
          </div>
          <h4 id="description">Assignment Two challenged students to explore various methods of modification as well as importing and exporting 3d models across multiple softwares. After creating charts which map these transformations students were then challenged to create two seperate fabrications of a chosen character initially modeled in 3D.</h4>
        </div>
      </div>


${/* Model 2 commented out 
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
    </section>
*/ ""}

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/all models.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
