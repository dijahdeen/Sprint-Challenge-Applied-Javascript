// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function CreateCard(headline, img, name) {

    const Card = document.createElement('div')
    const HeadLine = document.createElement('div')
    const Author = document.createElement('div')
    const ImageDiv = document.createElement('div')
    const Image = document.createElement('img')
    const NaMe = document.createElement('span')

    Card.classList.add('card')
    HeadLine.classList.add('headline')
    Author.classList.add('author')
    ImageDiv.classList.add('img-container')

    Card.appendChild(HeadLine)
    Card.appendChild(Author)
    Author.appendChild(ImageDiv)
    ImageDiv.appendChild(Image)
    Author.appendChild(NaMe)


    HeadLine.textContent = headline
    NaMe.textContent = name
    Image.src = img

    return Card
}

const CardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    console.log(response)

    response.data.articles.bootstrap.forEach(item => {
        const NewArticle = CreateCard(item.headline, item.authorPhoto, item.authorName)
        CardsContainer.appendChild(NewArticle)
    })

    response.data.articles.javascript.forEach(item => {
        const NewArticle = CreateCard(item.headline, item.authorPhoto, item.authorName)
        CardsContainer.appendChild(NewArticle)
    })
    response.data.articles.technology.forEach(item => {
        const NewArticle = CreateCard(item.headline, item.authorPhoto, item.authorName)
        CardsContainer.appendChild(NewArticle)

    })
    response.data.articles.jquery.forEach(item => {
        const NewArticle = CreateCard(item.headline, item.authorPhoto, item.authorName)
        CardsContainer.appendChild(NewArticle)
    })
    response.data.articles.node.forEach(item => {
        const NewArticle = CreateCard(item.headline, item.authorPhoto, item.authorName)
        CardsContainer.appendChild(NewArticle)
    })
})
