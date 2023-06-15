export async function getRepoStarsAndForks(owner, repo, token) {
  const endpoint = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = {
    Authorization: `Token ${token}`,
  };

  try {
    const response = await fetch(endpoint, { headers });
    const data = await response.json();

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
    };
  } catch (error) {
    console.error(error);
  }
}
