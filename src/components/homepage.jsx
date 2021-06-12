import HomepageHeader from "./homepage-header";
import HomepageAbout from "./homepage-about/homepage-about";
import HomepageExperience from "./homepage-experience";
import HomepageAchievements from "./homepage-achievements";

export default function HomePage(props) {
  return (
    <div>
      <HomepageHeader />
      <HomepageAbout />
      <HomepageExperience />
      <HomepageAchievements />
    </div>
  );
}
