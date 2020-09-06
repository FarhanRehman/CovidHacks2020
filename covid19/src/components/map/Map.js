import React from "react";
import styles from './map.module.css';
import {Map as LeafletMap, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Circle, Popup} from 'react-leaflet';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';


function Map() {
    return (
        <div className={styles.mapL}>
            <LeafletMap className={styles.leafletContainer} center={[43.6532, -79.3832]} zoom={5} minZoom={5} maxZoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/">OpenStreetMap</a> contributors'/>
                <Circle
                    center={[43.6532, -79.3832]}
                    fillOpacity={0.8}
                    color="blue"
                    fillColor="blue"
                    radius= {109900}>
                    <Popup className={styles.popUp}>
                        <div className={styles.info__container}>
                            <div className={styles.info__eventName}>Grocery</div>
                            <div className={styles.info__place}>"Usa, Toronto "</div>
                            <Link to="/register"><Button className={styles.volunteerBtn}>
                                volunteer
                            </Button></Link>
                        </div>
                    </Popup>
                </Circle>
            </LeafletMap>
        </div>
    );
}

export default Map;