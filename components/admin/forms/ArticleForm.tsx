"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";
import { createArticle } from "@/lib/admin/actions/article";
import { toast } from "@/hooks/use-toast";

const articleSchema = z.object({
  title: z.string().trim().min(2).max(255),
  author: z.string().trim().min(2).max(255),
  summary: z.string().trim().min(10).max(500),
  content: z.string().trim().min(10),
  coverUrl: z.string().nonempty(),
});

interface Props {
  type?: "create" | "update";
  defaultValues?: Partial<z.infer<typeof articleSchema>>;
}

const ArticleForm = ({ type = "create", defaultValues }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: defaultValues || {
      title: "",
      author: "",
      summary: "",
      content: "",
      coverUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof articleSchema>) => {
    const result = await createArticle(values);
    if (result.success) {
      toast({ title: "Success", description: "Article saved successfully" });
      router.push("/admin/articles");
    } else {
      toast({ title: "Error", description: result.message, variant: "destructive" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input required placeholder="Article title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"author"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input required placeholder="Author" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"summary"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea required placeholder="Short summary" {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"coverUrl"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Cover Image</FormLabel>
              <FormControl>
                <FileUpload
                  type="image"
                  accept="image/*"
                  placeholder="Upload a cover image"
                  folder="articles/covers"
                  variant="light"
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"content"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea required placeholder="Full article content (HTML allowed)" {...field} rows={10} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {type === "create" ? "Create Article" : "Update Article"}
        </Button>
      </form>
    </Form>
  );
};

export default ArticleForm; 