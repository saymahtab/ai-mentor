export const roadmaps = [
  {
    name: "Java Learning Journey",
    children: [
      {
        name: "Java Fundamentals",
        children: [
          {
            name: "Basic Concepts",
            children: [
              { name: "Syntax & Structure" },
              { name: "Variables & Data Types" },
              { name: "Operators & Expressions" },
              { name: "Basic I/O" }
            ]
          },
          {
            name: "Control Flow",
            children: [
              { name: "Conditionals" },
              { name: "Loops" },
              { name: "Methods" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "JavaScript",
    children: [
      {
        name: "JavaScript Fundamentals",
        children: [
          {
            name: "Basic Concepts",
            children: [
              { name: "Syntax & Structure" },
              { name: "Variables (var, let, const)" },
              { name: "Data Types" },
              { name: "Operators & Expressions" },
              { name: "Basic I/O (prompt, alert, console)" }
            ]
          },
          {
            name: "Control Flow",
            children: [
              { name: "Conditionals (if, switch)" },
              { name: "Loops" ,children:[
                 {name:"For Loop"} ,{name:"do-while"},{name:"while"}
              ] },
              { name: "Functions" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "React",
    children: [
      {
        name: "React Fundamentals",
        children: [
          {
            name: "Basic Concepts",
            children: [
              { name: "JSX Syntax" },
              { name: "Components & Props" },
              { name: "State & Events" },
              { name: "Conditional Rendering" }
            ]
          },
          {
            name: "Core Features",
            children: [
              { name: "Lists & Keys" },
              { name: "Forms" },
              { name: "Lifting State Up" },
              { name: "Composition vs Inheritance" }
            ]
          }
        ]
      },
      {
        name: "React Advanced",
        children: [
          {
            name: "Hooks",
            children: [
              { name: "useState" },
              { name: "useEffect" },
              { name: "useContext" },
              { name: "Custom Hooks" }
            ]
          },
          {
            name: "Performance",
            children: [
              { name: "Code Splitting" },
              { name: "React.memo" },
              { name: "useCallback & useMemo" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Frontend",
    children: [
      {
        name: "Basics",
        children: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "JavaScript" }
        ]
      },
      {
        name: "Advanced",
        children: [
          { name: "Responsive Design" },
          {
            name: "CSS Frameworks", children: [
              { name: "Tailwind"} ,{name:"Bootstrap"}
            ]
          },
          { name: "Accessibility (A11y)" }
        ]
      }
    ]
  },
  {
    name: "Backend",
    children: [
      {
        name: "Core Concepts",
        children: [
          { name: "HTTP & APIs" },
          { name: "Authentication" },
          { name: "Databases (SQL, NoSQL)" }
        ]
      },
      {
        name: "Frameworks & Tools",
        children: [
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "RESTful APIs" }
        ]
      }
    ]
  },
  {
    name: "React",
    children: [
      {
        name: "React Fundamentals",
        children: [
          {
            name: "Basic Concepts",
            children: [
              { name: "JSX Syntax" },
              { name: "Components & Props" },
              { name: "State & Events" },
              { name: "Conditional Rendering" }
            ]
          },
          {
            name: "Core Features",
            children: [
              { name: "Lists & Keys" },
              { name: "Forms" },
              { name: "Lifting State Up" },
              { name: "Composition vs Inheritance" }
            ]
          }
        ]
      },
      {
        name: "React Advanced",
        children: [
          {
            name: "Hooks",
            children: [
              { name: "useState" },
              { name: "useEffect" },
              { name: "useContext" },
              { name: "Custom Hooks" }
            ]
          },
          {
            name: "Performance",
            children: [
              { name: "Code Splitting" },
              { name: "React.memo" },
              { name: "useCallback & useMemo" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "C++",
    children: [
      {
        name: "Basics",
        children: [
          { name: "Syntax & Structure" },
          { name: "Variables & Data Types" },
          { name: "Operators" }
        ]
      },
      {
        name: "Intermediate",
        children: [
          { name: "Functions" },
          { name: "Pointers" },
          { name: "Arrays & Strings" }
        ]
      },
      {
        name: "Advanced",
        children: [
          { name: "OOP Concepts" },
          { name: "Inheritance & Polymorphism" },
          { name: "STL (Vectors, Maps, etc.)" }
        ]
      }
    ]
  }
];
