import React from "react";
import styles from './map.module.css';
import {Map as LeafletMap, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Circle, Popup} from 'react-leaflet';


function Map() {
    return (
        <div className={styles.mapL}>
            <LeafletMap className={styles.leafletContainer} center={[0, 0]} zoom={3} minZoom={2.5}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/">OpenStreetMap</a> contributors'/>
                <Circle
                    center={[27.5142, 90.4336]}
                    fillOpacity={0.8}
                    color="blue"
                    fillColor="blue"
                    radius= {109900}>
                    <Popup>
                        <div className="info__container">
                            <div className='info__eventName'>Grocery</div>
                            <div className="info__name">"Bhutan"</div>
                        </div>
                    </Popup>
                </Circle>
            </LeafletMap>
        </div>
    );
}

export default Map;