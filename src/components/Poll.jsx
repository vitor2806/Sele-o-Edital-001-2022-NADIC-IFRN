import Link from "next/link";
import { HiChartPie } from "react-icons/hi";
import styles from "../styles/Home.module.css";

export default function Poll(props) {
  return (
    <div className="row m-2 w-75" id={props.id}>
      <div className={styles.poll}>
        <div className={styles.poll_photo}>
          <div>
            <HiChartPie fontSize={46} color={"orange"} />
          </div>
          <div className={styles.poll_desc}>
            <Link className={styles.link} href={`poll/${props.id}`}>
              <a className="text-white">{props.name}</a>
            </Link>
            <p className="m-0 text-white opacity-75">
              Expira em {props.expire}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
