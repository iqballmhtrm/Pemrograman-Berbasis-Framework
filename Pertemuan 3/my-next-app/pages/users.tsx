// pages/users.tsx

import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const getStaticProps: GetStaticProps<{ users: User[] }> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
    // Optional: revalidate setiap 60 detik jika data perlu di-refresh
    revalidate: 60,
  };
};

const UsersPage = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Link menuju halaman detail pengguna */}
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
