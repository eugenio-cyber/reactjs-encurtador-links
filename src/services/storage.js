// funcao para buscar os links
export async function getLinks(key) {
  const myLinks = await localStorage.getItem(key);

  let saveLinks = JSON.parse(myLinks) || [];

  return saveLinks;
}

// funcao que adiciona um link
export async function putLink(key, newLink) {
  let linksSave = await getLinks(key);

  const hasLink = linksSave.some((link) => link.id === newLink.id);

  if (hasLink) {
    alert("O link já estava salvo");
    return;
  }

  linksSave.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksSave));
}

// funcao para deletar um link
export function deleteLinks(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("encurtaLink", JSON.stringify(myLinks));

  return myLinks;
}
