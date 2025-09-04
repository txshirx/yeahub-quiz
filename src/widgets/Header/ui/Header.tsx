import { LogoIcon } from "@/shared/ui/icons";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <div className={styles.headerLogo}>
              <LogoIcon />
              <span>Yeahub</span>
            </div>
            <div className={styles.headerNav}>
              <button>База вопросов</button>
              <button>Тренажер</button>
            </div>
          </div>

          <div className={styles.headerRight}>
            <button className={styles.headerLogin}>
              Вход
            </button>
            <button
              className={styles.headerRegister}>
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};