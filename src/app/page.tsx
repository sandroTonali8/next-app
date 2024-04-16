import Link from "next/link";

export default function Home() {
  return (
    <Link href={'/login'}>
      <button className="bg-blue-500 hover:bg-blue-400 rounded p-1 transition-all text-white">Login</button>
    </Link>
  )
}