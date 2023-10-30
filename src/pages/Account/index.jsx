import Section from "../../components/Section";

import UserCard from "../../components/UserCard";
import SettingsAndInformation from "./components/SettingsAndInformation";

const user = {
  address: {
    line1: "Chestnut Avenue 88",
    line2: "",
    city: "Zwanenburg",
    zipcode: "1161VD",
    country: "Netherlands",
  },
  email: "ruudjuf@gmail.com",
  password: "wachtwoord01!",
  general: {
    firstname: "Ruud",
    lastname: "Juffermans",
  },
  profile: {
    job: "React Developer",
    bio: `Working with talented writers to create impactful content for SaaS
          brands worldwide. Account Manager and Editor at DSLX.`,
  },
  socials: [
    { name: "twitter", url: "www.twitter.com/ruudjx" },
    { name: "facebook", url: "www.facebook.com/ruudjuffermans" },
    { name: "instagram", url: "www.instagram.com/ruudj3x" },
  ],
  statistics: [
    { name: "followers", value: 19 },
    { name: "following", value: 33 },
    { name: "blogs", value: 2 },
  ],
};

const Account = () => {
  return (
    <div>
      <Section>
        <UserCard user={user} />
      </Section>

      <Section title={`${user.general.firstname}'s settings and information`}>
        <SettingsAndInformation user={user} />
      </Section>
      {/* <RecentPosts items={Array(6).fill(story)} /> */}
    </div>
  );
};

export default Account;
