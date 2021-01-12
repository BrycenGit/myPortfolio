import styled from "styled-components";
import emailjs from "emailjs-com";

// import "./ContactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spnis32",
        "template_esy5g8g",
        e.target,
        "user_xOdVatDih7FJ3t5uSPTHa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Container>
      <div className="title">Contact</div>
      <div className="contactArea">
        <form onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <div>
            <label>Name</label>
          </div>
          <div>
            <input className="input" type="text" name="name" />
          </div>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input className="input" type="email" name="email" />
          </div>
          <div>
            <label>Subject</label>
          </div>
          <div>
            <input className="input" type="text" name="subject" />
          </div>
          <div>
            <label>Message</label>
          </div>
          <div>
            <textarea className="input" name="message" />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
        <div className="info">Some Words</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  /* background-image: linear-gradient(to right, #0dade1, #3bbdb7); */
  .contactArea {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 25px;
  }
  .info {
    width: 350px;
  }
  .title {
    font-size: 32pt;
    text-decoration: underline;
  }
  form {
    width: 350px;
  }
  .input {
    width: 100%;
  }
  button {
    border: none;
    background-color: white;
    border-radius: 2px;
  }
  button:hover {
    background-color: black;
    color: white;
  }

  input {
  }
`;
