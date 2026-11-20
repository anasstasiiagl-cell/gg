let score = 0;
let clicks = 0;
let power = 1;
let price = 10;

const upgradeButton = document.getElementById("upgradeButton"); 
const clickButton = document.getElementById("clickButton");
const scoreText = document.getElementById("score");
const clicksText = document.getElementById("clicks");

clickButton.onclick = function ()
{
    score += power;
    clicks += 1;

    scoreText.textContent = score;
    clicksText.textContent = clicks;
    upgradeButton.disabled = score < price;
    if (score >= 50) 
    {
        document.getElementById("message").hidden = false;
    }
};

    upgradeButton.onclick = function ()
    {
        score -= price;
        power += 1;
        price *= 3;

        scoreText.textContent = score;
        document.getElementById("power").textContent = power;
        document.getElementById("price").textContent = price;
        upgradeButton.disabled = score < price;
    };