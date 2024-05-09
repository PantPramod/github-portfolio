// @flow strict

import GitHubCalendar from "react-github-calendar";
import SectionTitle from "../helper/section-title";
import { userData } from "@/data/user-data";


function Contributions() {
  return (
    <div id="contributions" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Activity Graph" />

      <div className="w-full flex justify-center py-12">
        <GitHubCalendar
          username={userData.githubUser}
          blockSize={10}
        />
      </div>
    </div>
  );
};

export default Contributions;