interface ClassHistoryProps{
  courseCode: string,
  title: string,
  status: string,
  credits: string,
  grade?: string
}

export default function ClassHistoryCard({ title, status, courseCode, credits, grade }: ClassHistoryProps) {
  return (
    <article className="p-4 border-1-4 border-blue-600 bg-gray-50 rounded">
      <h3 className=" text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-700 mb-3">Status: {status}</p>
      <p className="text-gray-700">Course Code:{courseCode}</p>
      <p className="text-gray-700">Credits:{credits}</p>
      <p className="text-gray-700">Grade:{grade}</p>
    </article>
  );
}