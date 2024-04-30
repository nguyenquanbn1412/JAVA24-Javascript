document.addEventListener("DOMContentLoaded", function () {
  const userList = document.getElementById("user-list");

  function fetchGitHubUsers() {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        const users = response.data;
        renderUsers(users);
      })
      .catch((error) => console.error("Error fetching GitHub users:", error));
  }

  function renderUsers(users) {
    let html = "";
    users.forEach((user) => {
      html += `
                <tr>
                    <td>${user.id}</td>
                    <td><img src="${user.avatar_url}" alt="${user.login}"></td>
                    <td>${user.login}</td>
                    <td><a href="${user.html_url}" target="_blank">${user.html_url}</a></td>
                    <td><a href="${user.html_url}/repos" target="_blank">${user.html_url}/repos</a></td>
                </tr>
            `;
    });
    userList.innerHTML = html;
  }

  fetchGitHubUsers();
});
