document.getElementById('ajout-form').addEventListener('submit', e =>{
  console.log("ok")
  e.preventDefault();
  const nouvelleChose = document.getElementById('chose-input').value;
  axios.post('/ajouter', { chose: nouvelleChose }).then(() => {
      let ul = document.querySelector('.list-group');
      console.log(res);
      // const choseAInserer = res.data
      document.getElementById('choses-ul').insertAdjacentHTML('beforeend', 'toto');
      // requête terminée
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
