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
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    "It's not whether you get knocked down, it's whether you get up.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "Strive not to be a success, but rather to be of value.",
    "Success consists of going from failure to failure without loss of enthusiasm.",
    "Chase the vision, not the money; the money will end up following you.",
    "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    "Coming together is a beginning; keeping together is progress; working together is success.",
    "If everyone is moving forward together, then success takes care of itself.",
    "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
    "A thinker sees his own actions as experiments and questions--as attempts to find out something. Success and failure are for him answers above all.",
    "There is a price to pay for success, there is also a price to pay for failure. The question is, what price are you willing to pay?",
    "Doubt kills more dreams than failure ever will.",
];

document.getElementById('new-quote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quote.length);
    document.getElementById('quote').innerText = quote[randomIndex];
});
