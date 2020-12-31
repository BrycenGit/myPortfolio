import { useFirestore, isLoaded } from "react-redux-firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Projects = () => {
  const firestore = useFirestore();

  const projectsRef = firestore.collection("projects");

  const [projectsList] = useCollectionData(projectsRef, { idField: "id" });

  if (isLoaded(projectsList)) {
    return (
      <>
        <h3>Projects:</h3>
        <p>{projectsList.length}</p>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Projects;
