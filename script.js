var timeBlock = $('.time-block');
var button = $('.btn');
var textEvent = $('.textarea');
var currentTime = parseInt(moment().hour());


$('#currentDay').text(moment().format("MMM Do YYYY"));

textEvent.each(function (i) {
    var storedEvent = localStorage.getItem(`userEvent${i}`);
    textEvent[i].value = storedEvent;
})

function addIndex(x) {
    $(x).each(function (index) {
        $(this).attr("data-time", index + 9);
    });
}

addIndex(timeBlock);
addIndex(button);
addIndex(textEvent);





timeBlock.each(function () {
    var dataTime = parseInt($(this).attr('data-time'));
    if (dataTime < currentTime) {
        $(this).addClass("past");
    } else if (dataTime > currentTime) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }


});

button.each(function (index) {
    var textData = $(textEvent).attr('data-time');
    var buttData = $(button).attr('data-time');
    $(this).click(function () {
        if (textData === buttData) {
            localStorage.setItem(`userEvent${index}`, textEvent[index].value);
        }


    })
})



