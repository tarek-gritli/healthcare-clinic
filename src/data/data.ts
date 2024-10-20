const doctors = [
  {
    id: 1,
    name: "Dr. John Williams",
    department: "Cardiology",
    appointments: 55,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    department: "Pediatrics",
    appointments: 50,
  },
  {
    id: 3,
    name: "Dr. Mike Johnson",
    department: "Neurology",
    appointments: 45,
  },
  {
    id: 4,
    name: "Dr. Susan Brown",
    department: "Dermatology",
    appointments: 40,
  },
  {
    id: 5,
    name: "Dr. Alex Jones",
    department: "Orthopedics",
    appointments: 48,
  },
  {
    id: 6,
    name: "Dr. Emily Carter",
    department: "Cardiology",
    appointments: 11,
  },
  {
    id: 7,
    name: "Dr. Robert Lee",
    department: "Pediatrics",
    appointments: 9,
  },
  {
    id: 8,
    name: "Dr. Linda Adams",
    department: "Neurology",
    appointments: 7,
  },
  {
    id: 9,
    name: "Dr. Sarah Thompson",
    department: "Dermatology",
    appointments: 10,
  },
  {
    id: 10,
    name: "Dr. Michael Anderson",
    department: "Orthopedics",
    appointments: 12,
  },
];

const patients = [
  { id: 1, name: "Alice Brown", age: 35, lastVisit: "2023-12-15" },
  { id: 2, name: "Bob Green", age: 42, lastVisit: "2024-02-10" },
  { id: 3, name: "Carol White", age: 28, lastVisit: "2024-01-05" },
  { id: 4, name: "David Smith", age: 50, lastVisit: "2024-03-18" },
  { id: 5, name: "Emily Davis", age: 32, lastVisit: "2024-04-22" },
  { id: 6, name: "Frank Miller", age: 47, lastVisit: "2024-05-01" },
  { id: 7, name: "Grace Wilson", age: 29, lastVisit: "2023-11-30" },
  { id: 8, name: "Henry Lee", age: 40, lastVisit: "2024-02-28" },
  { id: 9, name: "Isabel Taylor", age: 34, lastVisit: "2024-03-10" },
  { id: 10, name: "James Brown", age: 55, lastVisit: "2023-10-25" },
  { id: 11, name: "Karen Thompson", age: 38, lastVisit: "2024-01-15" },
  { id: 12, name: "Louis Clark", age: 31, lastVisit: "2024-02-05" },
  { id: 13, name: "Nina Walker", age: 43, lastVisit: "2024-03-22" },
  { id: 14, name: "Oliver Baker", age: 51, lastVisit: "2023-12-20" },
  { id: 15, name: "Paul Scott", age: 36, lastVisit: "2024-02-14" },
  { id: 16, name: "Quincy Lewis", age: 49, lastVisit: "2024-01-25" },
  { id: 17, name: "Rachel Adams", age: 27, lastVisit: "2024-03-12" },
  { id: 18, name: "Samuel Turner", age: 45, lastVisit: "2024-04-02" },
  { id: 19, name: "Tina Hughes", age: 39, lastVisit: "2023-11-25" },
  { id: 20, name: "Ulysses Carter", age: 41, lastVisit: "2024-02-18" },
  { id: 21, name: "Victoria Collins", age: 37, lastVisit: "2024-01-30" },
  { id: 22, name: "William Bennett", age: 53, lastVisit: "2024-03-28" },
  { id: 23, name: "Xander Evans", age: 33, lastVisit: "2024-04-10" },
  { id: 24, name: "Yvonne Ramirez", age: 46, lastVisit: "2023-12-05" },
  { id: 25, name: "Zachary Phillips", age: 30, lastVisit: "2024-01-20" },
  { id: 26, name: "Amy Mitchell", age: 52, lastVisit: "2024-03-05" },
  { id: 27, name: "Brian Stewart", age: 44, lastVisit: "2024-02-22" },
  { id: 28, name: "Chloe Sanchez", age: 29, lastVisit: "2024-01-10" },
  { id: 29, name: "Dylan Reed", age: 50, lastVisit: "2024-04-18" },
  { id: 30, name: "Eva Jenkins", age: 48, lastVisit: "2023-11-15" },
  { id: 31, name: "Felix Rivera", age: 35, lastVisit: "2024-02-25" },
  { id: 32, name: "Gabriel Bryant", age: 39, lastVisit: "2024-03-08" },
  { id: 33, name: "Hannah Perez", age: 28, lastVisit: "2023-12-10" },
  { id: 34, name: "Ian Cooper", age: 32, lastVisit: "2024-01-08" },
  { id: 35, name: "Jessica Murphy", age: 31, lastVisit: "2024-04-05" },
  { id: 36, name: "Kyle Foster", age: 54, lastVisit: "2024-03-02" },
  { id: 37, name: "Laura Bailey", age: 26, lastVisit: "2024-01-18" },
  { id: 38, name: "Mark Hill", age: 49, lastVisit: "2024-02-15" },
  { id: 39, name: "Nina Ross", age: 40, lastVisit: "2024-03-20" },
  { id: 40, name: "Oscar Diaz", age: 33, lastVisit: "2023-12-08" },
  { id: 41, name: "Paula Simmons", age: 45, lastVisit: "2024-10-01" },
  { id: 42, name: "Quinn Morrison", age: 38, lastVisit: "2024-10-10" },
  { id: 43, name: "Ronald Hayes", age: 29, lastVisit: "2024-10-21" },
  { id: 44, name: "Sophia Kim", age: 41, lastVisit: "2024-09-25" },
  { id: 45, name: "Timothy Ward", age: 34, lastVisit: "2024-10-21" },
];

const appointments = [
  {
    id: 1,
    patient: "Alice Brown",
    doctor: "Dr. John Williams",
    date: "2023-12-15",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Bob Green",
    doctor: "Dr. Jane Smith",
    date: "2024-02-10",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Carol White",
    doctor: "Dr. Mike Johnson",
    date: "2024-01-05",
    time: "11:30 AM",
    status: "Confirmed",
  },
  {
    id: 4,
    patient: "David Smith",
    doctor: "Dr. Susan Brown",
    date: "2024-03-18",
    time: "9:00 AM",
    status: "Pending",
  },
  {
    id: 5,
    patient: "Emily Davis",
    doctor: "Dr. Alex Jones",
    date: "2024-04-22",
    time: "3:00 PM",
    status: "Pending",
  },
  {
    id: 6,
    patient: "Frank Miller",
    doctor: "Dr. John Williams",
    date: "2024-05-01",
    time: "12:00 PM",
    status: "Pending",
  },
  {
    id: 7,
    patient: "Grace Wilson",
    doctor: "Dr. Jane Smith",
    date: "2023-11-30",
    time: "1:00 PM",
    status: "Pending",
  },
  {
    id: 8,
    patient: "Henry Lee",
    doctor: "Dr. Mike Johnson",
    date: "2024-10-21",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    id: 9,
    patient: "Isabel Taylor",
    doctor: "Dr. Susan Brown",
    date: "2024-10-22",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: 10,
    patient: "James Brown",
    doctor: "Dr. Alex Jones",
    date: "2024-10-23",
    time: "11:00 AM",
    status: "Confirmed",
  },
  {
    id: 11,
    patient: "Karen Thompson",
    doctor: "Dr. John Williams",
    date: "2024-10-24",
    time: "3:00 PM",
    status: "Pending",
  },
  {
    id: 12,
    patient: "Louis Clark",
    doctor: "Dr. Jane Smith",
    date: "2024-10-25",
    time: "1:30 PM",
    status: "Confirmed",
  },
  {
    id: 13,
    patient: "Nina Walker",
    doctor: "Dr. Mike Johnson",
    date: "2024-10-26",
    time: "9:15 AM",
    status: "Pending",
  },
];

const departmentData = [
  { name: "Cardiology", value: 30 },
  { name: "Pediatrics", value: 25 },
  { name: "Neurology", value: 20 },
  { name: "Orthopedics", value: 15 },
  { name: "Dermatology", value: 10 },
];

const appointmentsByDay = [
  { day: "Mon", appointments: 10 },
  { day: "Tue", appointments: 15 },
  { day: "Wed", appointments: 12 },
  { day: "Thu", appointments: 18 },
  { day: "Fri", appointments: 20 },
  { day: "Sat", appointments: 8 },
  { day: "Sun", appointments: 5 },
];

const taxiBookings = [
  {
    id: 1,
    patient: "Alice Brown",
    date: "2023-12-15",
    time: "9:30 AM",
    status: "Completed",
  },
  {
    id: 2,
    patient: "Ronald Hayes",
    date: "2024-10-21",
    time: "1:30 PM",
    status: "Upcoming",
  },
  {
    id: 3,
    patient: "Carol White",
    date: "2024-01-05",
    time: "10:00 AM",
    status: "Completed",
  },
  {
    id: 4,
    patient: "Timothy Ward",
    date: "2024-10-21",
    time: "2:00 PM",
    status: "Upcoming",
  },
];

const patientGrowthData = [
  { month: "Jan", patients: 100 },
  { month: "Feb", patients: 120 },
  { month: "Mar", patients: 135 },
  { month: "Apr", patients: 150 },
  { month: "May", patients: 180 },
  { month: "Jun", patients: 210 },
];

const revenueData = [
  { month: "Jan", revenue: 50000 },
  { month: "Feb", revenue: 55000 },
  { month: "Mar", revenue: 60000 },
  { month: "Apr", revenue: 58000 },
  { month: "May", revenue: 65000 },
  { month: "Jun", revenue: 70000 },
];

const satisfactionData = [
  { name: "Very Satisfied", value: 60 },
  { name: "Satisfied", value: 25 },
  { name: "Neutral", value: 10 },
  { name: "Dissatisfied", value: 4 },
  { name: "Very Dissatisfied", value: 1 },
];

const patientAgeDistributionData = [
  { ageGroup: "0-18", count: 120 },
  { ageGroup: "19-30", count: 250 },
  { ageGroup: "31-45", count: 300 },
  { ageGroup: "46-60", count: 200 },
  { ageGroup: "61+", count: 150 },
];

const doctorPerformanceData = [
  { name: "Dr. Smith", patients: 50, satisfaction: 4.8 },
  { name: "Dr. Johnson", patients: 45, satisfaction: 4.6 },
  { name: "Dr. Williams", patients: 55, satisfaction: 4.9 },
  { name: "Dr. Brown", patients: 40, satisfaction: 4.7 },
  { name: "Dr. Jones", patients: 48, satisfaction: 4.5 },
];

const waitingTimeAnalysisData = [
  { time: "9:00", waitTime: 10 },
  { time: "10:00", waitTime: 15 },
  { time: "11:00", waitTime: 20 },
  { time: "12:00", waitTime: 25 },
  { time: "13:00", waitTime: 30 },
  { time: "14:00", waitTime: 20 },
  { time: "15:00", waitTime: 15 },
  { time: "16:00", waitTime: 10 },
];

const ressourceUtilizationData = [
  { resource: "Beds", utilization: 80 },
  { resource: "Operating Rooms", utilization: 70 },
  { resource: "MRI Machines", utilization: 60 },
  { resource: "X-Ray Machines", utilization: 75 },
  { resource: "Ambulances", utilization: 65 },
];

const upcomingAppointmentsData = {
  "2024-10-20": [
    { time: "09:00", patient: "John Doe", reason: "Check-up" },
    { time: "11:30", patient: "Jane Smith", reason: "Follow-up" },
  ],
  "2024-10-21": [
    { time: "10:00", patient: "Alice Johnson", reason: "Consultation" },
    { time: "14:00", patient: "Bob Brown", reason: "Vaccination" },
    { time: "16:30", patient: "Charlie Davis", reason: "Test Results" },
    {
      time: "10:30",
      patient: "Henry Lee",
      reason: "Appointment with Dr. Mike Johnson",
    },
  ],
  "2024-10-22": [
    { time: "14:00", patient: "Isabel Taylor", reason: "Pending Appointment" },
  ],
  "2024-10-23": [
    {
      time: "11:00",
      patient: "James Brown",
      reason: "Appointment with Dr. Alex Jones",
    },
  ],
  "2024-10-24": [
    { time: "15:00", patient: "Karen Thompson", reason: "Pending Appointment" },
  ],
  "2024-10-25": [
    {
      time: "13:30",
      patient: "Louis Clark",
      reason: "Appointment with Dr. Jane Smith",
    },
  ],
  "2024-10-26": [
    { time: "09:15", patient: "Nina Walker", reason: "Pending Appointment" },
  ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export {
  doctors,
  patients,
  appointments,
  departmentData,
  appointmentsByDay,
  taxiBookings,
  patientGrowthData,
  revenueData,
  satisfactionData,
  patientAgeDistributionData,
  doctorPerformanceData,
  waitingTimeAnalysisData,
  ressourceUtilizationData,
  upcomingAppointmentsData,
  COLORS,
};
