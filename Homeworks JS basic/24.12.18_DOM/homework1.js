console.log("connected");
let headersOne = document.getElementsByTagName("h1");
let headersThree = document.getElementsByTagName("h3");
let paragraphs = document.getElementsByTagName("p");
let texts = document.getElementsByTagName("text");

headersOne[0].innerText = "This is not the original text here, in first h1 header."
paragraphs[0].innerText = "This is not the original text here, in first paragraph."
paragraphs[1].innerText = "This is not the original text here, in second paragraph."
texts[0].innerText = "This is not the original text here, in tag text."
headersOne[1].innerText = "This is not the original text here, in second h1 header."
headersThree[0].innerText = "This is not the original text here, in h3 header."

headersOne[0].style.color = "red"
paragraphs[0].style.backgroundColor = "blue"
paragraphs[1].style.fontSize = "33px"
