import styles from "./style.module.css";
import FooterBase from "./components/FooterBase";
import FooterContent from "./components/FooterContent";

export const socials = [
  { name: "linkedin", icon: "linkedin-fill", url: "www.linkedin.com" },
  { name: "instagram", icon: "instagram-fill", url: "www.instagram.com" },
  { name: "facebook", icon: "facebook-fill", url: "www.facebook.com" },
];

export const links = [
  { name: "profile", to: "/profile" },
  { name: "messenger", to: "/chat" },
  { name: "acount", to: "/account" },
  { name: "story", to: "/story" },
];

export const address = {
  line1: "Chestnut Avenue 88",
  line2: "",
  city: "Zwanenburg",
  zipcode: "1161VD",
  country: "Netherlands",
};

const Footer = ({ small }) => {
  return (
    <footer>
      {!small && (
        <FooterContent address={address} socials={socials} links={links} />
      )}
      <FooterBase socials={socials} />
    </footer>
  );
};

export default Footer;
