import styled from "styled-components";
import Linkedin from "../icons/linkedin.svg";
import Github from "../icons/Github.svg";
import Youtube from "../icons/Youtube.svg";
import Twitch from "../icons/Twitch.svg";

const Social = () => {
  return (
    <Container>
      <div
        className="icon"
        onClick={() =>
          window.open("https://www.linkedin.com/in/brycenbartolome/")
        }
      >
        <img height={30} src={Linkedin} />
      </div>
      <div
        className="icon"
        onClick={() => window.open("https://github.com/BrycenGit")}
      >
        <img height={30} src={Github} />
      </div>
      <div
        className="icon"
        onClick={() =>
          window.open(
            "https://www.youtube.com/channel/UCX-EfTWlnj3E8OIkyZNHPzg"
          )
        }
      >
        <img height={30} src={Youtube} />
      </div>
      <div
        className="icon"
        onClick={() => window.open("https://www.twitch.tv/sugarandshoyu")}
      >
        <img height={30} src={Twitch} />
      </div>
    </Container>
  );
};

export default Social;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 10px;
  gap: 1rem;

  .icon:hover {
    cursor: pointer;
  }
`;
