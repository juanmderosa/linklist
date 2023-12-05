import fotoperfil from "../assets/fotoperfil.png";

export const ProfileImage = () => {
  return (
    <div className="imgContainer">
      <img
        src={fotoperfil}
        alt="foto perfil Juan Martín De Rosa"
        className="img"
      />
    </div>
  );
};
