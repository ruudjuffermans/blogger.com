import TextField from "../../../../components/Input/TextField";
import TextArea from "../../../../components/Input/TextArea";

const Step1 = () => {
  return (
    <>
      <TextField
        type={"text"}
        name="title"
        label={"title"}
        placeholder="Title"
      />
      <TextArea
        type={"textarea"}
        rows={6}
        name="introduction"
        label={"introduction"}
        placeholder="Introduction"
      />
    </>
  );
};

export default Step1;
