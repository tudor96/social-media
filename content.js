
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then( async (posts) => {
        const elementSectiunePostari = document.getElementById("sectiune_postari");
        let htmlPostari = "";
        for(let i = 0; i < posts.length; i++) {
            const htmlPostare = await inserarePostare(posts[i]);
            htmlPostari = htmlPostari + htmlPostare;
        }
        elementSectiunePostari.innerHTML = htmlPostari;
    });

async function getUserInformation(userId) {
    const jsonDatas = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
    const user = await jsonDatas.json();
    console.log(user);
    return user;
}

async function inserarePostare(postare) {
    const userInformation = await getUserInformation(postare.userId);
    return `
     <div class="card">
						<div class="card-header">
							<div class="persona">
								<img src="https://picsum.photos/200" alt="Imagine persoana" />
								<div class="persona-text">
									<p class="normal-text">${userInformation.name}</p>
									<p class="small-text">${userInformation.phone} / ${userInformation.email}</p>
								</div>
							</div>
							<div class="more-information">
								<i data-feather="more-horizontal"></i>
							</div>
						</div>
						<div class="card-body">
							<p class="normal-text mb-4">
                                ${postare.body}
							</p>
							<img
								src="https://picsum.photos/seed/description_${postare.id}/700"
								alt="Descriere postare"
							/>
						</div>
						<div class="card-footer">
							<div class="action-bar">
								<div>Like</div>
								<div>Comment</div>
								<div>Subscribe</div>
							</div>

							<div class="comment-section">
								<div class="my-comment">
									<img src="https://picsum.photos/200" alt="My Image" />
									<input type="text" placeholder="Write your comment..." />
								</div>
								<div class="other-comments">
									<div class="comment-persona">
										<img
											src="https://picsum.photos/200"
											alt="Imagine persoana"
										/>
										<div class="persona-text">
											<p class="normal-text">Golcea Tudor</p>
											<p class="small-text">5h ago.</p>
										</div>
									</div>
									<p class="small-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										blandit ullamcorper finibus. Donec at risus at nulla viverra
										sagittis vitae et nisi. Donec egestas risus ut pellentesque
										vehicula. Cras lobortis hendrerit nulla vulputate dapibus.
										Suspendisse non dictum purus. Duis ullamcorper laoreet
										lectus.
									</p>
								</div>
							</div>
						</div>
					</div> 
    `
}




