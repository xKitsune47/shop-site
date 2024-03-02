"use strict";

const reviews = [
    {
        name: "Alessandro Morris",
        rating: 1,
        review: "Exquisite blooms, impeccable service",
    },
    {
        name: "Cormac Pham",
        rating: 5,
        review: "Floral perfection every time.",
    },
    {
        name: "Katerina Hooper",
        rating: 4,
        review: "Breathtaking arrangements, stunningly fresh.",
    },
    {
        name: "Eva Allen",
        rating: 3,
        review: "Artistry in every petal.",
    },
    {
        name: "Thea Vance",
        rating: 3,
        review: "Unmatched beauty in each bouquet.",
    },
    {
        name: "Mario Rivera",
        rating: 1,
        review: "Flowers that inspire awe.",
    },
    {
        name: "Katherine Oliver",
        rating: 4,
        review: "Effortless elegance in every design.",
    },
    {
        name: "Martha Odling",
        rating: 2,
        review: "Simply the best florist around.",
    },
    {
        name: "Arnold Mcdonald",
        rating: 3,
        review: "Exceptional quality, unbeatable prices.",
    },
    {
        name: "Joseph Sanford",
        rating: 5,
        review: "Floral dreams brought to life.",
    },
];

async function showReviews() {
    let reviewsToShow = [];
    for (let i = 5; i > 0; i--) {
        reviews.forEach((element) => {
            if (element.rating === i && reviewsToShow.length < 3) {
                reviewsToShow.push(element);
            }
        });
    }

    let parentElement = document.querySelector(".reviews");
    reviewsToShow.forEach((element) => {
        parentElement.innerHTML += `
        <div class="review">
            <span class="name"><h3>${element.name}</h3></span>
            <span class="stars">${"⭐".repeat(element.rating)}</span>
            <span class="reviewText">${element.review}</span>
        </div>
        `;
    });
}

setTimeout(showReviews, 50);
