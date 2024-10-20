import { MapPin, Phone, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { formatTime } from "@/lib/utils";
import { motion } from "framer-motion";

type ContactInfoProps = {
  inView?: boolean;
};

export default function ContactInfo({ inView }: ContactInfoProps) {
  const { t, i18n } = useTranslation();

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
      id="contact"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gray-100 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t("contact.description")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <MapPin className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              {t("contact.address.title")}
            </h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              {t("contact.address.address")}
              <br />
              {t("contact.address.city")}, {t("contact.address.zip")}
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <Phone className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              {t("contact.phone.title")}
            </h3>
            <p className="mt-2 text-base text-gray-500">
              {t("contact.phone.phone")}
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              {t("contact.hours.title")}
            </h3>
            <p className="mt-2 text-base text-gray-500 text-left">
              {t("contact.hours.monday")} - {t("contact.hours.friday")}:{" "}
              {formatTime("8:30", i18n.language)} -{" "}
              {formatTime("17:30", i18n.language)}
              <br />
              {t("contact.hours.saturday")}: {formatTime("9:00", i18n.language)}{" "}
              - {formatTime("14:00", i18n.language)}
              <br />
              {t("contact.hours.sunday.title")}:{" "}
              {t("contact.hours.sunday.description")}
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <iframe
            title="HealthClinic Location"
            aria-label="HealthClinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.6592046383544!2d10.188867205306162!3d36.861338003461356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb4b0ecda8a3%3A0xc561ba5428c31de3!2sInstitut%20Sup%C3%A9rieur%20d&#39;Informatique%20(ISI)!5e0!3m2!1sen!2stn!4v1729463704859!5m2!1sen!2stn"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
}
