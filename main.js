const links_social_media = {
  github: 'Moisés',
  youtube: 'maykbrito',
  instagram: 'moisescastilhos',
  facebook: 'moisescastilhos'
}

function changeSocialMediaLinks() {
  for (let li of sociallinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${links_social_media[social]}`
  }
}
changeSocialmMediaLinks()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textcontent = data.name
      userbio.textcontent = data.bio
      userlink.href = data.html_url
      userphoto.src = data.avatar_url
      userlogin.textcontent = data.login
    })
}
