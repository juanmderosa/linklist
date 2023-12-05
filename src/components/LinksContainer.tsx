import { LinkButton } from "./LinkButton";

export interface Links {
  title: string;
  url: string;
}

const links: Links[] = [
  {
    title: "Mi Linkedin",
    url: "https://www.linkedin.com/in/juanmderosa-developer-frontend-web/",
  },
  {
    title: "Portfolio",
    url: "https://juanmderosa-developer.com/",
  },
  {
    title: "Enviame un E-mail",
    url: "",
  },
  {
    title: "Whatsapp",
    url: "https://wa.me/5491154632571",
  },
];

export const LinksContainer = () => {
  return (
    <section className="linksContainer">
      {links.map((link) => (
        <LinkButton
          key={link.title}
          title={link.title}
          url={
            link.title === "Enviame un E-mail"
              ? "mailto:juanmderosa@gmail.com"
              : link.url
          }
        />
      ))}
    </section>
  );
};
