let state = {
  userinfo: [
    {
      id: 1,
      cardnumber: 1133 - 1333 - 3331 - 1113,
      CVV: 331,
      Valid: 23 / 11,
      Yourname: "Ali",
    },
  ],
};
export let addСard = (cardnumber, CVV, Valid, Yourname) => {
  let newPost = {
    id: 2,
    cardnumber: cardnumber,
    CVV: CVV,
    Valid: Valid,
    Yourname: Yourname,
  };

  state.profilePage.posts.push(newPost);
};
export default state;
