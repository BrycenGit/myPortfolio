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
          <input type="submit" value="Send" />
        </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 32pt;
    text-decoration: underline;
  }
  form {
    padding-top: 40px;
    width: 400px;
  }
  .input {
    width: 100%;
  }
`;
