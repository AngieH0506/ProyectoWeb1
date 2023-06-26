import data from "../resources/region/data.js";

document.addEventListener("DOMContentLoaded", function () {
  showTab();
  fillData();
});

function openDestination(region, destination) {
  const url = window.location.origin;

  window.open(
    `${url}/destino.html?region=${region}&destination=${destination}`,
    ""
  );
}

function addClickEvent(element, region, destination) {
  element.addEventListener('click', function() {
    openDestination(region, destination);
  });
}

function getUrlQuery() {
  const urlQueries = new URLSearchParams(window.location.search);
  const region = String(urlQueries.get("region"));

  return region.toLowerCase();
}

function findRegionObject(region) {
  const foundRegion = data.regions.find(function findValue(_region) {
    const comparison = _region.regionName.toLowerCase() === region;

    return comparison;
  });

  return foundRegion;
}

function fillData() {
  const region = getUrlQuery();
  const foundRegion = findRegionObject(region);

  if (foundRegion === undefined) {
    return "Página no encontrada";
  } else {
    document.getElementById("regionName").innerHTML = foundRegion.regionName;
    document.getElementById("subtitle").innerHTML = foundRegion.subtitle;
    document.getElementById("description").innerHTML = foundRegion.description;
    document.getElementById("background").style.backgroundImage =
      "url(../resources/region/" +
      foundRegion.regionName.toLowerCase() +
      "/portrait.webp)";
    document.getElementById("transportation").href = foundRegion.transportation;

    // destinations
    let whereToGoItem = foundRegion.whereToGo[0];
    document.getElementById("destination1").innerHTML =
      whereToGoItem.destinationName;
    document.getElementById("subtitle1").innerHTML = whereToGoItem.subtitle;
    document.getElementById("img-destino-1").style.backgroundImage =
      "url(" + whereToGoItem.image + ")";

    addClickEvent(document.getElementById("destination1"), foundRegion.regionName, whereToGoItem.destinationName);

    whereToGoItem = foundRegion.whereToGo[1];
    document.getElementById("destination2").innerHTML =
      whereToGoItem.destinationName;
    document.getElementById("subtitle2").innerHTML = whereToGoItem.subtitle;
    document.getElementById("img-destino-2").style.backgroundImage =
      "url(" + whereToGoItem.image + ")";

    addClickEvent(document.getElementById("destination2"), foundRegion.regionName, whereToGoItem.destinationName);

    whereToGoItem = foundRegion.whereToGo[2];
    document.getElementById("destination3").innerHTML =
      whereToGoItem.destinationName;
    document.getElementById("subtitle3").innerHTML = whereToGoItem.subtitle;
    document.getElementById("img-destino-3").style.backgroundImage =
      "url(" + whereToGoItem.image + ")";

    addClickEvent(document.getElementById("destination3"), foundRegion.regionName, whereToGoItem.destinationName);

    // WTD
    let whatToDoItem = foundRegion.whatToDo[0];
    document.getElementById("title_wtd").innerHTML = whatToDoItem.title;
    document.getElementById("image_wtd").src = whatToDoItem.image;

    const paragraphs = foundRegion.whatToDo[0].paragraphs[0];
    document.getElementById("paragraph1").innerHTML = paragraphs.paragraph1;
    document.getElementById("paragraph2").innerHTML = paragraphs.paragraph2;
    document.getElementById("paragraph3").innerHTML = paragraphs.paragraph3;
  }
}

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
    const idToDeActivateStyles = document.getElementById(
      idsToDeActivate[i]
    ).style;
    idToDeActivateStyles.fontSize = "16px";
    idToDeActivateStyles.textDecoration = "none";
    idToDeActivateStyles.color = "#000000";
  }
}

function showTab(tabName = "donde_ir") {
  const transportation = "como_moverse";
  const whereToGo = "donde_ir";
  const whatToDo = "que_hacer";

  const cm = "cm";
  const di = "di";
  const qh = "qh";

  switch (tabName) {
    case transportation:
      displayTab(transportation, [whereToGo, whatToDo]);
      displayLink(cm, [di, qh]);
      break;
    case whereToGo:
      displayTab(whereToGo, [transportation, whatToDo]);
      displayLink(di, [cm, qh]);
      break;
    case whatToDo:
      displayTab(whatToDo, [transportation, whereToGo]);
      displayLink(qh, [cm, di]);
      break;
    default:
      break;
  }
}

window.showTab = function (tab) {
  showTab(tab);
};
