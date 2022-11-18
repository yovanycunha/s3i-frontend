import Link from 'next/link';

import style from './Header.module.scss';

import MenuIcon from './images/menuIcon.svg';

function Header() {
  const setMenuVisible = () => {
    console.log('visible');
  };

  const renderMobileBtn = () => {
    return (
      <div className={style.menu}>
        <button className={style.menuBtn} type="submit">
          <MenuIcon />
        </button>
      </div>
    );
  };

  return (
    <header>
      <nav className={style.container}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <Link className={style.itemText} href="/">
              Criar Planejamento
            </Link>
          </li>
          <li className={style.listItem}>
            <Link className={style.itemText} href="/planejamentos">
              Planejamentos
            </Link>
          </li>
          <li className={style.listItem}>
            <Link className={style.itemText} href="/">
              Tema Anual
            </Link>
          </li>
        </ul>

        {renderMobileBtn()}
      </nav>
    </header>
  );
}

export default Header;
