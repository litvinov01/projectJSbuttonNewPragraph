function buttonOnClick() {
    var container = document.getElementById("container");
    var inputText = document.getElementById("text");
    
    var paragraph = document.createElement("p");
    var textMessage = document.createTextNode(inputText.value);
    
    paragraph.appendChild(textMessage);
    container.appendChild(paragraph);
}
