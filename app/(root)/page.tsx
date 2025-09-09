import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn React",
    description: "React is a JavaScript library for building user interfaces.",
    tags: [
      {
        _id: "1",
        name: "react",
      },
      {
        _id: "2",
        name: "javascript",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      upvotes: 10,
      answers: 2,
      views: 100,
      createdAt: new Date(),
    },
  },
  {
    _id: "2",
    title: "How to learn JavaScript",
    description:
      "JavaScript is a programming language used to build interactive web pages and web applications.",
    tags: [
      {
        _id: "1",
        name: "react",
      },
      {
        _id: "2",
        name: "javascript",
      },
    ],
    author: {
      _id: "1",
      name: "Jhoanna Doe",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      upvotes: 10,
      answers: 2,
      views: 100,
      createdAt: new Date(),
    },
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
