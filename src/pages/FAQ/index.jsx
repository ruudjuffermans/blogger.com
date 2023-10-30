import Accordion from "../../components/Accordion";
import Container from "../../components/Container";
import Section from "../../components/Section";

const faqData = [
  {
    question: "What is the main focus of your blog?",
    answer:
      "Our blog primarily focuses on [insert your blog's main topic or niche]. We cover a wide range of topics within this niche, including [list some specific subtopics or areas you cover]. Our goal is to provide informative and engaging content to our readers who share an interest in these subjects.",
  },
  {
    question: "How often do you publish new content?",
    answer:
      "We aim to provide fresh content regularly to keep our readers informed and engaged. On average, we publish new articles [insert your publishing frequency, e.g., 'two times a week' or 'every other Monday']. Be sure to subscribe or follow us on social media to stay up-to-date with our latest posts.",
  },
  {
    question: "Can I contribute to your blog as a guest writer?",
    answer:
      "We welcome guest contributions from fellow enthusiasts and experts in our niche. If you have valuable insights or information to share, please visit our [guest posting guidelines page] to learn more about our submission process and requirements. We look forward to featuring your expertise on our blog!",
  },
  {
    question:
      "How can I contact your team for questions or collaboration inquiries?",
    answer:
      "We are always eager to connect with our readers and potential collaborators. You can reach out to us through our [contact page], where you'll find a contact form to submit your inquiries, feedback, or partnership proposals. We typically respond within [insert your expected response time, e.g., '48 hours'].",
  },
  {
    question:
      "Is your content available for free, or do I need to subscribe or pay for access?",
    answer:
      "Our blog is committed to providing free, open access to all our content. You can explore and enjoy our articles, guides, and resources without any subscription or payment requirements. We believe in sharing knowledge and insights with our community at no cost.",
  },
];

const FAQ = () => {
  return (
    <Section title={"Frequently Asked Questions"}>
      <Accordion />
    </Section>
  );
};

export default FAQ;
