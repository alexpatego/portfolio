import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";
import SectionWrap from "../hoc/SectionWrap";

const Technologies = () => {
  return (
    <div className="tech">
      {technologies.map((technology) => (
        <div key={technology.name} className="tech__balls">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrap(Technologies, "");
