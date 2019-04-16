const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;     //是否被认证
      setTimeout(cb, 100);
    }
};

export default fakeAuth;