import stat1 from "../../assets/stat1.svg";
import stat2 from "../../assets/stat2.svg";
import stat3 from "../../assets/stat3.svg";
import stat4 from "../../assets/stat4.svg";

const EcosystemStatistics = ({ screen }: { screen?: string }) => {
  return (
    <div className="flex flex-col items-center">
      {screen === "home" && (
        <span className="text-[14px] font-bold p-2 border-1 border-custom-grey rounded-[30px]">
          STATS
        </span>
      )}
      <div className="text-center">
        <p className="text-[30px] text-custom-blue">
          Ecosystem <span className="font-bold">Statistics</span>
        </p>
        <p className="text-[14px] text-custom-grey">
          Our group's performance metrics highlight our growth and impact in the
          Nigerian financial services sector.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 mt-5">
        <img src={stat1} />
        <img src={stat2} />
      </div>

      <div className="flex flex-col sm:flex-row gap-5 mt-5">
        <img src={stat3} />
        <img src={stat4} />
      </div>
    </div>
  );
};

export default EcosystemStatistics;
