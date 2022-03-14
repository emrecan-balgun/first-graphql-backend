const authors = [{
    id: "1",
    name: "Albert",
    surname: "Camus",
    age: "41",
    books: [
        {
        id: "1",
        title: "The Stranger",
        score: "9",
        isPublished: false
    },
    {
        id: "2",
        title: "The Mother",
        score: "7",
        isPublished: true
    },
]
}]

const books = [
    {
        id: "1",
        title: "Yabancı",
        author: authors[0],
        score: 3.4,
        isPublished: true,
    },
    {
        id: "2",
        title: "Hırsız",
        author: authors[0],
        score: 7.1,
        isPublished: false,
    },
]

module.exports = {
    authors,
    books
}