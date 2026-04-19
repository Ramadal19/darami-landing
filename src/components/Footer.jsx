import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__left">

          <p className="footer__brand">
            © {new Date().getFullYear()} Darami Creative Technologies LLC
          </p>
          <p className="footer__copyright">
             All rights reserved.
          </p>
          
        </div>

        <div className="footer__right">
          <a href="#home">Home</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </footer>
  );
}