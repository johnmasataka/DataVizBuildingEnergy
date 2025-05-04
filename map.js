var smallMedia = window.matchMedia("(max-width: 600px)").matches;

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
features.setAttribute("id", "features");

if (config.topTitle) {
  var topTitle = document.createElement("div");
  topTitle.innerHTML = config.topTitle;
  header.appendChild(topTitle);
}
if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}
if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}
if (config.byline) {
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  chapter.classList.add("br3");
  chapter.innerHTML = record.chapterDiv;
  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }
  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement("div");

if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

var startingZoom;
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

var scroller = scrollama();

map.on("load", function () {
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  }

  // Add source first
  map.addSource("data", {
    type: "geojson",
    data: "data/data.geojson",
  });

  // Add layers with initial opacity 0
  const layers = [
    {
      id: "electricity",
      type: "circle",
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "electricity_psf"],
          8.00, "#84ff00",
          16.19, "#ffd500",
          50.00, "#ff0000",
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["exponential", 2],
          ["zoom"],
          10, ["interpolate", ["linear"], ["get", "electricity"], -1, 10, -0.4, 1.5],
          15, ["interpolate", ["linear"], ["get", "electricity"], -1, 25, -0.4, 12],
        ],
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
      },
    },
    {
      id: "price",
      type: "circle",
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "electricity_psf"],
          8.00, "#84ff00",
          16.19, "#ffd500",
          50.00, "#ff0000",
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["get", "price"],
          1.31, 0.01,
          713.21, 1.5,
          4336.16, 6,
        ],
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
      },
    },
    {
      id: "price_large",
      type: "circle",
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "electricity_psf"],
          8.00, "#84ff00",
          16.19, "#ffd500",
          50.00, "#ff0000",
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["get", "price"],
          1.31, 1,
          713.21, 25,
          4336.16, 50,
        ],
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
      },
    },
    {
      id: "natural_gas",
      type: "circle",
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "natural_gas_psf"],
          20, "rgb(255, 255, 204)",
          35, "rgb(199, 233, 180)",
          50, "rgb(127, 205, 187)",
          56.95, "rgb(65, 182, 196)",
          90, "rgb(29, 145, 192)",
          120, "rgb(34, 94,168)",
          150, "rgb(12, 44, 132)",
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["exponential", 2],
          ["zoom"],
          10, ["interpolate", ["linear"], ["get", "natural_gas_psf"], -1, 10, -0.4, 1.5],
          15, ["interpolate", ["linear"], ["get", "natural_gas_psf"], -1, 25, -0.4, 12],
        ],
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
      },
    },
    {
      id: "price_natural_gas",
      type: "circle",
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "natural_gas_psf"],
          20, "rgb(255, 255, 204)",
          35, "rgb(199, 233, 180)",
          50, "rgb(127, 205, 187)",
          56.95, "rgb(65, 182, 196)",
          90, "rgb(29, 145, 192)",
          120, "rgb(34, 94,168)",
          150, "rgb(12, 44, 132)",
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["get", "price"],
          1.31, 0.01,
          713.21, 1.5,
          4336.16, 6,
        ],
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
      },
    },
    {
      id: "price_natural_gas_large",
      type: "circle",
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "natural_gas_psf"],
          20, "rgb(255, 255, 204)",
          35, "rgb(199, 233, 180)",
          50, "rgb(127, 205, 187)",
          56.95, "rgb(65, 182, 196)",
          90, "rgb(29, 145, 192)",
          120, "rgb(34, 94,168)",
          150, "rgb(12, 44, 132)",
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["get", "price"],
          1.31, 1,
          713.21, 25,
          4336.16, 50,
        ],
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
      },
    }
  ];

  // Add all layers with initial opacity 0
  layers.forEach(layer => {
    map.addLayer({
      ...layer,
      source: "data",
    }, "waterway-label");
  });

  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      let thisZoom;
      if (smallMedia) {
        thisZoom = chapter.location.zoomSmall;
      } else {
        thisZoom = chapter.location.zoom;
      }
      thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || "flyTo"](thisLocation);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", function () {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

window.addEventListener("resize", scroller.resize);