import { Links } from "./LinksContainer";

export const LinkButton = ({ title, url }: Links) => {
  return (
    <div className="buttonContainer">
      <a
        href={url}
        target="_blank"
        className="buttonLink">
        <p className="buttonTitle">{title}</p>
      </a>
    </div>
  );
};
