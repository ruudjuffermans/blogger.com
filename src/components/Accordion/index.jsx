import { useState } from "react";
import styles from "./style.module.css";

const content = [
  {
    key: 1,
    question: "What is Lorem Ipsum?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    key: 2,
    question: "Where does it come from?",
    answer: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
  },
  {
    key: 3,
    question: "Why do we use it?",
    answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  },
  {
    key: 4,
    question: "Where can I get some?",
    answer: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
  },
];

const Toggle = ({ itemKey, open, handleClick, children, ...props }) => {
  return (
    <div
      className={[styles.toggle, open && styles.open].join(" ")}
      onClick={() => handleClick(itemKey)}
      {...props}
    >
      {children}
    </div>
  );
};

const Collapse = ({ itemKey, open, children, ...props }) => {
  return (
    <div
      className={[styles.collapse, open && styles.open].join(" ")}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Accordion = ({ showSingle = false }) => {
  const [showItemId, setShowItemId] = useState(-1);
  const [showArray, setShowArray] = useState(
    Object.fromEntries(content.map((item) => [item.index, item.show]))
  );

  const toggleItem = (id) => {
    if (showSingle) {
      setShowItemId((prevShowItemId) => (prevShowItemId === id ? -1 : id));
    } else {
      setShowArray((prevShowArray) => ({
        ...prevShowArray,
        [id]: !prevShowArray[id],
      }));
    }
  };

  return (
    <div className={styles.accordion}>
      {content.map(({ question, answer, key }) => (
        <div key={key}>
          <Toggle itemKey={key} handleClick={(id) => toggleItem(id)}>
            {question}
          </Toggle>
          <Collapse open={showSingle ? showItemId === key : showArray[key]}>
            {answer}
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
