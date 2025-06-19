import Image from "next/image";
import ThreeCanvas from '@/components/ThreeCanvas';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <ThreeCanvas />
    </main>
  );
}
