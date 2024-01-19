const input = document.getElementById('input-todos');
const saveBtn = document.getElementById('save');
const lista = document.getElementById('lista');

saveBtn.addEventListener("click", function () {
    if (input.value !== "") {
        let text = input.value;
        let quant = document.querySelectorAll("li").length;
        let html = `
            <li id="${quant}">
                <input type="checkbox">
                <p>${text}</p>
                <button onclick="remover(${quant})" type="button">remove</button>
            </li>
        `;
        lista.innerHTML += html;
        input.value = "";

    } else {
        input.style.border = "1px solid red";
    }
});

function remover(valor) {
    const idLi = document.getElementById(valor);
    idLi.remove();
}

input.addEventListener("keydown", function () {
    input.style.border = "1px solid #bdbdbd";
});
