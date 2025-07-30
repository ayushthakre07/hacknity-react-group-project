import Button from "../components/Button";
import Navbar from "../components/Navbar";
import organizeImg from "./../assets/organize.png";
import { Link } from "react-router";

function Organize() {
  return (
    <>
      <Navbar />
      <section className="px-4 py-10 flex flex-col lg:flex-row items-center justify-center gap-8">
        <img
          src={organizeImg}
          alt="Organize"
          className="w-full max-w-md lg:max-w-lg"
        />
        <div className="max-w-xl text-center lg:text-left px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Organize your Hackathon
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Host Your Own Hackathon! There's nothing more exciting than creating
            a space where innovation thrives. Take the leap from participant to
            organizer and bring your hackathon vision to life! Join hundreds of
            other organizers on Devfolio — streamline applications, manage
            submissions, communicate with participants, handle reimbursements,
            and run judging, all in one place.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              BtnTitle={<Link to="/dashboard">Organize your Hackathon</Link>}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Organize;
