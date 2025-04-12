import Navbar from "../components/navbar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
          <p className="text-gray-600">This page will contain your detailed profile information.</p>
        </div>
      </main>
    </div>
  );
} 