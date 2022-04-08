import { AiOutlineUser } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';

import Header from '../../components/Header';

export default function post() {
  return (
    <>
      <Header />
      <main>
        <img src="/images/Banner.svg" alt="Banner" />
        <div>
          <strong>Criando um app CRA do zero</strong>
          <ul>
            <li>
              <time>
                <MdDateRange /> 19 Abr 2021
              </time>
            </li>
            <li>
              <AiOutlineUser /> Danilo Vieira
            </li>
            <li>
              <BiTimeFive /> 4 minutos
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
