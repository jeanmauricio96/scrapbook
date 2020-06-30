let titleInput = document.getElementById("messageTitle");
let messageInput = document.getElementById("messageBody");
let addButton = document.getElementById("addButton");
let scrapsField = document.getElementById("scrapsField");

let scraps = [];

function addNewScrap() {
  let title = titleInput.value;
  let message = messageInput.value;

  if (title == "" || message == "") {
    return alert("Erro: Preenchimento dos é campos obrigatório!");
  } else {
    titleInput.value = "";
    messageInput.value = "";

    scrapsField.innerHTML = "";

    scraps.push({ title, message });

    for (const scrap of scraps) {
      scrapsField.innerHTML += createScrapCard(scrap.title, scrap.message);
    }
  }
}

function createScrapCard(title, message) {
  return `  <div class="message-cards card text-white bg-dark m-2">
              <div class="card-header font-weight-bold">${title}</div>
              <div class="card-body">
                <p class="card-text">
                  ${message}
                </p>
              </div>
              <div class="w100 d-flex justify-content-end pr-2 pb-2">
                <button class="btn btn-danger mr-1">Deletar</button>
                <button
                  class="btn btn-info"
                  data-toggle="modal"
                  data-target="#editModal"
                >
                  Editar
                </button>
              </div>
            </div>
  `;
}

addButton.onclick = addNewScrap;
