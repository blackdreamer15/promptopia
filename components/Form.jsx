import Link from "next/link";

const Form = ({ type, post, submitting, setPost, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1>{type} Post</h1>
    </section>
  );
};

export default Form;
