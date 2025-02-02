"use client";
import BookList from "@/components/home/book-list.component";
import Hero from "@/components/home/hero.component";
import { api } from "@/services/api";
import useAuthStore from "@/stores/auth.store";
import useBookStore from "@/stores/book.store";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const getBooks = useBookStore((state) => state.getBooks);

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <>
      <Hero />
      <BookList />
    </>
  );
}
