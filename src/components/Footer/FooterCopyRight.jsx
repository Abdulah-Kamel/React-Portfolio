import styles from "./Footer.module.css";
const FooterCopyRight = () => {
  return (
    <div className={`${styles.copyRight} text-center py-4`}>
      <p className="mb-0">Copyright &copy; Your Website 2021</p>
    </div>
  );
};

export default FooterCopyRight;
