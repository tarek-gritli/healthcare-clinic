import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import interiorImage from "@/assets/interior.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

type HeroProps = {
  inView?: boolean;
};

export default function Hero({ inView }: HeroProps) {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [place, setPlace] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const handleBookTaxi = () => {
    setIsModalOpen(true);
  };

  const handleSubmitTaxiRequest = () => {
    setIsModalOpen(false);
    toast.success(t("hero.taxi.success"), {
      description: t("hero.taxi.successDescription"),
    });
  };

  return (
    <div id="home" className="relative bg-secondary h-screen">
      <div className="absolute inset-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover"
          src={interiorImage}
          alt="HealthCareClinic interior"
        />
        <div className="absolute inset-0 bg-primary opacity-20"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl text-white max-w-3xl font-sans"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10 flex space-x-4">
          <Button
            size="lg"
            variant="default"
            onClick={() => (window.location.href = "#appointment")}
            aria-label={t("hero.makeAppointment")}
          >
            {t("hero.makeAppointment")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            aria-label={t("hero.bookTaxi")}
            onClick={handleBookTaxi}
          >
            {t("hero.bookTaxi")}
          </Button>
        </motion.div>
      </motion.div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("hero.taxi.modalTitle")}</DialogTitle>
            <DialogDescription>
              {t("hero.taxi.modalDescription")}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="place" className="text-right">
                {t("hero.taxi.placeLabel")}
              </Label>
              <Input
                id="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                {t("hero.taxi.cancel")}
              </Button>
            </DialogClose>
            <Button type="button" onClick={handleSubmitTaxiRequest}>
              {t("hero.taxi.submit")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
