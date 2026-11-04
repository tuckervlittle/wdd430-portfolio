import ProjectList from "@/components/ProjectList";
const projects = [
  {
    title: 'Community Booking System',
    description: 'A project showing API route handling, error handling, and OAuth authentication.',
    technologies: ['Express', 'JavaScript', 'Mongodb', 'Passport'],
    link: 'https://cse341-reservations.onrender.com'
  },
  {
    title: 'Contacts API',
    description: 'A simple API app demonstrating CRUD',
    technologies: ['Express', 'JavaScript', 'Swagger'],
    // link: 'https://cse341-project1-1-84cc.onrender.com/api-docs'
  }
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl text-violet-700/80 font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">I am a student learning full stack development. Here is a selection of my previous projects.</p>
      </section>
      <ProjectList projects={projects} />
  </main>
  );
}
