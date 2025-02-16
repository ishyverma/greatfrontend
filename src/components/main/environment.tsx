import EnvironmentOne from "../svg/environment-one";
import EnvironmentThree from "../svg/environment-three";
import EnvironmentTwo from "../svg/environment-two";
import EnvironmentCard from "./environment-card";

const Environment = () => {
  return (  
    <div className="flex my-40 items-center justify-center">
      <div className="w-[90vw]">
        <h1 className="sm:text-5xl text-3xl text-[#F4F4F4] font-medium sm:w-[900px] w-[90vw]">
          Practice in an environment that simulates real interviews
        </h1>
        <p className="text-[#A1A1AA] text-lg sm:w-[60%] w-[90vw] mt-6">
          Our in-browser coding workspace allows you to simulate a real interview environment with no set up required.
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 mt-20">
          <EnvironmentCard
            picture={<EnvironmentOne />}
            content="Run your code against tests and instantly preview your output"
          />
          <EnvironmentCard
            picture={<EnvironmentTwo />}
            content="Resize and customize the workspace as you like"
          />
          <EnvironmentCard
            picture={<EnvironmentThree />}
            content="Syntax highlighting, theming and shortcuts"
          />
        </div>
      </div>
    </div>
  );
}
 
export default Environment;