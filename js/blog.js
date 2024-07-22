// Placeholder function for full article retrieval (replace with your implementation)
function getFullArticle(title) {
    console.log(`Retrieving full article for "${title}" (implementation required)`);
    // Replace with your logic to fetch and return the full article content
    return `Full article content for "${title}" (placeholder)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');

    function createBlogArticle(article) {
        return `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${article.image}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.summary}</p>
                        <button class="btn btn-primary" onclick="readMore('${article.title}')">Read More</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Error handling
    if (!blogArticles || !blogContainer) {
        console.error('Error: blogArticles or blogContainer element not found.');
        return;
    }

    // Filter Indonesian articles and display
    blogArticles.forEach(article => {
        if (article.summary.includes('Indonesian')) {
            blogContainer.innerHTML += createBlogArticle(article);
        }
    });

    const blogSummary = {
        totalArticles: blogArticles.length,
        indonesianArticles: blogArticles.filter(article => article.summary.includes('Indonesian')).length
    };

    const summaryMessage = blogSummary.indonesianArticles > 0 ?
        `${blogSummary.indonesianArticles} out of ${blogSummary.totalArticles} articles are about Indonesian cuisine.` :
        'No articles about Indonesian cuisine found.';

    console.log(summaryMessage);

    if (blogSummary.indonesianArticles === blogSummary.totalArticles && blogSummary.indonesianArticles === blogArticles.length) {
        console.log('All articles are about Indonesian cuisine and the counts match perfectly.');
    }
});

function readMore(title) {
    const fullArticleContent = getFullArticle(title);

    // Option 1: Display in an alert
    // alert(fullArticleContent);

    // Option 2: Display in a modal window (implementation example)
    // Implement modal creation and logic here (refer to previous version for details)

    // Option 3: Display in a dedicated section on the page (implementation example)
    // Implement dedicated section creation and logic here (refer to previous version for details)
}
