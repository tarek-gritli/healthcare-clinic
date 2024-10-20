import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Heart, Stethoscope, Clock, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { createElement } from "react";

type OurServicesProps = {
  inView?: boolean;
};

export default function OurServices({ inView }: OurServicesProps) {
  const { t } = useTranslation();

  const services = t("about.ourServices.services", {
    returnObjects: true,
  }) as { title: string; description: string }[];
  const icons = [Heart, Stethoscope, Clock, Award];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t("about.ourServices.title")}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="flex"
            >
              <Card className="w-full h-full flex flex-col">
                <CardContent className="flex flex-col items-center justify-between space-y-4 p-6 h-full">
                  {createElement(icons[index], {
                    className: "h-12 w-12 text-primary",
                  })}
                  <h3 className="text-xl font-bold text-center">
                    {service.title}
                  </h3>
                  <p className="text-center text-gray-500 flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
