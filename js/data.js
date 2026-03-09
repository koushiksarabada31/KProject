// ===== MOCK DATA (from mock-data.ts) =====

const studentProfile = {
  rollNumber: "22BEC001",
  name: "Aarav Sharma",
  email: "aarav.sharma@kluniversity.in",
  phone: "+91 98765 43210",
  bloodGroup: "B+",
  department: "Computer Science & Engineering",
  program: "B.Tech",
  semester: 4,
  cgpa: 8.75,
  totalCredits: 82,
  requiredCredits: 160,
  avatar: "",
};

const semesterMarksData = {
  1: [
    { subject: "Mathematics I", code: "MA101", internal: 26, external: 56, total: 82, grade: "A+", credits: 4, gpa: 10 },
    { subject: "Physics", code: "PH101", internal: 24, external: 50, total: 74, grade: "A", credits: 3, gpa: 9 },
    { subject: "Programming in C", code: "CS101", internal: 28, external: 60, total: 88, grade: "A+", credits: 4, gpa: 10 },
    { subject: "English", code: "EN101", internal: 20, external: 48, total: 68, grade: "B+", credits: 2, gpa: 8 },
    { subject: "Engineering Drawing", code: "ME101", internal: 25, external: 52, total: 77, grade: "A", credits: 3, gpa: 9 },
  ],
  2: [
    { subject: "Mathematics II", code: "MA102", internal: 25, external: 54, total: 79, grade: "A", credits: 4, gpa: 9 },
    { subject: "Chemistry", code: "CH101", internal: 22, external: 46, total: 68, grade: "B+", credits: 3, gpa: 8 },
    { subject: "Python Programming", code: "CS102", internal: 28, external: 62, total: 90, grade: "A+", credits: 4, gpa: 10 },
    { subject: "EVS", code: "HS101", internal: 24, external: 52, total: 76, grade: "A", credits: 2, gpa: 9 },
    { subject: "Workshop", code: "ME102", internal: 25, external: 50, total: 75, grade: "A", credits: 3, gpa: 9 },
  ],
  3: [
    { subject: "Mathematics III", code: "MA201", internal: 22, external: 48, total: 70, grade: "B+", credits: 4, gpa: 8 },
    { subject: "Data Structures", code: "CS201", internal: 28, external: 58, total: 86, grade: "A+", credits: 4, gpa: 10 },
    { subject: "Digital Logic", code: "CS202", internal: 24, external: 52, total: 76, grade: "A", credits: 3, gpa: 9 },
    { subject: "Discrete Mathematics", code: "CS203", internal: 25, external: 53, total: 78, grade: "A", credits: 3, gpa: 9 },
    { subject: "Economics", code: "HS201", internal: 21, external: 47, total: 68, grade: "B+", credits: 2, gpa: 8 },
  ],
  4: [
    { subject: "Data Structures", code: "CS201", internal: 28, external: 58, total: 86, grade: "A+", credits: 4, gpa: 10 },
    { subject: "Digital Logic", code: "CS202", internal: 24, external: 52, total: 76, grade: "A", credits: 3, gpa: 9 },
    { subject: "Mathematics III", code: "MA201", internal: 22, external: 48, total: 70, grade: "B+", credits: 4, gpa: 8 },
    { subject: "OOP with Java", code: "CS203", internal: 27, external: 60, total: 87, grade: "A+", credits: 4, gpa: 10 },
    { subject: "Database Systems", code: "CS204", internal: 25, external: 54, total: 79, grade: "A", credits: 3, gpa: 9 },
    { subject: "Computer Networks", code: "CS205", internal: 20, external: 45, total: 65, grade: "B", credits: 3, gpa: 7 },
  ],
};

const gpaTrend = [
  { semester: "Sem 1", gpa: 8.2 },
  { semester: "Sem 2", gpa: 8.5 },
  { semester: "Sem 3", gpa: 8.9 },
  { semester: "Sem 4", gpa: 9.1 },
];

const assignments = [
  { id: 1, title: "Binary Search Tree Implementation", subject: "Data Structures", dueDate: "2024-03-15", status: "submitted", grade: 92 },
  { id: 2, title: "Karnaugh Map Simplification", subject: "Digital Logic", dueDate: "2024-03-18", status: "graded", grade: 85 },
  { id: 3, title: "Eigenvalue Problem Set", subject: "Mathematics III", dueDate: "2024-03-22", status: "pending", grade: null },
  { id: 4, title: "Java Design Patterns", subject: "OOP with Java", dueDate: "2024-03-10", status: "overdue", grade: null },
  { id: 5, title: "SQL Query Optimization", subject: "Database Systems", dueDate: "2024-03-25", status: "pending", grade: null },
  { id: 6, title: "TCP/IP Protocol Analysis", subject: "Computer Networks", dueDate: "2024-03-20", status: "submitted", grade: null },
];

const sampleAssignments = [
  { subject: "Data Structures", title: "Binary Search Tree Template", url: "#" },
  { subject: "Database Systems", title: "SQL Query Examples", url: "#" },
  { subject: "Web Technologies", title: "JavaScript DOM Sample", url: "#" },
  { subject: "OOP with Java", title: "Design Patterns Reference", url: "#" },
];

const notes = [
  { id: 1, title: "DS Complete Notes", subject: "Data Structures", type: "PDF", size: "4.2 MB", downloads: 342, downloadFile: "downloads/notes/DS-Complete-Notes.html" },
  { id: 2, title: "Digital Logic PPT - Unit 3", subject: "Digital Logic", type: "PPT", size: "12.1 MB", downloads: 189, downloadFile: "downloads/notes/Digital-Logic-Unit3-PPT.html" },
  { id: 3, title: "Linear Algebra Video Lectures", subject: "Mathematics III", type: "Video", size: "250 MB", downloads: 567, downloadFile: "downloads/notes/Math3-Linear-Algebra-Lectures.html" },
  { id: 4, title: "Java Collections Framework", subject: "OOP with Java", type: "PDF", size: "2.8 MB", downloads: 423, downloadFile: "downloads/notes/Java-Collections-Framework.html" },
  { id: 5, title: "DBMS Normalization Notes", subject: "Database Systems", type: "Notes", size: "1.5 MB", downloads: 298, downloadFile: "downloads/notes/DBMS-Normalization-Notes.html" },
  { id: 6, title: "OSI Model eBook", subject: "Computer Networks", type: "eBook", size: "8.7 MB", downloads: 156, downloadFile: "downloads/notes/OSI-Model-eBook.html" },
];

const papers = [
  { id: 1, subject: "Data Structures", year: "2023", type: "Endterm", difficulty: "Medium", hasSolutions: true, downloadFile: "downloads/papers/DS-Endterm-2023.html" },
  { id: 2, subject: "Digital Logic", year: "2023", type: "Midterm", difficulty: "Easy", hasSolutions: true, downloadFile: "downloads/papers/DigitalLogic-Midterm-2023.html" },
  { id: 3, subject: "Mathematics III", year: "2022", type: "Endterm", difficulty: "Hard", hasSolutions: false, downloadFile: "downloads/papers/Math3-Endterm-2022.html" },
  { id: 4, subject: "OOP with Java", year: "2023", type: "Quiz", difficulty: "Easy", hasSolutions: true, downloadFile: "downloads/papers/Java-Quiz-2023.html" },
  { id: 5, subject: "Database Systems", year: "2022", type: "Endterm", difficulty: "Medium", hasSolutions: true, downloadFile: "downloads/papers/DBMS-Endterm-2022.html" },
  { id: 6, subject: "Computer Networks", year: "2023", type: "Midterm", difficulty: "Medium", hasSolutions: false, downloadFile: "downloads/papers/Networks-Midterm-2023.html" },
];

const exams = [
  { id: 1, subject: "Data Structures", date: "2024-04-10", time: "09:00 AM", center: "Block A", room: "A-201", seat: "15", syllabus: "Units 1-5" },
  { id: 2, subject: "Digital Logic", date: "2024-04-12", time: "02:00 PM", center: "Block B", room: "B-105", seat: "22", syllabus: "Units 1-4" },
  { id: 3, subject: "Mathematics III", date: "2024-04-15", time: "09:00 AM", center: "Block A", room: "A-301", seat: "8", syllabus: "Units 1-6" },
  { id: 4, subject: "OOP with Java", date: "2024-04-17", time: "02:00 PM", center: "Block C", room: "C-202", seat: "31", syllabus: "Units 1-5" },
  { id: 5, subject: "Database Systems", date: "2024-04-19", time: "09:00 AM", center: "Block A", room: "A-102", seat: "19", syllabus: "Units 1-4" },
];

const practiceExams = [
  {
    id: 1, title: "DS Mid Prep", subject: "Data Structures", questions: 5, duration: "10 min", difficulty: "Medium", bestScore: 87, attempts: 3,
    questionList: [
      { q: "What is the time complexity of searching in a balanced BST?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: 1, explanation: "A balanced BST has height log(n), so search is O(log n)." },
      { q: "Which data structure uses LIFO principle?", options: ["Queue", "Stack", "Array", "Linked List"], answer: 1, explanation: "Stack uses Last-In-First-Out (LIFO) principle." },
      { q: "What is the worst-case time of quicksort?", options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], answer: 1, explanation: "Worst-case is O(n²) when pivot is always the smallest or largest element." },
      { q: "Which traversal gives sorted order in BST?", options: ["Preorder", "Inorder", "Postorder", "Level order"], answer: 1, explanation: "Inorder traversal of BST gives elements in sorted (ascending) order." },
      { q: "What is the space complexity of merge sort?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 2, explanation: "Merge sort requires O(n) auxiliary space for merging." },
    ]
  },
  {
    id: 2, title: "Java Basics Quiz", subject: "OOP with Java", questions: 5, duration: "10 min", difficulty: "Easy", bestScore: 95, attempts: 2,
    questionList: [
      { q: "Which keyword is used to inherit a class in Java?", options: ["implements", "extends", "inherits", "super"], answer: 1, explanation: "'extends' keyword is used for class inheritance in Java." },
      { q: "What is the default value of an int variable in Java?", options: ["null", "undefined", "0", "1"], answer: 2, explanation: "Primitive int defaults to 0 in Java." },
      { q: "Which method is the entry point of a Java program?", options: ["start()", "main()", "run()", "init()"], answer: 1, explanation: "public static void main(String[] args) is the entry point." },
      { q: "What does JVM stand for?", options: ["Java Visual Machine", "Java Virtual Machine", "Java Variable Machine", "Java Verified Machine"], answer: 1, explanation: "JVM = Java Virtual Machine, it executes Java bytecode." },
      { q: "Which of these is not a Java access modifier?", options: ["public", "private", "friend", "protected"], answer: 2, explanation: "'friend' is a C++ keyword, not a Java access modifier." },
    ]
  },
  {
    id: 3, title: "DBMS Final Prep", subject: "Database Systems", questions: 5, duration: "15 min", difficulty: "Hard", bestScore: null, attempts: 0,
    questionList: [
      { q: "What is the highest normal form that eliminates all anomalies?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: 3, explanation: "BCNF (Boyce-Codd Normal Form) eliminates all functional dependency anomalies." },
      { q: "Which SQL command is used to remove a table?", options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"], answer: 2, explanation: "DROP TABLE removes the table structure and data entirely." },
      { q: "What does ACID stand for in databases?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Identity, Data", "Atomicity, Control, Isolation, Data", "Access, Consistency, Identity, Durability"], answer: 0, explanation: "ACID = Atomicity, Consistency, Isolation, Durability — transaction properties." },
      { q: "Which join returns all rows from both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], answer: 3, explanation: "FULL OUTER JOIN returns all rows from both tables, with NULL for non-matching." },
      { q: "What is a candidate key?", options: ["A foreign key", "A minimal superkey", "A primary key", "An alternate key"], answer: 1, explanation: "A candidate key is a minimal set of attributes that uniquely identifies a tuple." },
    ]
  },
  {
    id: 4, title: "Network Fundamentals", subject: "Computer Networks", questions: 5, duration: "10 min", difficulty: "Medium", bestScore: 72, attempts: 1,
    questionList: [
      { q: "Which layer of OSI model handles routing?", options: ["Data Link", "Network", "Transport", "Session"], answer: 1, explanation: "The Network Layer (Layer 3) handles routing between networks." },
      { q: "What protocol does HTTP use at the transport layer?", options: ["UDP", "TCP", "ICMP", "ARP"], answer: 1, explanation: "HTTP uses TCP (Transmission Control Protocol) for reliable data transfer." },
      { q: "What is the maximum number of hosts in a /24 network?", options: ["256", "254", "255", "512"], answer: 1, explanation: "A /24 network has 256 addresses, but 2 are reserved (network & broadcast), giving 254 usable hosts." },
      { q: "Which device operates at Layer 2?", options: ["Router", "Switch", "Gateway", "Repeater"], answer: 1, explanation: "A switch operates at the Data Link Layer (Layer 2) using MAC addresses." },
      { q: "What does DNS stand for?", options: ["Data Network System", "Domain Name System", "Dynamic Network Service", "Domain Node Switch"], answer: 1, explanation: "DNS = Domain Name System, it translates domain names to IP addresses." },
    ]
  },
];

const curriculum = [
  {
    semester: 1,
    subjects: [
      { name: "Mathematics I", credits: 4, status: "passed", grade: "A" },
      { name: "Physics", credits: 3, status: "passed", grade: "A+" },
      { name: "Programming in C", credits: 4, status: "passed", grade: "A+" },
      { name: "English", credits: 2, status: "passed", grade: "B+" },
      { name: "Engineering Drawing", credits: 3, status: "passed", grade: "A" },
    ],
  },
  {
    semester: 2,
    subjects: [
      { name: "Mathematics II", credits: 4, status: "passed", grade: "A" },
      { name: "Chemistry", credits: 3, status: "passed", grade: "B+" },
      { name: "Python Programming", credits: 4, status: "passed", grade: "A+" },
      { name: "EVS", credits: 2, status: "passed", grade: "A" },
      { name: "Workshop", credits: 3, status: "passed", grade: "A" },
    ],
  },
  {
    semester: 3,
    subjects: [
      { name: "Mathematics III", credits: 4, status: "passed", grade: "B+" },
      { name: "Data Structures", credits: 4, status: "passed", grade: "A+" },
      { name: "Digital Logic", credits: 3, status: "passed", grade: "A" },
      { name: "Discrete Mathematics", credits: 3, status: "passed", grade: "A" },
      { name: "Economics", credits: 2, status: "passed", grade: "B+" },
    ],
  },
  {
    semester: 4,
    subjects: [
      { name: "OOP with Java", credits: 4, status: "in-progress", grade: "-" },
      { name: "Database Systems", credits: 3, status: "in-progress", grade: "-" },
      { name: "Computer Networks", credits: 3, status: "in-progress", grade: "-" },
      { name: "OS Concepts", credits: 4, status: "in-progress", grade: "-" },
      { name: "Probability & Statistics", credits: 3, status: "in-progress", grade: "-" },
    ],
  },
];

const recentActivity = [
  { type: "assignment", message: "BST Implementation submitted", time: "2 hours ago" },
  { type: "grade", message: "Digital Logic: Karnaugh Map graded - 85/100", time: "5 hours ago" },
  { type: "note", message: "New notes uploaded: Java Collections", time: "1 day ago" },
  { type: "exam", message: "Exam schedule updated for Semester 4", time: "2 days ago" },
  { type: "practice", message: "Completed DS Mid Prep - Score: 87%", time: "3 days ago" },
];

// Course Outcomes data
const courseOutcomesData = [
  {
    subject: "Data Structures and Algorithms",
    shortName: "DSA",
    outcomes: [
      { co: "CO1", description: "Analyze problem statements and reason about algorithmic efficiency using asymptotic notation (Big-O, Ω, Θ), recurrence relations, and empirical measurements of time and space complexity.", po: "PO2, PO3, PO5, PO1", btl: 4, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"Asymptotic Analysis & Sorting" — 10 MCQs on Big-O, Ω, Θ, recurrence relations' },
        { feature: "Study Notes", icon: "📄", details: '"Asymptotic Notation & Recurrence Relations" + "Sorting Algorithms Explained"' },
        { feature: "AI Tutor", icon: "💬", details: "Students can ask any question on complexity analysis" },
      ]},
      { co: "CO2", description: "Design and implement Abstract Data Types (ADTs) using arrays and linked lists (singly, doubly, circular), perform typical operations.", po: "PO1, PO2, PO3, PO5", btl: 4, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"Linked Lists & ADTs" — 10 MCQs on singly/doubly/circular linked lists, cycle detection' },
        { feature: "Study Notes", icon: "📄", details: '"Linked Lists — Singly, Doubly & Circular"' },
        { feature: "AI Tutor", icon: "💬", details: "Step-by-step explanations on linked list operations" },
      ]},
      { co: "CO3", description: "Apply stacks and queues (including circular queues and deques) to model real-world workflows. Implement heaps and priority queues.", po: "PO1, PO2, PO3, PO5", btl: 3, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"Stacks, Queues & Heaps" — 10 MCQs' },
        { feature: "Study Notes", icon: "📄", details: '"Stacks, Queues & Deques — Complete Guide"' },
        { feature: "AI Tutor", icon: "💬", details: "Real-time doubt resolution on stack/queue implementations" },
      ]},
      { co: "CO4", description: "Design and implement hash-based data structures (hash tables with chaining and open addressing) and leverage Java Collections.", po: "PO3, PO5, PO2, PO1", btl: 4, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"Hash Tables & Java Collections" — 10 MCQs' },
        { feature: "Study Notes", icon: "📄", details: '"Hash Tables — Chaining & Open Addressing"' },
      ]},
      { co: "CO5", description: "Design, Develop and evaluate common practical applications for linear Data Structures.", po: "PO1, PO2, PO3, PO5, PO9, PO11", btl: 4, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"Practical DS Applications" — MCQs on browser navigation, expression evaluation' },
        { feature: "Study Notes", icon: "📄", details: '"Practical DS Applications & Problem Solving"' },
      ]},
      { co: "CO6", description: "Skill the students to develop and create programs as well as applications in DS.", po: "PO1, PO2, PO3, PO5, PO9, PO11", btl: 5, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: 'Covers autocomplete, memory management applications' },
        { feature: "AI Tutor", icon: "💬", details: "Step-by-step coding guidance for building complete DS applications" },
      ]},
    ],
  },
  {
    subject: "Fundamentals of Web Development",
    shortName: "FWD",
    outcomes: [
      { co: "CO1", description: "Apply Internet Fundamentals, HTML & Introductory CSS Styling.", po: "PO3, PO9, PSO1", btl: 3, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"HTML Fundamentals & CSS Styling" — 10 MCQs' },
        { feature: "Study Notes", icon: "📄", details: '"Internet Fundamentals, HTML & CSS Basics"' },
      ]},
      { co: "CO2", description: "Apply HTML Forms, Semantic Tags & Comprehensive CSS Layouts.", po: "PO3, PO9, PSO1", btl: 3, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"HTML Forms, Semantic Tags & CSS Layouts" — 10 MCQs' },
        { feature: "Study Notes", icon: "📄", details: '"HTML Forms, Semantic Tags & CSS Layouts"' },
      ]},
      { co: "CO3", description: "Apply JavaScript Programming Essentials.", po: "PO3, PO9, PSO1", btl: 3, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"JavaScript Programming Essentials" — 10 MCQs' },
        { feature: "Study Notes", icon: "📄", details: '"JavaScript Programming Essentials"' },
      ]},
      { co: "CO4", description: "Apply JavaScript Interactivity, DOM.", po: "PO3, PO9, PSO1", btl: 3, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"JavaScript Interactivity & DOM" — 10 MCQs' },
        { feature: "Study Notes", icon: "📄", details: '"JavaScript DOM Manipulation & Events"' },
      ]},
      { co: "CO5", description: "Apply Advanced Web Development & Deployment.", po: "PO3, PO9, PSO1", btl: 3, mappings: [
        { feature: "Practice Exams", icon: "🧠", details: '"Advanced Web Development & Deployment" — 10 MCQs' },
        { feature: "This Website", icon: "🌐", details: "The portal itself is a live example of modern web development" },
      ]},
    ],
  },
];

const btlLabels = { 1: "Remember", 2: "Understand", 3: "Apply", 4: "Analyze", 5: "Evaluate", 6: "Create" };
