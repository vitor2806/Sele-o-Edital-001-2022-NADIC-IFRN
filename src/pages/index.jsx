import { FaPoll } from "react-icons/fa";
import { HiChartPie } from "react-icons/hi";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      <h2 className="text-center text-white">Votações ativas</h2>
      <p className="w-100 text-center text-white opacity-50">
        Para criar uma basta clicar no botão acima
      </p>

      {/* Polls */}
      <div
        className={`${"container w-50 h-100 justify-content-start align-items-center rounded border border-start-0 border-end-0 border-3 border-info mt-3 mb-4 p-5 flex-column"} ${
          styles.main
        }`}
      >
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Grêmio Estudantil
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
        <div className="row m-2 w-75">
          <div className={styles.poll}>
            <div className={styles.poll_photo}>
              <div>
                <HiChartPie fontSize={46} color={"orange"} />
              </div>
              <div className={styles.poll_desc}>
                <Link className={styles.link} href={""}>
                  <a className="text-white" href="">
                    Reitor do Campus
                  </a>
                </Link>
                <p className="m-0 text-white opacity-75">
                  Criada em 2022-03-20
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="m-0 text-white opacity-75">Votos</p>
              <p className="m-0 text-white">12345</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
