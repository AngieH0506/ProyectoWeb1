document.addEventListener("DOMContentLoaded", function () {
  switchTab();
});

function displayTab(idToShow, idsToHide) {
  const activeLink = document.getElementById(idToShow);
  activeLink.style.display = "block";

  for (let i = 0; i < idsToHide.length; i++) {
    document.getElementById(idsToHide[i]).style.display = "none";
  }
}

function displayLink(idToActivate, idsToDeActivate) {
  const activeLinkStyles = document.getElementById(idToActivate).style;
  activeLinkStyles.fontSize = "20px";
  activeLinkStyles.color = "#59ce8f";

  for (let i = 0; i < idsToDeActivate.length; i++) {
    const idToDeActivateStyles = document.getElementById(idsToDeActivate[i]).style;
    idToDeActivateStyles.fontSize = "16px";
    idToDeActivateStyles.textDecoration = "none";
    idToDeActivateStyles.color = "#000000";
  }
}

function switchTab(tabName = "requisitos_migratorios") {
  const requisitosMigratorios = "requisitos_migratorios";
  const consideracionesGenerales = "consideraciones_generales";
  const queLlevar = "que_llevar";

  const rm = "rm";
  const cg = "cg";
  const ql = "ql";

  switch (tabName) {
    case requisitosMigratorios:
      displayTab(requisitosMigratorios, [consideracionesGenerales, queLlevar]);
      displayLink(rm, [cg, ql]);
      break;
    case consideracionesGenerales:
      displayTab(consideracionesGenerales, [requisitosMigratorios, queLlevar]);
      displayLink(cg, [rm, ql]);
      break;
    case queLlevar:
      displayTab(queLlevar, [requisitosMigratorios, consideracionesGenerales]);
      displayLink(ql, [rm, cg]);
      break;
    default:
      break;
  }
}

function openRegion(region) {
  const url = window.location.origin;


  window.open(`${url}/lugar.html?region=${region}`, "");
}