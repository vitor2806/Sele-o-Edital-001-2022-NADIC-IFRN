import { FaPoll } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <header className="p-3 text-white">
      <div className="container ">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link href={"/"}>
            <a className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <FaPoll fontSize={36} />
            </a>
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className={styles.link}>
              <Link className={styles.link} href="/poll/create">
                <a className={`${"nav-link px-2"} ${styles.link}`}>
                  Criar votação
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>
                <a className={`${"nav-link px-2 "} ${styles.link}`}>Votações</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
