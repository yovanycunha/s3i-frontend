import type { NextPage } from 'next';

import Header from '@components/Header/Header';

import style from './Home/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={style.container}>body</div>
    </>
  );
};

export default Home;
