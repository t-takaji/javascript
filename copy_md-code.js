let pre_tags = document.getElementsByTagName("pre");

for (let i = 0; i < pre_tags.length; i++) {
    let code_tag = pre_tags[i].getElementsByTagName("code")[0];
    let tag_id = "code_" + i;
    code_tag.setAttribute("id", tag_id);

    let copy_button = document.createElement('div');
    let button_id = "button_" + i;
    copy_button.setAttribute("id", button_id);
    copy_button.setAttribute("style", "position: absolute; z-index: 1; left:85%; font-weight: bold; width: 60px; background-color: transparent; cursor: pointer; outline: none; appearance: none; text-align:center;");
    copy_button.setAttribute("onClick", "selectText(\"" + tag_id + "\", \"" + button_id + "\")");
    copy_button.textContent = ""

    pre_tags[i].insertBefore(copy_button, code_tag);

    pre_tags[i].addEventListener('mouseover', () => {
        copy_button.textContent = "Copy"
    }, false);
    pre_tags[i].addEventListener('mouseout', () => {
        copy_button.textContent = ""
    }, false);
}
function selectText(tag_id, button_id) {

    let copy_button = document.getElementById(button_id);
    copy_button.textContent = 'Copied!!';

    let selection = window.getSelection();
    selection.removeAllRanges();

    let range = document.createRange();
    range.selectNodeContents(document.getElementById(tag_id));
    selection.addRange(range);

    navigator.clipboard.writeText(selection);
}
