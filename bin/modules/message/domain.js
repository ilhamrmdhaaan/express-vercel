const message = async param => {
    const data =  {
        message : [
            {
                text: "Allah does not burden a person beyond their was ability.",
                source: "Quran 2:286",
                note: "A reminder that every trial that comes our way has been measured by The Almighty according to our capacity to endure it."
            },
            {
                text: "Try to the best of your ability, as if the entire outcome depended on your efforts. But afterward, place your trust in Him as if you had done nothing, and surrender everything to Him.",
                source: "Kearifan Sufi Klasik"
            },
            {
                text: "There are two kinds of patience: patience with what you dislike, and patience in refraining from what you like.",
                source: "Sayyidina Ali bin Abi Thalib"
            },
            {
                text: "Sincerity is the purity of intention where one seeks nothing other than Allah in all their deeds.",
                source: "Imam Al-Ghazali"
            }
        ],
    };

  return data
}

module.exports = { message };