import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as L from 'leaflet'

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

      let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      })

      osm.addTo(this.map);

      //! World Street Map
      // var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      //   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
      // });
      //
      // Esri_WorldStreetMap.addTo(this.map)

      //! Dark map
      // var DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      //   subdomains: 'abcd',
      //   maxZoom: 20
      // });
      // DarkMatter.addTo(this.map)

      //! google map
      var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
      });
      googleStreets.addTo(this.map)

      //! Marker
      L.marker([30.033333, 31.233334]).addTo(this.map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    }
}
