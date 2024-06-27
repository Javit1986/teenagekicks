import style from "../assets/estilos/Pie.module.css";

function Footer() {
  const handleIr = () => {
    window.open("https://www.instagram.com/teenagekickk/", "_blank");
  };

  return (
    <footer>
      <p className={style.pie} onClick={handleIr}>
        feria de medias - Teenage Kicks ©
      </p>
    </footer>
  );
}

export default Footer;
