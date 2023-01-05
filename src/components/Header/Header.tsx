import Link from 'next/link';

// import style from './Header.module.scss';

import MenuIcon from './images/menuIcon.svg';

function Header() {
  const setMenuVisible = () => {
    console.log('visible');
  };

  // const renderMobileBtn = () => {
  //   return (
  //     <div className={style.menu}>
  //       <button className={style.menuBtn} type="submit">
  //         <MenuIcon />
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <header className="body-font text-gray-600 ">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a href="/" className="mr-5 hover:text-gray-900">
            First Link
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Second Link
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Third Link
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Fourth Link
          </a>
        </nav>
        <button
          type="button"
          className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
        >
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
