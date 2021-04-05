const range = document.getElementById('range');
const checkbox = document.getElementById('billing-checkbox');
const costH1 = document.querySelector('.cost');
const rangeOverlay = document.querySelector('.range-background-color');
const pageviews = document.querySelector('.pageviews');

let costs = {
    pageviews10: 8,
    pageviews50: 12,
    pageviews100: 16,
    pageviews500: 24,
    pageviews1M: 36,
}
checkbox.addEventListener('click', () => {
    let rangeValue = range.value;
    if (checkbox.checked) {
        for (let cost in costs) {
            costs[cost] = Math.floor((costs[cost] * 12) / 100 * 75);
        }
    } else {
        costs.pageviews10 = 8;
        costs.pageviews50 = 12;
        costs.pageviews100 = 16;
        costs.pageviews500 = 24;
        costs.pageviews1M = 36;
    }
    updateText(rangeValue);
})

range.addEventListener('input', () => {
    let rangeValue = range.value;
    let overlayWidth = 100;
    rangeOverlay.style.background = `linear-gradient(to left, #eaeefb ${overlayWidth - rangeValue}%, #a5f3eb ${overlayWidth - rangeValue}%)`
    updateText(rangeValue)
});

function updateText(value) {
    if (value <= 20) {
        costH1.innerHTML = `$ ${costs.pageviews10}.00 <span> / ${checkbox.checked ? 'yearly' : 'month'}</span>`;
        pageviews.textContent = '10k Pageviews'
    }
    if (value > 20) {
        costH1.innerHTML = `$ ${costs.pageviews50}.00 <span> / ${checkbox.checked ? 'yearly' : 'month'}</span>`;
        pageviews.textContent = '50k Pageviews'
    }
    if (value > 40) {
        costH1.innerHTML = `$ ${costs.pageviews100}.00 <span> / ${checkbox.checked ? 'yearly' : 'month'}</span>`;
        pageviews.textContent = '100k Pageviews'
    }
    if (value > 60) {
        costH1.innerHTML = `$ ${costs.pageviews500}.00 <span> / ${checkbox.checked ? 'yearly' : 'month'}</span>`;;
        pageviews.textContent = '500k Pageviews'
    }
    if (value > 80) {
        costH1.innerHTML = `$ ${costs.pageviews1M}.00 <span> / ${checkbox.checked ? 'yearly' : 'month'}</span>`;
        pageviews.textContent = '1M Pageviews'
    }

}