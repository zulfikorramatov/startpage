const lists = [
    {
        heading: 'dev',
        links: [
            {
                title: 'github',
                url: 'https://www.github.com/',
            },
            {
                title: 'codewars',
                url: 'https://www.codewars.com/',
            },
            {
                title: 'leetcode',
                url: 'https://www.leetcode.com/',
            },
        ],
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
    {
        heading: 'reddit',
        links: [
            {
                title: 'r/afkarena',
                url: 'https://www.reddit.com/r/afkarena/',
            },
            {
                title: 'r/unixporn',
                url: 'https://www.reddit.com/r/unixporn/',
            },
            {
                title: 'r/startpages',
                url: 'https://www.reddit.com/r/startpages/',
            },
            {
                title: 'r/linuxmemes',
                url: 'https://www.reddit.com/r/linuxmemes/',
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
