/* eslint-disable camelcase */

import { LatLngBoundsExpression } from 'leaflet'

interface Info {
  diameter: number;
  length: number;
}

interface Properties {
  color: string;
  info: Info;
  parent_uuid: string;
  uuid: string;
}

interface Geometry {
  coordinates: LatLngBoundsExpression;
  type: string;
}

export interface Feature {
  geometry: Geometry;
  properties: Properties;
  type: string;
}

export interface MapView {
  features: Feature[]
}
