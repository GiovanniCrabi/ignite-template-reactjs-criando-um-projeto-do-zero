import { GetStaticProps } from 'next';

import { MdDateRange } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

import Link from 'next/link';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Post from './post/[slug]';
import Header from '../components/Header';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  return (
    <>
      <main className={commonStyles.container}>
        <Header />

        <div className={styles.posts}>
          <Link href="/">
            <a className={styles.post}>
              <strong>Criando um app CRA do zero</strong>
              <p>
                Tudo sobre como criar a sua primeira aplicação utilizando Create
                React App
              </p>
              <ul>
                <li>
                  <time>
                    <MdDateRange /> 19 Abr 2021
                  </time>
                </li>
                <li>
                  <AiOutlineUser /> Danilo Vieira
                </li>
              </ul>
            </a>
          </Link>
        </div>

        <div className={styles.posts}>
          <Link href="/">
            <a className={styles.post}>
              <strong>Criando um app CRA do zero</strong>
              <p>
                Tudo sobre como criar a sua primeira aplicação utilizando Create
                React App
              </p>
              <ul>
                <li>
                  <time>
                    <MdDateRange /> 19 Abr 2021
                  </time>
                </li>
                <li>
                  <AiOutlineUser /> Danilo Vieira
                </li>
              </ul>
            </a>
          </Link>
        </div>

        <div className={styles.posts}>
          <Link href="/">
            <a className={styles.post}>
              <strong>Criando um app CRA do zero</strong>
              <p>
                Tudo sobre como criar a sua primeira aplicação utilizando Create
                React App
              </p>
              <ul>
                <li>
                  <time>
                    <MdDateRange /> 19 Abr 2021
                  </time>
                </li>
                <li>
                  <AiOutlineUser /> Danilo Vieira
                </li>
              </ul>
            </a>
          </Link>
        </div>

        <div className={styles.posts}>
          <Link href="/">
            <a className={styles.post}>
              <strong>Criando um app CRA do zero</strong>
              <p>
                Tudo sobre como criar a sua primeira aplicação utilizando Create
                React App
              </p>
              <ul>
                <li>
                  <time>
                    <MdDateRange /> 19 Abr 2021
                  </time>
                </li>
                <li>
                  <AiOutlineUser /> Danilo Vieira
                </li>
              </ul>
            </a>
          </Link>
        </div>

        <Link href="/post">
          <a className={styles.carregarpost}> Carregar mais posts </a>
        </Link>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query<any>(
    [Prismic.Predicates.at('document.type', 'posts')],
    {
      pageSize: 1,
    }
  );

  const posts = postsResponse.results.map(post => {
    return {
      uid: post.id,
      first_publication_date: post.first_publication_date,

      subtitle: post.data.subtitle,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  const postPagination = {
    next_page: postsResponse.next_page,
    results: posts,
  };

  return {
    props: {
      postPagination,
    },
  };
};
