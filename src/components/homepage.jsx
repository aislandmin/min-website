import HomepageHeader from "./homepage-header/homepage-header";
import HomepageAbout from "./homepage-about/homepage-about";
import HomepageExperiences from "./homepage-experiences/homepage-experiences";
import HomepageAchievements from "./homepage-achievements/homepage-achievements";
import HomepageSkills from "./homepage-skills/homepage-skills";
import HomepageFooter from "./homepage-footer/homepage-footer";

export default function HomePage(props) {
  return (
    <div>
      <HomepageHeader />
      <HomepageAbout />
      <HomepageExperiences />
      <HomepageAchievements />
      <HomepageSkills />
      <HomepageFooter />
    </div>
  );
}
