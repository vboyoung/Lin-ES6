const githubRequest = async (login) => {
  let response = await fetch(
    `https://api.github.com/users/${login}`  
    //https://api.github.com/users/eveporcello
  );
  let json = await response.json();
  let summary = `${json.name}, ${json.company}`;
  console.log(summary);
};

githubRequest("eveporcello");



eveporcello