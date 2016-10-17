var element = document.querySelector('.card_ratings_stars');

var currentRating = 3;

var maxRating= 5;

var callback = function(rating){
    console.log('The rating is:  ', rating);
};

var myRating = rating(element, currentRating, maxRating, callback);