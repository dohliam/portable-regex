function replaceText() {
  var textInput = document.getElementById("text_input");
  var regexInput = document.getElementById("regex_input");
  var replaceText = document.getElementById("replace_text");
  var re = new RegExp(regexInput.value, "g");
  var Result = document.getElementById("result");
  Result.innerHTML = textInput.value.replace(re,replaceText.value);
  return true;
}
function testText() {
  var textInput = document.getElementById("text_input");
  var regexInput = document.getElementById("regex_input");
  var re = new RegExp(regexInput.value, "g");
  var Result = document.getElementById("result");
  Result.innerHTML = re.test(textInput.value);
  return true;
}
function execText() {
  var textInput = document.getElementById("text_input");
  var regexInput = document.getElementById("regex_input");
  var re = new RegExp(regexInput.value, "g");
  var Result = document.getElementById("result");
  Result.innerHTML = re.exec(textInput.value);
  return true;
}
function selectText() {
  var HighLight = document.getElementById("result");
  var textInput = document.getElementById("text_input");
  var regexInput = document.getElementById("regex_input");
  var re = new RegExp("(" + regexInput.value + ")", "g");
  HighLight.innerHTML = textInput.value.replace(re,'<span style="background-color:FFFF14">$1</span>');
  return true;
}
function showSource() {
  var Result = document.getElementById("result");
  var textInput = document.getElementById("text_input");
  Result.innerHTML = textInput.value.replace("\n", "<br>");
  return true;
}
function modifySource() {
  var textInput = document.getElementById("text_input");
  var regexInput = document.getElementById("regex_input");
  var replaceText = document.getElementById("replace_text");
  var re = new RegExp(regexInput.value, "g");
  var Result = document.getElementById("result");
  textInput.value = textInput.value.replace(re,replaceText.value);
  return true;
}
function grep(fmt) {
  var textInput = document.getElementById("text_input").value;
  var lines = textInput.split("\n");
  var Result = document.getElementById("result");
  var regexInput = document.getElementById("regex_input").value;
  var regex = new RegExp(regexInput);
  var grepedText = "";
  var br = (fmt=="html") ? "<p>" : "\n";
  for (var i = 0; i < lines.length; i++) {
    var text = lines[i];
    matches = regex.exec(text);
    if (matches != null) {
      grepedText += text + br;
    }
  }
  (fmt=="html") ? Result.innerHTML = grepedText : document.getElementById("text_input").value = grepedText;
}
function vgrep(fmt) {
  var textInput = document.getElementById("text_input").value;
  var lines = textInput.split("\n");
  var Result = document.getElementById("result");
  var regexInput = document.getElementById("regex_input").value;
  var regex = new RegExp(regexInput);
  var grepedText = "";
  var br = (fmt=="html") ? "<p>" : "\n";
  for (var i = 0; i < lines.length; i++) {
    var text = lines[i];
    matches = regex.exec(text);
    if (matches == null) {
      grepedText += text + br;
    }
  }
  (fmt=="html") ? Result.innerHTML = grepedText : document.getElementById("text_input").value = grepedText;
}
function insertReplace(text) {
  var inputBtn = document.getElementById("replace_text");
  inputBtn.value = inputBtn.value + text;
  replaceText();
  inputBtn.focus();
  return true;
}
function insertRegex(text) {
  var inputBtn = document.getElementById("regex_input");
  inputBtn.value = inputBtn.value + text;
  selectText();
  inputBtn.focus();
  return true;
}
