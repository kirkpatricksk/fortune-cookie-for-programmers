function generateQuote() {
    const quoteIdeas = ["Your code will run as smoothly as a well-oiled machine.",
    "The bug you seek is just one 'if' statement away.",
    "JavaScript loves you, but it also loves to test your patience.",
    "Your CSS will always be in style.",
    "Your codebase will be the envy of developers far and wide.",
    "Every error message is just a stepping stone to success.",
    "Your passion for coding will lead to endless possibilities.",
    "Version control is your superpower; use it wisely.",
    "Your browser's developer tools will reveal all secrets.",
    "The internet is your canvas; may your designs be masterpieces.",
    "You are the compiler of your own destiny."]
    const fortuneCookie = document.getElementById('quote');
    fortuneCookie.innerText = quoteIdeas[Math.floor(Math.random() * 11)];
}

generateQuote();
