import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { Toaster } from "@/components/ui/sonner";
import withAnimatedSection from "@/components/withAnimatedSection";
import { lazy } from "react";

const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Reservation = lazy(() => import("@/components/Reservation"));
const ContactInfo = lazy(() => import("@/components/ContactInfo"));
const Footer = lazy(() => import("@/components/Footer"));

const AnimatedAbout = withAnimatedSection(About);
const AnimatedHero = withAnimatedSection(Hero);
const AnimatedTestimonials = withAnimatedSection(Testimonials);
const AnimatedReservation = withAnimatedSection(Reservation);
const AnimatedContactInfo = withAnimatedSection(ContactInfo);
const AnimatedFooter = withAnimatedSection(Footer);

function Home() {
  return (
    <>
      <Header />
      <main>
        <AnimatedHero />
        <AnimatedAbout />
        <AnimatedTestimonials />
        <AnimatedReservation />
        <AnimatedContactInfo />
      </main>
      <AnimatedFooter />
      <Toaster />
    </>
  );
}

export default Home;
