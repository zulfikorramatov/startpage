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
            {
                title: 'linkedin',
                url: 'https://www.linkedin.com/',
            },
        ],
    },
    {
        heading: 'news',
        links: [
            {
                title: 'habr',
                url: 'https://habr.com/ru/all/',
            },
            {
                title: 'kod.ru',
                url: 'https://kod.ru/',
            },
            {
                title: 'tproger',
                url: 'https://tproger.ru/',
            },
            {
                title: 'proglib',
                url: 'https://proglib.io/',
            },
        ],
    },
    {
        heading: 'media',
        links: [
            {
                title: 'anime',
                url: 'https://animego.org/',
            },
            {
                title: 'manga',
                url: 'https://mangalib.me/',
            },
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
