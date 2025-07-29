import Button from "./../components/Button";
import Navbar from "./../components/Navbar";
import organizeImg from "./../assets/organize.png";

function Landing() {
  return (
    <>
      <Navbar />
      <section className="mx-5 flex justify-around flex-wrap">
        <img src={organizeImg} alt="Image" className="h-120 w-120" />
        <div>
          <h1 className="text-center m-12 text-5xl font-bold">
            {" "}
            Organize your Hackathon
          </h1>
          <div className="w-160 mx-auto text-center text-xl text-gray-600">
            Host Your Own Hackathon! There's nothing more exciting than creating
            a space where innovation thrives. Take the leap from participant to
            organizer and bring your hackathon vision to life! Join hundreds of
            other organizers on Devfolio - streamline applications, manage
            submissions, communicate with participants, handle reimbursements,
            and run judging, all in one place.
          </div>
          <div className="text-center mt-15">
            <Button BtnTitle={"Organize your Hackathon"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
