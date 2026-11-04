import ClassHistoryCard from "./ClassHistoryCard";

interface Course {
  courseCode: string,
  title: string,
  status: string,
  credits: string,
  grade?: string
}

interface ClassHistoryListProps {
  classHistory: Course[];
}

export default function ClassHistoryList({ classHistory }: ClassHistoryListProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {classHistory.map((course) => (
      <ClassHistoryCard key={course.courseCode} {...course} />
      ))}
    </section>
  )
}