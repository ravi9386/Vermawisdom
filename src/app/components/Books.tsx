import { useState } from "react";

// simple placeholder component for books list
export function Books() {
  const [books] = useState<string[]>([
    'Psychology of Money',
    'The Hard Thing About Hard Things',
    'No Rules Rules',
    'Atomic Habits',
  ]);

  return (
    <aside className="w-64 bg-white shadow-md border-l border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Books I Read</h2>
      <div className="space-y-2 text-sm">
        {books.length === 0 ? (
          <p className="text-gray-500">No books added yet.</p>
        ) : (
          books.map((title, idx) => (
            <p key={idx}>&bull; {title}</p>
          ))
        )}
      </div>
    </aside>
  );
}
