import { GetStaticProps, GetStaticPaths } from 'next';

type UserProps = {
  id: string;
  name: string;
};

export default function UserPage({ id, name }: UserProps) {
  return (
    <div>
      <h1>User ID: {id}</h1>
      <p>Name: {name}</p>
    </div>
  );
}

// Функция, определяющая статические пути
export const getStaticPaths: GetStaticPaths = async () => {
  const users = [{ id: '1' }, { id: '2' }, { id: '3' }]; // Здесь можно запросить список пользователей из API
  const paths = users.map((user) => ({ params: { id: user.id } }));

  return {
    paths,
    fallback: false, // `false` — ошибки для несуществующих ID, `true` — загружает их на лету 
    // "blocking" - для подгрузку новых страниц на лету + кеш страниц
  };
};

// Функция получения данных на этапе сборки
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const userId = params?.id as string;

  // Здесь можно сделать запрос к API, например: const user = await fetch(`https://api.example.com/users/${userId}`)
  const user = { id: userId, name: `User ${userId}` };

  return {
    props: user, // Передаем данные в компонент
  };
};
