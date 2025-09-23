"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import classes from "./map.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";
import Link from "next/link";
import {
  mapCenter,
  mapCustomStyleJSON,
} from "~/src/entities/contacts/model/contacts.const";

export default function ContactsMap() {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const mapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  useEffect(() => {
    setMapLoaded(!!mapApiKey);
  }, [mapApiKey]);

  if (!mapLoaded) {
    return (
      <AnimatedItem
        delay={0.15}
        index={1}
        duration={0.5}
        slideIn
        direction="left"
        className={classes.dummy}
      >
        <div title="Map cannot be loaded"></div>
      </AnimatedItem>
    );
  }

  return (
    <AnimatedItem
      delay={0.15}
      index={1}
      duration={0.5}
      slideIn
      direction="left"
      className={classes.container}
      onClick={() => linkRef.current?.click()}
    >
      <Link
        href="https://www.google.com/maps?q=56.95610117925549,23.907324835582514"
        ref={linkRef}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      />
      <LoadScript googleMapsApiKey={mapApiKey ?? ""}>
        <GoogleMap
          center={mapCenter}
          zoom={12}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          options={{
            styles: mapCustomStyleJSON,
            disableDefaultUI: true,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker
            position={mapCenter}
            onLoad={(marker) => {
              if (typeof window !== "undefined") {
                marker.setIcon({
                  url: "/contacts/geo-alt.png",
                  scaledSize: new window.google.maps.Size(40, 40),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(20, 40),
                });
              }
            }}
          />
        </GoogleMap>
      </LoadScript>
    </AnimatedItem>
  );
}
