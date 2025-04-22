import { Link } from "react-router-dom";

export default function Erorr404() {
  return (
    <main className="bg-0-darkest-0">
      <div className=" flex flex-col items-center py-10 my-32">
        <h1 className="text-white font-Inter font-bold text-9xl">404</h1>
        <h2 className="text-0-Primary2-0">
          THERE IS NOTHING HERE{" "}
          <Link to={"/"} className="text-0-secondary-0 underline">
            GOBACK
          </Link>
        </h2>
      </div>
    </main>
  );
}
