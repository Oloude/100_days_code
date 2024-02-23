const barContainer = document.querySelector('div.bars')
const data = [
    {
      day: "mon",
      amount: 17.45
    },
    {
      day: "tue",
      amount: 34.91
    },
    {
      day: "wed",
      amount: 52.36
    },
    {
      day: "thu",
      amount: 31.07
    },
    {
      day: "fri",
      amount: 23.39
    },
    {
      day: "sat",
      amount: 43.28
    },
    {
      day: "sun",
      amount: 25.48
    }
  ]





const dataHtml = data.map((bar, index) => {
    return `<div class="custom-paragraph">
    <span class="amount-display">$${bar.amount.toFixed(2)}</span>
    <p  style="height: ${bar.amount * 4}px; background-color: ${bar.day === 'wed' ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'};" data-amount="${bar.amount.toFixed(2)}"></p> 
  </div>`
  }).join('');
  
  // Add the generated HTML to your container
  barContainer.innerHTML = dataHtml
  
  // Add event listeners to show the amount on hover
const containers = document.querySelectorAll('div.custom-paragraph');
console.log(containers)
containers.forEach(container => {
  container.addEventListener('mouseenter', showAmount);
  container.addEventListener('mouseleave', hideAmount);
});

function showAmount(event) {
  const amountDisplay = event.currentTarget.querySelector('.amount-display');
  event.currentTarget.querySelector('p').style.opacity =' 0.5'
  amountDisplay.style.display = 'inline-block';
}

function hideAmount(event) {
  const amountDisplay = event.currentTarget.querySelector('.amount-display');
  amountDisplay.style.display = 'none';
  event.currentTarget.querySelector('p').style.opacity ='1'
}
  