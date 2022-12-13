var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    value: "function myScript(){return 100;}\n",
    mode: "javascript",
    styleActiveLine: true,
    lineNumbers: true,
    lineWrapping: true
});
