import { AppProps } from "next/app";
import Link from "next/link";
import styles from "./_app.module.scss";
import "./global.scss";

const SideMenuItem: React.VFC<{ pathname: string }> = (props) => (
  <Link href={props.pathname}>
    <a className={styles.menuItem}>{props.pathname}</a>
  </Link>
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideMenuItem pathname="/styled-component" />
        <SideMenuItem pathname="/styled-component/ssr" />
        <SideMenuItem pathname="/emotion" />
        <SideMenuItem pathname="/emotion/ssr" />
      </div>
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
