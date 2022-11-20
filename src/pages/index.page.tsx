import type { NextPage } from 'next';

import Header from '@components/Header/Header';

import style from './Home/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <div className={style.container}>akskskkakska</div>
      </main>
    </>
  );
};

export default Home;
