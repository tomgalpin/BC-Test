# BigCommerce Frontend Test

1.) Did you include any JS libraries in any of the above exercises? Why or why not?
For both exercises I included
In Exercise #1:
I included a "star-rating" JS library.  This allowed for easier and more robust raiting of the stars on the card.  Also, I wanted to check out this libary to see if it was a good one.  Initially I was simply toggling classes to the rating system.  Then, the more I thought of it, this was a pretty poor rating system that I was creating.  So I looked for an example that someone did that was probably better than I could come up with on the fly.  Thus, I found this library.  :)
In Exercise #2:
I included Jquery to allow for eaiser click handlers and such. 
I also included a form validation JS library.  For this one, it was/is a super robust form validation library.  I used it initially because string validations on each form wasn't as fun as learning something new.  To be honest, however, I'm not sure this is/would be the best library for form validation.  It seems a bit too large and a bit unnecessarily complex in other areas (the form validations, POSTs, etc..)

2.) Are there any cross browser compatibility issues? Note any specifics.
For exercise #2 I used a width: calc(); There are IE issues, previous to IE 11.  :(

3.) Were there any decisions you had to make when implementing the form field validation? Describe any trade-offs you had to make?
As mentioned above, I used a form validation library.  Initially I used it because I wanted to try and learn something new, and I didn't want to do my form validations with some simple(ish) string evaluations.  Sometimes, I've found, form validation is better done on the back end; sometimes, however, it seems like an upfront, front end solution is better.  For this library, I was trying to find a happy medium.  I don't think I did, however.  It is a great library, but not something I would overtly choose again without the counsel/opinion of other devs.  I ended up spending a bit too much time learning the library and some of it's conventions.  This was fun but not best use of my weekend time (especially if you ask my wife!).

4.) If you were to ask the UI/UX designer any questions about the above mocks and requirements, what would they be? Is there anything you would call out, or recommend changing?
-- For both exercises I would ask for more specifics on colors, spacing/margins/padding, fonts, icons, etc...  For all of these I did my best to guess and use the tools I had to measure from the images/mock ups.  
-- For exercise #2, I would ask about the date inputs:  That is, I'd ask if they would be better server with dropdowns on the day and month, and even the year.  I did simple form number validations for each, but it would be easier (and proabably) better to use dropdowns.  Or, at least, that is what I'd recommend.
-- I'd also ask what are our common breakpoints; personally, I've experienced a variety of patterns on how a view should be responsive.

5.) What was the most difficult or challenging aspect to implement in the above exercises? Why?
-- Probably the biggest one was using the form validation library.  Initially I thought it would be a time saver; in the end, however, it was probably the opposite.  (It was, however, pretty fun to learn a new library.)
-- Other than that, it was making a ton of educated guesses and/or measure things like padding, background colors, etc... I ended up downloading a free trial of Photoshop to help me do all of these things.  I probably should have done that from the get-go.  
-- Lastly, it was the CSS.  To be honest, it has been a while since I've had to create CSS from scrath and not use Less of Sass.  Additionally, I've generally worked within conventions about CSS structures and such.  Outside of that, I've reminded myself that my CSS skills and structuring are a bit rusty.  
 