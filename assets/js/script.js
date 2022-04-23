const lists = [
    {
        heading: 'dev',
        links: [],
    },
    {
        heading: 'work',
        links: [
            {
                title: 'gmail',
                url: 'https://www.gmail.com/',
            },
        ],
    },
    {
        heading: 'media',
        links: [
            {
                title: 'youtube',
                url: 'https://www.youtube.com/',
            },
        ],
    },
]

function renderLists() {
    const linksWrapper = document.querySelector('#links')

    lists.forEach(list => {
        const linksTemplate = list.links.map(link => {
            return `
				<li class="links__item">
					<a class="links__link" href="${link.url}">${link.title}</a>
				</li>
			`
        })

        const template = `
			<ul class="links">
				<li class="links__item">
					<span class="links__heading">${list.heading}</span>
				</li>
				${linksTemplate.join('')}
			</ul>
		`

        linksWrapper.insertAdjacentHTML('beforeend', template)
    })
}

renderLists()
