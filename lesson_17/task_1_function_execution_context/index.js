const user = {
  firstName: 'Eva',
  lastName: 'Grean',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
// export user;

console.log(user.getFullName());
