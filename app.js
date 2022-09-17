const commentBox = document.getElementById('comment-box')

const comments = [
    {
        img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80",
        alt: "Profile picture of Marta",
        text: "Puny humans",
        name: "Marta"
    },
    {
        img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        alt: "Profile picture of T-Dawg",
        text: "I love life in Hollywoo",
        name: "Mr. Peanutbutter"
    },
    {
        img: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        alt: "Profile picture of Mary and Poppins",
        text: "Oops, I did it again!",
        name: "Mary and Poppins"
    }
]

function populateBox() {
    comments.forEach(comment => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')
        commentBox.append(cardElement)

        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)



        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', comment.img)
        imageElement.setAttribute('alt', comment.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = comment.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name

        cardElement.append(imageContainer, paragraphElement, nameContainer)
        
    })
}


function showCard () {
    this.classList.add('active')
}

function blurCard () {
    this.classList.remove('active')
}
