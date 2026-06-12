import Navbar from "../components/navbar";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>
          <p className="text-gray-600">This page will display your portfolio of projects.</p>
        </div>
      </main>
    </div>
  );
} 