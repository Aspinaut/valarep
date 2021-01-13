
chosesClient.forEach(chose => {
  document.querySelector('.list-group').insertAdjacentHTML('beforeend', genererListItem(chose.contenu, chose._id))
});

// autre méthode

// const lisLi = chosesClient.map(chose =>
//   genererListItem(chose.contenu, chose._id);
// );
// document.getElementById('choses-ul').insertAdjacentHTML('beforeend', lisLi.join())



function genererListItem(resContent, resId) {
  return `<li
    class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
    <span class="chose-text">${resContent}</span>
      <div>
        <button class="mr-1 btn btn-secondary btn-sm btn-edition" data-id=${resId}>Éditer</button>
        <button class="btn btn-danger btn-sm btn-delete" data-id=${resId}>Supprimer</button>
      </div>
  </li>`;
}

document.getElementById('ajout-form').addEventListener('submit', e =>{
  e.preventDefault();
  const choseInput = document.getElementById('chose-input')
  const nouvelleChose = choseInput.value;
  axios.post('/ajouter', { chose: nouvelleChose }).then((res) => {
      let ul = document.querySelector('.list-group');
      document.getElementById('choses-ul').insertAdjacentHTML('beforeend', genererListItem(res.data.contenu, res.data._id));
      choseInput.focus();
      choseInput.value = '';
  }).catch(() => {
      console.log("Un problème est survenu durant la maj");
  });
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-edition')){
      // alert('btn');
      let spanContenu  =  e.target.parentElement.parentElement.querySelector('.chose-text');
      let ancienContenu = spanContenu.innerHTML;
      let nouveauContenu = prompt('Indiquez le nouveau contenu SVP', ancienContenu);


      let idChose = e.target.getAttribute('data-id');
      axios.post('/editer', { contenu: nouveauContenu, id: idChose }).then(() => {
          spanContenu.innerHTML = nouveauContenu;

          // requête terminée
      }).catch(() => {
          console.log("Un problème est survenu durant la maj");
      });
    }
  if (e.target.classList.contains('btn-delete')){
      // alert('btn');
      let li  =  e.target.parentElement.parentElement;

      let idChose = e.target.getAttribute('data-id');
      axios.post('/supprimer', { id: idChose }).then(() => {
          li.remove();

      }).catch(() => {
          console.log("Un problème est survenu durant le delete");
      });
    }
});
