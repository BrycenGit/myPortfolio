import { useFirestore, isLoaded } from "react-redux-firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import space from "../assets/space.jpg";

const Projects = () => {
  const firestore = useFirestore();

  const projectsRef = firestore.collection("projects");

  const [projectsList] = useCollectionData(projectsRef, { idField: "id" });

  if (isLoaded(projectsList)) {
    console.log(projectsList);
    return (
      <>
        <h3>Projects:</h3>
        <ProjectWrapper>
          {projectsList &&
            projectsList.map((pro) => {
              const divStyle = {
                backgroundImage: `url(${space})`,
                width: "100%",
                height: "auto",
              };
              return (
                <div key={pro.id} style={divStyle}>
                  {/* <p>{pro.name}</p> */}
                  <a href={pro.url}>{pro.name}</a>
                </div>
              );
            })}
        </ProjectWrapper>

        {/* <p>{projectsList.length}</p> */}
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Projects;

const ProjectWrapper = styled.div`
  /* padding: 5px; */
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* grid-template-rows: repeat(auto-fit, minmax(240px, 1fr)); */
  grid-auto-rows: 100px;
`;
