import { useFirestore } from "react-redux-firebase";

const AdminPage = (props) => {
  const { setAdminFalse } = props;
  const firestore = useFirestore();
  const projectsRef = firestore.collection("projects");

  const addProjectToFirestore = async (e) => {
    e.preventDefault();
    await projectsRef.add({
      name: e.target.name.value,
      bio: e.target.bio.value,
      url: `https://${e.target.url.value}/`,
    });
  };

  return (
    <>
      <form onSubmit={addProjectToFirestore}>
        <input
          name="name"
          type="text"
          autoComplete="off"
          placeholder="Project Name"
          required
        />
        <input
          name="bio"
          type="text"
          autoComplete="off"
          placeholder="Project Bio"
          required
        />
        <input
          name="url"
          type="text"
          autoComplete="off"
          placeholder="Project url"
          required
        />
        <button type="submit">Send</button>
      </form>

      <button onClick={setAdminFalse}>Back</button>
    </>
  );
};

export default AdminPage;
