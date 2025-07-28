import { Link } from "react-router";

export default function Home() {
  return (
    <div className="grow text-2xl flex justify-center items-center flex-col gap-4">
      <h1>This is home page</h1>
      <Link to={`/counter`}>Start Now</Link>
    </div>
  );
}
