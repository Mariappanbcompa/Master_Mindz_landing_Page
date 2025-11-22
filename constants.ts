import { CheckCircle, Clock, Layout, Users, Award, Video, Briefcase, MonitorPlay } from 'lucide-react';
import { Feature, Project, SyllabusItem, Testimonial } from './types';

export const COMPANY_NAME = "Master Mindz IT Solutions";
export const COURSE_NAME = "Mastery Excel & VBA Automation Program";

export const NAV_LINKS = [
  { label: 'Overview', href: '#hero' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#testimonials' },
];

export const HERO_CONTENT = {
  title: "Master Excel. Automate Everything.",
  subtitle: "Accelerate Your Career",
  description: "Go from beginner to automation expert. Master Advanced Excel, Dashboards, and VBA to save hours of work and become indispensable.",
  benefitLine: "Join 500+ professionals automating their daily tasks.",
};

export const TARGET_AUDIENCE = [
  "Students & Graduates",
  "Job Seekers",
  "MIS Analysts",
  "Working Professionals",
  "Data Managers",
  "Entrepreneurs"
];

export const WHY_JOIN_POINTS = [
  "Career Acceleration: Unlock high-paying roles in data analysis.",
  "Time Saving: Automate boring, repetitive tasks instantly.",
  "Hands-on Learning: 80% practical, 20% theory approach.",
  "Expert Mentorship: Learn from industry veterans."
];

export const EXCEL_MODULES: SyllabusItem[] = [
  {
    title: "Module 1: Foundation & Data Hygiene",
    duration: "Week 1-2",
    description: "Master the interface and learn professional techniques to clean and prepare messy data for analysis.",
    topics: [
      "Excel Interface, Shortcuts & Smart Navigation",
      "Data Cleaning (Text-to-Columns, Flash Fill, Trimming)",
      "Cell Referencing (Relative, Absolute, Mixed)",
      "Advanced Conditional Formatting & Data Bars",
      "Data Validation, Dropdowns & Protection Security"
    ]
  },
  {
    title: "Module 2: Core Functions & Logic Mastery",
    duration: "Week 3-4",
    description: "Stop doing manual calculations. Learn to write complex, dynamic formulas to solve business problems.",
    topics: [
      "Logical Functions (IF, IFS, AND, OR, IFERROR)",
      "Lookup Mastery (VLOOKUP, HLOOKUP, XLOOKUP, MATCH)",
      "Text & Date Functions (LEFT, MID, WORKDAY, EOMONTH)",
      "Dynamic Array Formulas (FILTER, SORT, UNIQUE)",
      "Formula Auditing, Tracing & Troubleshooting"
    ]
  },
  {
    title: "Module 3: Advanced Analytics & Dashboards",
    duration: "Week 5",
    description: "Transform raw numbers into actionable insights and build interactive, professional executive dashboards.",
    topics: [
      "PivotTables: Grouping, Calculated Fields & Reporting",
      "Slicers & Interactive Timelines for Dashboards",
      "Power Query Basics (Import, Transform, Load Data)",
      "Advanced Charting (Combo, Waterfall, Sparklines, Maps)",
      "Building a Fully Dynamic Sales KPI Dashboard"
    ]
  }
];

export const VBA_MODULES: SyllabusItem[] = [
  {
    title: "Module 4: Intro to Macros & VBA Environment",
    duration: "Week 6",
    description: "Step into the world of automation. Record your first macro and understand the code structure behind it.",
    topics: [
      "Recording vs. Writing Macros: Best Practices",
      "The VBA Editor (VBE): Project Explorer & Properties",
      "Understanding Modules, Subroutines, and Syntax",
      "Debugging Tools: Breakpoints, Watch Window, Immediate",
      "Assigning Macros to Buttons, Shapes & Ribbon"
    ]
  },
  {
    title: "Module 5: VBA Programming Core",
    duration: "Week 7-8",
    description: "Learn the language of automation. Control how Excel behaves using variables, loops, and logic.",
    topics: [
      "Variables, Constants & Data Types (Dim, Set)",
      "The Object Hierarchy (Application, Workbook, Sheet, Range)",
      "Loops Mastery (For Each, Do While, For Next)",
      "Conditional Logic (If-Then-Else, Select Case)",
      "Interacting with Users (InputBox & MsgBox)"
    ]
  },
  {
    title: "Module 6: Advanced Automation & Integration",
    duration: "Week 9-10",
    description: "Build enterprise-level tools. Connect Excel to Outlook/PDF and create custom applications.",
    topics: [
      "UserForms: Designing Custom Data Entry Interfaces",
      "Event Handling (Workbook_Open, Sheet_Change)",
      "Automating Outlook: Sending Emails with Attachments",
      "Generating PDF Reports & Saving Files Automatically",
      "Error Handling Strategies & Code Optimization",
      "Capstone Project: End-to-End Business Automation Tool"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Sales Executive Dashboard",
    description: "Build a fully interactive dashboard tracking KPIs, regional sales, and performance metrics using Slicers and Charts.",
    tags: ["Excel", "Dashboards", "Analytics"]
  },
  {
    title: "Automated Email Reporter",
    description: "Create a VBA tool that generates PDF reports from data and automatically emails them to stakeholders via Outlook.",
    tags: ["VBA", "Automation", "Outlook"]
  },
  {
    title: "Automated Payroll & HR Suite",
    description: "Design a complete employee management system to calculate salaries, generate payslips, and track attendance with zero manual effort.",
    tags: ["HR", "Payroll", "VBA"]
  },
  {
    title: "One-Click Data Cleaner",
    description: "Write a script to import raw, messy data from CSVs, clean it, format it, and prepare it for analysis instantly.",
    tags: ["Power Query", "Macros", "ETL"]
  }
];

export const FEATURES: Feature[] = [
  { icon: Video, title: "Live Interactive Classes", description: "Real-time learning with instant doubt resolution." },
  { icon: MonitorPlay, title: "Lifetime Access", description: "Access recordings and materials whenever you need." },
  { icon: Briefcase, title: "Job Assistance", description: "Resume building and interview prep for analytics roles." },
  { icon: Award, title: "Certification", description: "Earn a recognized certificate upon course completion." },
  { icon: Layout, title: "Project Portfolio", description: "Build a portfolio of 4+ real-world projects." },
  { icon: Users, title: "Community Access", description: "Join a network of like-minded automation experts." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "MIS Analyst",
    company: "FinTech Corp",
    content: "This course changed my career path. I used to spend 4 hours daily on reports. After learning VBA from Master Mindz, I automated the entire process to just 15 minutes!",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Operations Manager",
    company: "Logistics Solutions",
    content: "The practical approach is what sets this institute apart. The projects we built were exactly what I needed to implement in my current job. Highly recommended.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    role: "Commerce Graduate",
    company: "Job Seeker",
    content: "I was struggling to find a job because my Excel skills were basic. After completing this program, I cracked my first interview as a Data Analyst. Thank you!",
    image: "https://i.pravatar.cc/150?img=9"
  }
];

export const SYSTEM_INSTRUCTION = `
You are a helpful, professional Course Counselor for Master Mindz IT Solutions.
Your goal is to answer questions about the 'Mastery Excel & VBA Automation Program' to potential students.
Use the following syllabus and details to answer:

Course Name: ${COURSE_NAME}
Institute: ${COMPANY_NAME}

Modules:
- Introduction to Excel, Essential Functions
- Data Formatting, Cleaning, Management, Analytics
- Charts, Visualization, PivotTables, Power Query
- Advanced Formulas, Macros (Recording & Running)
- VBA: Variables, Loops, Conditions, Objects, Events
- VBA: UserForms, Email Automation, Report Automation
- Real-time Business Projects

Target Audience: ${TARGET_AUDIENCE.join(', ')}

Key Benefits: Career growth, automation skills, practical focus.

Tone: Encouraging, professional, concise. If asked about price or schedule, ask them to click 'Book a Demo' for latest details.
`;