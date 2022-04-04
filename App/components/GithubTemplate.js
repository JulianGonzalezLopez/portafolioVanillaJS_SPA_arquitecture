export function GithubTemplate(props){
    let {name, pushed_at, description, svn_url} = props;

    let formattedDate = new Date(pushed_at).toLocaleDateString();

    const $div = document.createElement("div");
    $div.innerHTML = `
        <h2>${name}</h2>
        <p>Uploaded at: ${formattedDate}</p>
        <p>${description}</p>
        <a href="${svn_url}" target="_blank">See in github</a>
    `
    $div.classList.add("git-card");

    return $div;
}