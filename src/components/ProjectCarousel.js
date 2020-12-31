import Projects from "./Projects";
import { Carousel } from "react-bootstrap";
import { useFirestore, isLoaded } from "react-redux-firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import styled from "styled-components";

const ProjectCarousel = () => {
  const firestore = useFirestore();

  const projectsRef = firestore.collection("projects");

  const [projectsList] = useCollectionData(projectsRef, { idField: "id" });
  if (isLoaded(projectsList)) {
    return (
      <Wrapper>
        <Carousel className="carry">
          {projectsList &&
            projectsList.map((p) => {
              return (
                <Carousel.Item className="carouselItem">
                  <img
                    className="d-block h-auto w-100"
                    src="https://miro.medium.com/max/700/1*uyH-s_kUofX3jUegQEF2Eg.jpeg"
                    alt="slide"
                  />
                  <Carousel.Caption>
                    <h3>{p.name}</h3>
                    <p>{p.bio}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </Wrapper>
    );
  } else {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
};
export default ProjectCarousel;

const Wrapper = styled.div`
  /* margin: 10px; */
  /* object-fit: cover;
  max-width: 100%;
  min-height: 100%;
  .carry {
    min-height: 100%;
  }
  .carouselItem {
    width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
    min-height: 100%;
  } */
`;
