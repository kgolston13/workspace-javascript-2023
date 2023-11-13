/*call back function example
$('body').hide().fadeIn(4000,function(){alert("done")});
console.log("I am here");*/
//how jquery works
$('h1').click(function(){
    $(this).text("Hide the image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

//play with jQuery .each function

//update the image link
$('img').each(function(){
    let path = $(this).attr('src');
    let newpath = "img/" + path;
    $(this).attr('src',newpath);
    console.log(newpath);
});

//update the anchor link --- all click will go to google
$('a').each(function(){
    let links = $(this).attr('href');
    let newlinks = "https://www.google.com";
    $(this).attr('href',newlinks);
    console.log(newlinks);
});

//update all the links to have a strikethrough
$('a').each(function(){
    $(this).css('text-decoration','line-through');
});