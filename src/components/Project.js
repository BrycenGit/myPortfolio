import styled from "styled-components";
import CypherChat from "../assets/Cypherchat.png";

const Project = () => {
  return (
    <Container>
      <div className="description">
        <span className="title">CypherChat</span>
        <br />
        <span>
          Cypher chat is an End to End encrypted messaging app that allows users
          to communicate while their data is kept private, The only people who
          can read the messages are the ones that are intended to see it. In the
          ever evolving world of Information Tech and Data realization I wanted
          to create an app that took your privacy seriously.
        </span>
      </div>
      <div className="imgDiv">
        <img src={CypherChat} alt="cypherChat" />
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f8f8f8;
  gap: 1rem;
  text-align: left;
  .title {
    font-size: 20pt;
    text-decoration: underline;
  }
  .description {
    margin-top: 40px;
    width: 400px;
  }
  .imgDiv {
    margin-top: 40px;
  }

  img {
    object-fit: cover;
    width: 350px;
    height: 350px;
    border-radius: 0.5rem;
  }
`;
