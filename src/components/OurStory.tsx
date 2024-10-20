import { useTranslation } from "react-i18next";
import { HandHeart, Award, Scale, Lightbulb } from "lucide-react";
import OneValue from "./OneValue";
import { motion } from "framer-motion";

type OurStoryProps = {
  inView?: boolean;
};
export default function OurStory({ inView }: OurStoryProps) {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={itemVariants} className="lg:text-center">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("about.ourStory.title")}
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {t("about.ourStory.description")}
        </p>
      </motion.div>

      <motion.div variants={containerVariants} className="mt-10">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <motion.div variants={itemVariants}>
            <OneValue
              Icon={HandHeart}
              title={t("about.ourStory.ourValues.compassion.title")}
              description={t("about.ourStory.ourValues.compassion.description")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <OneValue
              Icon={Award}
              title={t("about.ourStory.ourValues.excellence.title")}
              description={t("about.ourStory.ourValues.excellence.description")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <OneValue
              Icon={Scale}
              title={t("about.ourStory.ourValues.integrity.title")}
              description={t("about.ourStory.ourValues.integrity.description")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <OneValue
              Icon={Lightbulb}
              title={t("about.ourStory.ourValues.innovation.title")}
              description={t("about.ourStory.ourValues.innovation.description")}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
