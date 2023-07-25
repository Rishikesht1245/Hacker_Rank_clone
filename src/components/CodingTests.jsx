import styles, { layout } from "../styles";
import { report } from "../assets";

const CodingTests = () => {
  return (
    <section className="flex flex-col items-start mt-10 ml-8 rounded-md pt-10 pl-10 gap-8 border-[1px] w-[95%]">
      <p className={`${styles.paragraph} text-slate-500 hover:text-green-600`}>
        : : Coding practice : :
      </p>
      <div>
        <h2 className={`${styles.heading3_start} `}>Join the movement.</h2>
        <h2 className={`${styles.heading3_start} text-green-600 text-start`}>
          {" "}
          Screen on skills.
        </h2>
      </div>
      <img src={report} alt="Report" className="w-[90%] h-[90%]" />
    </section>
  );
};
export default CodingTests;
