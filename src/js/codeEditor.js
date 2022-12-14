var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "javascript",
    styleActiveLine: true,
    lineNumbers: true,
    lineWrapping: true,
});

editor.getDoc().setValue('Write your code here!!\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
