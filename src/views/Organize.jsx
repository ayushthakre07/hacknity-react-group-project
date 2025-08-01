import Button from "../components/Button";
import Navbar from "../components/Navbar";
import organizeImg from "./../assets/organize.png";
import { Link } from "react-router";
import Heading from "./../components/Heading";
import Footer from "./../components/Footer";

function Organize() {
  return (
    <>
      <Navbar openPage={"/organize"} />
      <section className="py-4 pt-10 flex flex-col lg:flex-row items-center justify-center gap-8">
        <img
          src={organizeImg}
          alt="Organize"
          className="w-full max-w-md lg:max-w-lg"
        />
        <div className="max-w-[650px] text-center lg:text-left px-4">
          <Heading
            headingTitle={"Organize your Hackathon"}
            customStyle={"lg:text-left! "}
          />

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
      <Footer/>
    </>
  );
}

export default Organize;
