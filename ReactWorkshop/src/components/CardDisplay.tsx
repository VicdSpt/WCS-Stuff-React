import Card from "./Card";
import "./Card.css";

function CardDisplay() {
  const handleSocialClick = () => {};
  const socials = [
  { platform: "facebook", url: "https://facebook.com/yourprofile" },
  { platform: "discord", url: "https://discord.gg/yourinvite" },
  { platform: "pinterest", url: "https://fr.pinterest.com/" },
  { platform: "dribbble", url: "https://dribbble.com/yourprofile" }
];
  return (
    <section className="page card-page">
      <Card
        name="Vic"
        role="Full Stack Dev"
        bio="Learn dev and stuff"
        socials={socials}
        onSocialClick={handleSocialClick}
      />
    </section>
  );
}
export default CardDisplay;
