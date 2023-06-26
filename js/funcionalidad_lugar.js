document.addEventListener("DOMContentLoaded", function () {
    switchTab();
});
  
function displayTab(idToShow, idsToHide) {
    const activeLink = document.getElementById(idToShow);
    activeLink.style.display = "flex";
  
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
  
function switchTab(tabName = "donde_ir") {
    const comoMoverse = "como_moverse";
    const dondeIr = "donde_ir";
    const queHacer = "que_hacer";
  
    const cm = "cm";
    const di = "di";
    const qh = "qh";
  
    switch (tabName) {
      case comoMoverse:
        displayTab(comoMoverse, [dondeIr, queHacer]);
        displayLink(cm, [di, qh]);
        break;
      case dondeIr:
        displayTab(dondeIr, [comoMoverse, queHacer]);
        displayLink(di, [cm, qh]);
        break;
      case queHacer:
        displayTab(queHacer, [comoMoverse, dondeIr]);
        displayLink(qh, [cm, di]);
        break;
      default:
        break;
    }
}