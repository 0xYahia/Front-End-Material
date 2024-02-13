import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as L from 'leaflet'
import {pointJson} from "./data/point";
import {lineJson} from "./data/line";
import {rectangleJson} from "./data/rectangle";
import {polygonJson} from "./data/polygon";
import {Layer} from "leaflet";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  map: any;
    ngOnInit(): void {
      this.map = L.map('map').setView([30.033333, 31.233334], 10);

      // Region Layer and WMS
      let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© Roboost'
      })

      osm.addTo(this.map);

      //! World Street Map
      var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
      });

      Esri_WorldStreetMap.addTo(this.map)

      //! Dark map
      let DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      });
      DarkMatter.addTo(this.map)

      //! google map
      let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
      });
      googleStreets.addTo(this.map)

      //! Marker & Icon
      let myIcon = L.icon({
        iconUrl: './assets/start-point.svg',
        iconSize: [30, 30],
        // iconAnchor: [22, 94],
        // popupAnchor: [-3, -76],
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
      });
        let singleMarker =  L.marker([30.033333, 31.233334], {icon: myIcon, draggable: true})
        singleMarker.addTo(this.map)
        let popup = singleMarker.bindPopup(`This is Cairo , ${singleMarker.getLatLng()}  <br> I live in Cairo`).openPopup()

      let secondMarker =  L.marker([30.033333, 31.433334], {icon: myIcon, draggable: true})

      console.log(singleMarker.toGeoJSON())

      let wms = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
        layers: 'nexrad-n0r-900913',
        format: 'image/png',
        transparent: true,
        attribution: "Weather data © 2012 IEM Nexrad"
      });

      // Region: GeoJson
      // @ts-ignore
      let pointData = L.geoJson(pointJson, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup('<b>Name: </b>' + feature.properties.name)
        }
      }).addTo(this.map)
      // @ts-ignore
      let lineData = L.geoJson(lineJson).addTo(this.map)
      // @ts-ignore
      let rectData = L.geoJson(rectangleJson, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup('<b>Name: </b>' + feature.properties.name)
        },
        style: {
          fillColor: 'red',
          fillOpacity: 1,
          color: '#0000ff',
          stroke: true

        }
      }).addTo(this.map)
      // @ts-ignore
      let polygonData = L.geoJson(polygonJson, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup('<b>Name: </b>' + feature.properties.name)
        },
        style: {
          fillColor: 'red'
        }
      }).addTo(this.map)
      // Region: Layer control
      let baseMaps = {
        "OSM": osm,
        "World street map ": Esri_WorldStreetMap,
        "Dark": DarkMatter,
        "Google Street": googleStreets
      };

      let overlayMaps = {
        "First Marker": singleMarker,
        "Second Marker": secondMarker,
        "Point Data": pointData,
        "Line Data": lineData,
        "Rectangle Data": rectData,
        "Polygon Data": polygonData,
        "WMS": wms
      };

      // L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(this.map)
      L.control.layers(baseMaps, overlayMaps).addTo(this.map)

      //! Remove
      this.map.removeLayer(osm)
      this.map.removeLayer(singleMarker)


    }
}
