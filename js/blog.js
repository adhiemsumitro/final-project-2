document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');
  
    // Placeholder function for full article retrieval (replace with your implementation)
    function getFullArticle(title) {
      console.log(`Retrieving full article for "${title}" (implementation required)`);
      return `Full article content for "${title}" (placeholder)`;
    }
  
    function createBlogArticle(article) {
      return `
        <div class="col-12 mb-4">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${article.image}" class="img-fluid rounded-start" alt="${article.title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.summary}</p>
                <button class="btn btn-primary d-inline-block read-more-btn" data-title="${article.title}">Read More</button>
                </div>
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
      blogContainer.innerHTML += createBlogArticle(article);
    });
  
    // Generate summary
    const blogSummary = {
      totalArticles: blogArticles.length,
      indonesianArticles: blogArticles.filter(article => article.summary.includes('Indonesian')).length
    };
  
    const summaryMessage = blogSummary.indonesianArticles > 0 ?
      `${blogSummary.indonesianArticles} out of ${blogSummary.totalArticles} articles are about Indonesian cuisine.` :
      'No articles about Indonesian cuisine found.';
  
    console.log(summaryMessage);
  
    // Strict comparison (optional)
    if (blogSummary.indonesianArticles === blogSummary.totalArticles && blogSummary.indonesianArticles === blogArticles.length) {
      console.log('All articles are about Indonesian cuisine and the counts match perfectly.');
    }
  
    // Add event listeners for "Read More" buttons
    document.querySelectorAll('.read-more-btn').forEach(button => {
      button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const fullArticleContent = getFullArticle(title);
        alert(fullArticleContent);
      });
    });
  });
  