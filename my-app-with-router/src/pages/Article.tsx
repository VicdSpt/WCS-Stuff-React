import { useParams } from "react-router";

function Article() {
    const {id} = useParams();

  return (
    <>
      <h1>Hello from Article Page {id}</h1>
      <div>
        <p>This is the Article </p>
      </div>
    </>
  );
}

export default Article;
