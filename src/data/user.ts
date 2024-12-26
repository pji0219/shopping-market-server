type User = {
  username: string;
  password: string;
  name: string;
  email: string;
};

type Users = User & {
  id: string;
  isAdmin?: string;
};

const users: Users[] = [
  {
    id: '1',
    isAdmin: 'y',
    username: 'pji',
    password: '$2b$12$gyCiSouorUkKhHGtkvBmDeHnDvfyHXN9v7KaG4V4rH4kfnLc7UIJ6',
    name: 'pji',
    email: 'pji@email.com',
  },
];

export async function findById(id: string): Promise<Users | undefined> {
  return users.find(user => user.id === id);
}

export async function findByUsername(
  username: string,
): Promise<Users | undefined> {
  return users.find(user => user.username === username);
}

export async function createUser(user: User): Promise<string> {
  const newUser = { ...user, id: Date.now().toString() };
  users.push(newUser);
  return newUser.id;
}
