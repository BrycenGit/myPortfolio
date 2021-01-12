import styled from "styled-components";
import CypherChat from "../assets/Cypherchat.png";

const Project = () => {
  return (
    <Container>
      <div className="description">
        <span className="name">CypherChat</span>
        <br />
        <span>
          Cypher chat is an End to End encrypted messaging app that allows users
          to communicate while their data is kept private, The only people who
          can read the messages are the ones that are intended to see it. In the
          ever evolving world of Information Tech and Data realization I wanted
          to create an app that took your privacy seriously.
        </span>
      </div>
      <div
        className="imgDiv"
        onClick={() => {
          window.open("https://capstone-chat-3c5ec.web.app/");
        }}
      >
        <img src={CypherChat} alt="cypherChat" />
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  padding: 40px;
  width: 100%;
  /* background-color: #0dade1; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;

  gap: 1.5rem;
  text-align: left;

  .name {
    font-size: 20pt;
  }
  .description {
    width: 350px;
  }
  .imgDiv {
  }
  .imgDiv:hover {
    cursor: pointer;
  }

  img {
    object-fit: cover;
    width: 350px;
    height: auto;
    border-radius: 0.5rem;
  }
`;
