const render = ({ userList, hash, users }) => {
  const html = users.map((user, index) => {
      const userKeys = Object.keys(user);
      console.log(userKeys);
      return `
      <li>
        <a href='#${index}'>${user.username}</a>
        <ul>
        ${(parseInt(hash) === index ? userKeys : []).map(userKey => { return `<li>${userKey}: ${user[userKey]} </li>`}).join('')}
        </ul>
      </li>
      `
    }).join("");
  userList.innerHTML = html;
};

module.exports = render;

