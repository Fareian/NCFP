interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverColor: string;
  coverUrl: string;
  summary: string;
  createdAt: Date | null;
  isLoanedBook?: boolean;
  fileUrl: string; // Added for download functionality
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
}

interface BookParams {
  title: string;
  author: string;
  category: string;
  description: string;
  summary: string;
  fileUrl: string; // Added for download functionality
}
