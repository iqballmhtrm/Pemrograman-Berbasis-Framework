// pages/users/[id].tsx

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Ambil data semua pengguna untuk menentukan path
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false, // fallback: false berarti semua path telah didefinisikan
  };
};

export const getStaticProps: GetStaticProps<{ user: User }> = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();

  return {
    props: {
      user,
    },
    revalidate: 60,
  };
};

const UserDetailPage = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserDetailPage;
