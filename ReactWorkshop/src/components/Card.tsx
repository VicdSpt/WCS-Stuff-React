import picture from "../images/profile-picture.jpg";

type Social = {
  platform: string;
  url: string;
};

interface CardProps {
  name: string;
  role: string;
  bio: string;
  socials: Social[];
  onSocialClick: (social: Social) => void;
}

function Card({ name, role, bio, socials, onSocialClick }: CardProps) {
  return (
    <div className="card">
      <img src={picture} alt="profile picture" />
      <div className="card-content">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>
        <div className="card-socials">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa-brands fa-${social.platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Card;
