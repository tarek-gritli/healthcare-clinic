import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Heart, Brain, Eye, Bone, Stethoscope } from "lucide-react";
import Lungs from "@/assets/lungs.webp";

const services = [
  {
    name: "Cardiology",
    icon: Heart,
    description: "Expert care for your heart health.",
  },
  {
    name: "Neurology",
    icon: Brain,
    description: "Specialized treatment for neurological conditions.",
  },
  {
    name: "Pulmonology",
    icon: Lungs,
    description: "Comprehensive care for respiratory issues.",
  },
  {
    name: "Ophthalmology",
    icon: Eye,
    description: "Expert care for your eye health.",
  },
  {
    name: "Orthopedics",
    icon: Bone,
    description: "Specialized care for your bones and joints.",
  },
  {
    name: "General Medicine",
    icon: Stethoscope,
    description: "Comprehensive primary healthcare services.",
  },
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

type ReservationProps = {
  inView?: boolean;
};

export default function Reservation({ inView }: ReservationProps) {
  const { t } = useTranslation();
  const reservationFormSchema = z.object({
    name: z.string().min(3, { message: t("reservation.form.errors.name") }),
    email: z.string().email({ message: t("reservation.form.errors.email") }),
    date: z.date({ message: t("reservation.form.errors.date") }),
    time: z.string({ message: t("reservation.form.errors.time") }),
    service: z.string({ message: t("reservation.form.errors.service") }),
    note: z.string().optional(),
  });
  const form = useForm<z.infer<typeof reservationFormSchema>>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      date: undefined,
      time: "",
      service: "",
      note: "",
    },
  });

  const onSubmit = (values: z.infer<typeof reservationFormSchema>) => {
    console.log(values);
    toast.success(t("reservation.form.success"), {
      description: t("reservation.form.successDescription"),
    });
    form.reset();
  };

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
      id="appointment"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            {t("reservation.title")}
          </motion.h2>
          <p className="mt-4 text-xl text-gray-500">
            {t("reservation.description")}
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6"
            >
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.name")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("reservation.form.name")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.email")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("reservation.form.email")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>{t("reservation.form.date")}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              aria-label={t("reservation.form.date")}
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>{t("reservation.form.pickDate")}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.time")}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t("reservation.form.selectTime")}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {time}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.service")}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t("reservation.form.selectService")}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.name} value={service.name}>
                              <div className="flex items-center gap-2">
                                {service.icon != Lungs ? (
                                  <service.icon className="w-4 h-4" />
                                ) : (
                                  <img
                                    src={Lungs}
                                    alt={service.name}
                                    className="w-4 h-4"
                                  />
                                )}
                                {service.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.note")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("reservation.form.note")}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        {t("reservation.form.noteDescription")}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                aria-label={t("reservation.form.scheduleAppointment")}
                type="submit"
                className="w-full"
              >
                {t("reservation.form.scheduleAppointment")}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </motion.div>
  );
}
