import React from "react";
import Navbar from "../components/Navbar.jsx";
import { useState } from "react";
import { Link } from "react-router";
import Heading from "../components/Heading.jsx";
import Button, { ButtonSecondary } from "../components/Button.jsx";
import RegisterImg from "../../src/assets/Registration.png";
import UpcomingEvent from "../components/UpcomingEvent.jsx";
import JoinUs from "../components/JoinUs.jsx";
import SkillSImg from "../../src/assets/Skills.png";
import CollaborationImg from "../../src/assets/Collaboration.png";
import MentorshipImp from "../../src/assets/Mentorship.png";

function Home() {
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!email.includes("@")) {
      errors.email = "Email is invalid.";
    }
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Registration successful!");
      console.log("Registration data:", { name, email, password });
    }
  };

  return (
    <div>
      <Navbar openPage={"/"} />
      <div className="relative flex items-center justify-center p-8 mt-50 ">
        <div className="relative text-center w-4xl">
          <Heading headingTitle="Welcome to our platform" />
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Join us and unlock your potential and participate in exciting
            hackathon events.
          </p>
          <Link to="/Discover">
            <Button BtnTitle="Get Started" />
          </Link>
        </div>
      </div>

      <div id="registration" className="py-49 ">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="md:flex items-center gap-30">
            <div className="md:w-1/2 ">
              <img src={RegisterImg} alt="Registration" className="h-100 " />
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-8 text-lime-600">
                Register and Start Your Journey
              </h2>
              <form
                onSubmit={validateForm}
                className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
              >
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 ${
                      formErrors.name
                        ? "border-red-500"
                        : "bg-gray-200 border-gray-300 focus:ring-lime-500"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 ${
                      formErrors.email
                        ? "border-red-500"
                        : "bg-gray-200 border-gray-300 focus:ring-lime-500"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 ${
                      formErrors.password
                        ? "border-red-500"
                        : "bg-gray-200 border-gray-300 focus:ring-lime-500"
                    }`}
                  />
                  {formErrors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {formErrors.password}
                    </p>
                  )}
                </div>
                <div className="mx-18">
                  <ButtonSecondary BtnTitle=" Create Account" type="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-6 text-center max-w-5xl ">
          <Heading headingTitle="Upcoming Hackathon Events" />
          <div className="flex  flex-wrap justify-center mx-4 mt-15">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <UpcomingEvent
                SubHeading="IPL Hackathon"
                Description="Innovate and pitch your ideas for the future of tech. "
                Btn={
                  <Button BtnTitle={<Link to="./Hackathon">Apply Now</Link>} />
                }
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <UpcomingEvent
                SubHeading="CodeSprit"
                Description="A fast-paced coding challenge to test your skills.. "
                Btn={
                  <Button BtnTitle={<Link to="./Hackathon">Apply Now</Link>} />
                }
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <UpcomingEvent
                SubHeading="HackMania"
                Description="Build and collaborate on a project over a weekend. "
                Btn={
                  <Button BtnTitle={<Link to="./Hackathon">Apply Now</Link>} />
                }
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <UpcomingEvent
                SubHeading="DevJam"
                Description=" Team up and create a fully functional app in 48 hours. "
                Btn={
                  <Button BtnTitle={<Link to="./Hackathon">Apply Now</Link>} />
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <Heading headingTitle="Why Join Us?" />
          <div className="flex flex-wrap justify-center mx-4 mt-15">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <JoinUs Alt="SkillsIcon" Heading="Learn New Skills" Description="Access a vast library of tutorials, courses, and resources to master new technologies." Img={SkillSImg} />
            </div> 

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <JoinUs Alt="CollaborationIcon" Heading=" Collaborate on Projects" Description="Connect with like-minded individuals to build innovative
                  projects and solve real-world problems." Img={CollaborationImg} />
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <JoinUs Alt="ExpertIcon" Heading="Expert Mentorship" Description="Get guidance from  experts and seasoned developers who
                  are ready to help." Img={MentorshipImp} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 bg-gray-100">
        <div className="container mx-auto px-6 text-center"> 
          <Heading headingTitle="How It Works"/>
          <div className="flex  mx-4 my-10">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center border-4 border-lime-500 mb-4">
                  <span className="text-3xl font-bold text-lime-500">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Sign Up
                </h3>
                <p className="text-gray-600">
                  Create your free account <br/>in just a few clicks.
                </p>
              </div>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/128/13726/13726822.png" className="h-25"/>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center border-4 border-lime-500 mb-4">
                  <span className="text-3xl font-bold text-lime-500">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Explore
                </h3>
                <p className="text-gray-600">
                  Browse tutorials, quizzes, and <br/>projects to find what you need.
                </p>
              </div>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/128/13726/13726822.png" className="h-25"/>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center border-4 border-lime-500 mb-4">
                  <span className="text-3xl font-bold text-lime-500">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Start Building
                </h3>
                <p className="text-gray-600">
                  Join a community project or <br/>start your own and get to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
