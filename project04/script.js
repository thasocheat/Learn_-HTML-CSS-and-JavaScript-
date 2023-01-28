function generator(){
    var quotes = {
        "A. P. J. Abdul Kalam" : '"If a country is to be corruption free and become a nation of beautiful minds, I strongly feel there are three key societal members who can make a difference. They are the father, the mother and the teacher."',
        "Lewis B. Smedes" : '"To forgive is to set a prisoner free and discover that the prisoner was you."',
        "Maya Angelou" : '"The truth is, no one of us can be free until everybody is free."',
    }

    var authors = Object.keys(quotes);
    // console.log(authors);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}