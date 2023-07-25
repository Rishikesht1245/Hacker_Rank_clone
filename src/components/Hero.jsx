import styles from "../styles";
import SignUpBTN from "./SignUpBTN";
import Clients from "./Clients";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20 relative">
      {/* Heading and paragraph */}
      <div className="flex flex-col w-[60%] gap-10">
        <h2
          className={`${styles.heading2} sm:text-center text-start leading-10`}
        >
          Skills speak louder <br className="sm:block hidden" /> than words
        </h2>
        <p className={`${styles.paragraph} sm:text-center w-[95%] text-start`}>
          We help companies develop the strongest tech teams around. We help
          candidates sharpen their tech skills and pursue job opportunities.
        </p>
      </div>

      {/* Buttons */}
      <div className={`${styles.flexCenter} gap-7 my-5 mt-10`}>
        <SignUpBTN width="10rem" text="Sign up" />
        <button
          type="button"
          className="w-[10rem] border-[1px] border-black font-semibold font-poppins text-[14px] h-[40px] rounded-md hover:bg-slate-200"
        >
          Request Demo
        </button>
      </div>

      <p className={`${styles.paragraph} mt-10 mb-7 text-center`}>
        Over 40% of developers worldwide and 3,000 companies use HackerRank
      </p>

      {/* hero- images */}
      <Clients />
      {/* Gradients */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[20%] green__gradient z-1" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[20%]  blue__gradient  z-2" />
    </section>
  );
};
export default Hero;
