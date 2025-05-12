// 2. app/page.tsx - homepage (lista oglasa)

import AdList from "./components/AdList";
export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Oglasi</h1>
      <AdList />
    </div>
  );
}