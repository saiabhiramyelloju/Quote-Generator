const quote = [
    "Education is the most powerful weapon which you can use to change the world.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Education is not the filling of a pail, but the lighting of a fire.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    "Education is the key to unlock the golden door of freedom.",
    "The mind is not a vessel to be filled, but a fire to be kindled.",
    "An investment in knowledge pays the best interest.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Learning is a treasure that will follow its owner everywhere.",
];

document.getElementById('new-quote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quote.length);
    document.getElementById('quote').innerText = quote[randomIndex];
});