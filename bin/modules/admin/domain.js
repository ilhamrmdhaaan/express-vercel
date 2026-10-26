const message = async param => {
    const data =  {
        message : [
            {
                text: "Allah does not burden a person beyond their capacity.",
                source: "Quran 2:286",
                note: "A reminder that every trial that comes our way has been measured by the Creator according to our capacity to endure it."
            },
            {
                text: "Strive to the best of your ability, as if the entire outcome depended on your efforts. But afterward, place your trust in Him as if you had done nothing, and surrender everything to Him.",
                source: "Classical Sufi Wisdom"
            },
            {
                text: "There are two kinds of patience: patience with what you dislike, and patience in refraining from what you like.",
                source: "Sayyidina Ali bin Abi Thalib"
            },
            {
                text: "Sincerity is when your intention is purely for the sake of Allah, and you no longer care whether people praise or criticize you for what you have done.",
                source: "Imam Al-Ghazali"
            }
        ],
    };

  return data
}

module.exports = { message };