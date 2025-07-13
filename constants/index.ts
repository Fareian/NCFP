export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  password: "Password",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  password: "password",
};

export const sampleBooks = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fantasy / Fiction",
    description:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
    coverColor: "#1c1f40",
    coverUrl: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    summary:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help / Productivity",
    description:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    coverColor: "#fffdf6",
    coverUrl: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    summary:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    category: "Computer Science / JavaScript",
    description:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    coverColor: "#f8e036",
    coverUrl:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    summary:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Philosophy / Adventure",
    description:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    coverColor: "#ed6322",
    coverUrl:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    summary:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    createdAt: new Date(),
  },
  {
    id: "5",
    title: "Deep Work",
    author: "Cal Newport",
    category: "Self-Help / Productivity",
    description:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    coverColor: "#ffffff",
    coverUrl: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    summary:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    createdAt: new Date(),
  },
  {
    id: "6",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Computer Science / Programming",
    description:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    coverColor: "#080c0d",
    coverUrl:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    summary:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    createdAt: new Date(),
  },
  {
    id: "7",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    category: "Computer Science / Programming",
    description:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
    coverColor: "#100f15",
    coverUrl:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    summary:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
    createdAt: new Date(),
  },
  {
    id: "8",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance / Self-Help",
    description:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
    coverColor: "#ffffff",
    coverUrl:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    summary:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
    createdAt: new Date(),
  },
];
