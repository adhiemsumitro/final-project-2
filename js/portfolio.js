// portfolio.js

document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.getElementById('portfolio-container');

    // Functions
    function createPortfolioItem(item) {
        return `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // ForEach Loop and Filter Function
    portfolioItems.forEach(item => {
        if (item.description.includes('Indonesian')) {
            portfolioContainer.innerHTML += createPortfolioItem(item);
        }
    });

    // JavaScript Object
    const portfolioSummary = {
        totalItems: portfolioItems.length,
        indonesianItems: portfolioItems.filter(item => item.description.includes('Indonesian')).length
    };

    // Ternary Operator
    const summaryMessage = portfolioSummary.indonesianItems > 0 ? 
        `${portfolioSummary.indonesianItems} out of ${portfolioSummary.totalItems} items are Indonesian.` : 
        'No Indonesian items found.';

    console.log(summaryMessage);

    // Symbol == & ===
    if (portfolioSummary.indonesianItems == portfolioSummary.totalItems && portfolioSummary.indonesianItems === portfolioItems.length) {
        console.log('All items are Indonesian and the counts match perfectly.');
    }
});
