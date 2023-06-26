import data from "../resources/region/data.js";

document.addEventListener("DOMContentLoaded", function () {
  fillData();
});

function getUrlQuery() {
  const urlQueries = new URLSearchParams(window.location.search);
  const region = String(urlQueries.get("region")).toLowerCase();
  const destination = String(urlQueries.get("destination")).toLowerCase();

  return { region, destination };
}

function findRegionObject(region) {
  const foundRegion = data.regions.find(function findValue(_region) {
    const comparison = _region.regionName.toLowerCase() === region;

    return comparison;
  });

  return foundRegion;
}

function findDestination(foundRegion, destination) {
  return foundRegion.whereToGo.find(
    (r) => r.destinationName.toLowerCase() === destination.toLowerCase()
  );
}

function fillData() {
  const queries = getUrlQuery();
  const foundRegion = findRegionObject(queries.region);
  const foundDestination = findDestination(foundRegion, queries.destination);

  if (foundRegion === undefined) {
    return "Página no encontrada";
  } else {
    document.getElementById("regionName").innerHTML = foundRegion.regionName;
    document.getElementById("subtitle").innerHTML = foundRegion.subtitle;
    document.getElementById("subtitle2").innerHTML = foundDestination.subtitle;

    const paragraphs = foundDestination.paragraphs[0];
    document.getElementById("paragraph1").innerHTML = paragraphs.paragraph1;
    document.getElementById("paragraph2").innerHTML = paragraphs.paragraph2;
    document.getElementById("paragraph3").innerHTML = paragraphs.paragraph3;
  }
}
