import ErrorBoundary from "../../components/ErrorBoundary";
import Section from "../../components/Section";
import AuthorSection from "./components/AuthorSection";
import CommentSection from "./components/CommentSection";
import StoryContent from "./components/StoryContent";
import StoryFoot from "./components/StoryFoot";
import StoryHead from "./components/StoryHead";

const story = {
  title: "What Do We Mean When We Call MacroFactor “Adherence Neutral”?",
  subject: "Music",
  introduction:
    "We sometimes refer to MacroFactor as an “adherence neutral” app. This article will describe what we mean by that term, and discuss why we have an adherence-neutral philosophy.",
  author: "Ruud Juffermans",
  portrait: "",
  date: "September 27, 2023",
  image: "story-image.jpg",
  content: `<p>Adherence refers to how closely someone sticks to their nutrition targets. It’s easy to say you want to be in an energy deficit and lose weight, but it’s considerably harder to actually stick to an energy deficit for a long enough period to successfully meet your weight loss goals.</p><p>Unsurprisingly, dietary adherence is a strong predictor of successful weight loss. A seminal <a href="https://jamanetwork.com/journals/jama/fullarticle/200094">2005 study</a> by Dansinger and colleagues illustrates this point beautifully. 160 subjects were randomized into four groups following very different diets (Atkins, Zone, Weight Watchers, and Ornish) for one year. For the first two months, they were instructed to follow their assigned diet “to the best of their ability.” For the next ten months, they were encouraged to “follow their assigned diet according to their own self-determined interest level.”</p><p>At the end of the year, subjects in each group lost about 2-3.5kg, on average. All four diets seemed to promote similar amounts of weight loss.</p>`,
};

const Story = () => {
  return (
    <Section>
      <div style={{ margin: "auto", maxWidth: "900px" }}>
        <StoryHead />
        <StoryContent />
        <StoryFoot tags={[]} socials={[]} />
        <CommentSection />
        <AuthorSection />
      </div>
    </Section>
  );
};

export default Story;
