import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        <a href="https://www.flaticon.com/free-icons/chef" title="chef icons">
          Chef icons created by Those Icons - Flaticon
        </a>
      </p>
      <p>
        &copy; 2025 Isaiah Duhart. <br />
        All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
