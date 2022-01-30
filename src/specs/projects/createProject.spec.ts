interface User {
  name: string;
  lastname: string;
  age: number;
}

describe('Create method', () => {
  const user: User = { name: 'John', lastname: 'doe', age: 18 };

  it('sould retun if the name is equal to the user name', () => {
    expect(user.name).toBe('John');
  });
});
