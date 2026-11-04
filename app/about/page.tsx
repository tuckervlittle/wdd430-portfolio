import ClassHistoryList from "@/components/ClassHistoryList";
const classes = [
  {
    courseCode: 'CSE300',
    title: 'Professional Readiness',
    status: 'Current',
    credits: '1.00'
  },
  {
    courseCode: 'WDD430',
    title: 'Web Full-Stack Development',
    status: 'Current',
    credits: '3.00'
  },
  {
    courseCode: 'PC103',
    title: 'University Skills',
    status: 'Fulfilled',
    credits: '1.00',
    grade: 'A'
  },
  {
    courseCode: 'GS170',
    title: 'Career Development',
    status: 'Fulfilled',
    credits: '1.00',
    grade: 'A'
  },
]

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
          <section className="text-center py-12">
            <h1 className="text-4xl text-violet-700/80 font-bold mb-4">Course List</h1>
            <p className="text-lg text-gray-700">I am a student of Software Development. Here is a list of courses attended.</p>
          </section>
          <ClassHistoryList classHistory={classes} />
      </main>
  )
}