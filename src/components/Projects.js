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
              };
              return (
                <div className="card" key={pro.id} style={divStyle}>
                  <div>{pro.name}</div>
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  /* grid-template-rows: repeat(auto-fit, minmax(240px, 1fr)); */
  grid-auto-rows: 100px;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
      rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    transition: all 500ms;
    overflow: hidden;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .card:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
      rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(-3px) scale(1.05);
  }
`;
