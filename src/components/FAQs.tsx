import Accordian from "./Accordian";
import iconStar from "../assets/images/icon-star.svg";

const FAQs = () => {
	return (
		<div className="flex w-screen bg-contain bg-no-repeat justify-center h-screen overflow-auto bg-light-pink bg-[url('./assets/images/background-pattern-desktop.svg')]">
			<div className="fixed w-1/2 bg-white rounded-lg mt-[14rem] px-14 py-14">
				<div className="flex items-center">
					<img src={iconStar} alt="" />
					<h2 className="ml-4 text-5xl font-work-sans-bold">FAQs</h2>
				</div>
				<Accordian
					question="What is Frontend Mentor, and how will it help me?"
					answer="Frontend Mentor offers realistic coding challenges to help
						developers improve their frontend coding skills with projects in
						HTML, CSS, and JavaScript. It's suitable for all levels and ideal
						for portfolio building."
				/>
				<Accordian
					question="Is Frontend Mentor free?"
					answer=" Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building."
				/>
				<Accordian
					question="Can I use Frontend Mentor projects in my portfolio?"
					answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!"
				/>
				<Accordian
					question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
					answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members."
				/>
			</div>
		</div>
	);
};

export default FAQs;
