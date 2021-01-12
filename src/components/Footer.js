import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>© 2021 - Brycen Bartolome</div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #333;
  padding: 10px 14px;
  color: white;
  text-align: center;
`;
