// export
const event = {
  message: 'Welcome to the party!',
  guests: [
    {
      name: 'John',
      age: 18,
      email: 'j@gmail.com',
    },
    { name: 'Anna', age: 17, email: 'a@gmail.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
