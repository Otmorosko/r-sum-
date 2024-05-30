$(document).ready(function() {
    var facts = [
        "Did you know? The first computer virus was created in 1983.",
        "Did you know? JavaScript was created in just 10 days.",
        "Did you know? The first website is still online.",
        "Did you know? The first computer programmer was Ada Lovelace.",
        "Did you know? There are around 700 different programming languages."
    ];

    $("#otherButton").click(function() {
        var randomFact = facts[Math.floor(Math.random() * facts.length)];
        $("#codingFact").text(randomFact);
        $("#factPopup").fadeIn();
    });

    $("#closeFactPopup").click(function() {
        $("#factPopup").fadeOut();
    });

    $("#sayHelloBtn").click(function() {
        $("#emailPopup").fadeIn();
    });

    $("#closeEmailPopup").click(function() {
        $("#emailPopup").fadeOut();
    });
});

