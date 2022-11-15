import Link from 'next/link';

import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link className={style.itemText} href="/">
            Criar Planejamento
          </Link>
        </li>
        <li className={style.listItem}>
          <Link className={style.itemText} href="/">
            Planejamentos
          </Link>
        </li>
        <li className={style.listItem}>
          <Link className={style.itemText} href="/">
            Tema Anual
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
