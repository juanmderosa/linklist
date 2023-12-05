import githubIcon from "../assets/github.png";
import whatsappIcon from "../assets/whatsapp.png";
import linkedinIcon from "../assets/linkedin.png";

interface Icons {
  image: string;
  url: string;
}

const icons: Icons[] = [
  { image: githubIcon, url: "https://github.com/juanmderosa/" },
  {
    image: linkedinIcon,
    url: "https://www.linkedin.com/in/juanmderosa-developer-frontend-web/",
  },
  { image: whatsappIcon, url: "https://wa.me/5491154632571" },
];

export const IconsContainer = () => {
  return (
    <article className="iconsContainer">
      {icons.map((icon) => (
        <a
          href={icon.url}
          key={icon.url}
          target="_blank">
          <img
            src={icon.image}
            alt={icon.image}
          />
        </a>
      ))}
    </article>
  );
};
