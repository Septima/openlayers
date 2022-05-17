import GeoTIFF from "../src/ol/source/GeoTIFF.js";
import Map from "../src/ol/Map.js";
import Projection from "../src/ol/proj/Projection.js";
import TileLayer from "../src/ol/layer/WebGLTile.js";
import View from "../src/ol/View.js";
import proj4 from "proj4";
import { getCenter } from "../src/ol/extent.js";
import { register } from "../src/ol/proj/proj4.js";

const source = new GeoTIFF({
  convertToRGB: true,
  sources: [
    {
      url:
        "https://api.dataforsyningen.dk/skraafoto_server_test/COG_oblique_2021/10km_613_58/1km_6132_583/2021_83_37_2_0025_00001961.tif?token=4adf32524ae6d6998565f638a1090ba1",
      nodata: 0
    }
  ]
})
const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: source})
  ],
  view: source.getView(),
});

console.log(source);