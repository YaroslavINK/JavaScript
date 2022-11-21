// full name

// export

const user = {
  firstName: 'Ketrin',
  lastName: 'Denko',
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0];
    this.lastName = splitName[1];
  },
};

user.getFullName();
user.setFullName('Tom Bax');
user.getFullName();
