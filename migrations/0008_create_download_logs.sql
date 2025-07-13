CREATE TABLE "download_logs" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL,
  "book_id" uuid NOT NULL,
  "timestamp" timestamp with time zone DEFAULT now()
); 