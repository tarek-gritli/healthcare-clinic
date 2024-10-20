import OurStory from "./OurStory";
import OurServices from "./OurServices";
import withAnimatedSection from "./withAnimatedSection";

const AnimatedOurStory = withAnimatedSection(OurStory);
const AnimatedOurServices = withAnimatedSection(OurServices);
export default function About() {
  return (
    <section id="aboutUs" className="bg-white py-16 sm:py-24">
      <AnimatedOurStory />
      <AnimatedOurServices />
    </section>
  );
}
