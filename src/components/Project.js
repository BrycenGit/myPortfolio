import styled from "styled-components";
import CypherChat from "../assets/Cypherchat.png";

const projects = [
  {
    title: "CypherChat",
    description:
      "Cypher chat is an End to End encrypted messaging app that allows users to communicate while their data is kept private, The only people who can read the messages are the ones that are intended to see it. In the ever evolving world of Information Tech and Data realization I wanted to create an app that took your privacy seriously.",
    url: "https://capstone-chat-3c5ec.web.app/",
    img: CypherChat,
  },
  {
    title: "Dinder",
    description:
      "Dinder is a social dining app that takes the misery out of finding a place to eat. With Dinder dining with your friend is as easy as swipe right or swipe left. Get out there and go Dinder",
    url: "https://github.com/BrycenGit/Dinder",
    img: "https://pop.inquirer.net/files/2018/10/Webarebears-1024x585.png",
  },
  {
    title: "StockX",
    description:
      "Keep an eye on your favorite Stocks, With Stock X we will help you track your wealth",
    url: "https://github.com/BrycenGit/stock-market",
    img: "https://pop.inquirer.net/files/2018/10/Webarebears-1024x585.png",
  },
];

const Project = () => {
  return (
    <div>
      {projects.map((obj, index) => {
        return (
          <Container key={index}>
            <div className="description">
              <span className="name">{obj.title}</span>
              <br />
              <span>{obj.description}</span>
            </div>
            <div
              className="imgDiv"
              onClick={() => {
                window.open(obj.url);
              }}
            >
              <img src={obj.img} alt="cypherChat" />
            </div>
          </Container>
        );
      })}
    </div>
  );
};

export default Project;

const Container = styled.div`
  padding: 40px;
  width: 100%;

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
