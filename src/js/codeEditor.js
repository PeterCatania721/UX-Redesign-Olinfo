var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "javascript",
    styleActiveLine: true,
    lineNumbers: true,
    lineWrapping: true
});