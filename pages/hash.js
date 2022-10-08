import styles from '../styles/Hash.module.css'
import React, { useState } from "react";
import md5 from 'md5';

export default function Hash() {

    const [latitude1, setLatitude1] = useState('');
    const [latitude2, setLatitude2] = useState('');
    const [latitude3, setLatitude3] = useState('');
    const [longitude1, setLongitude1] = useState('');
    const [longitude2, setLongitude2] = useState('');
    const [longitude3, setLongitude3] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        console.log('latitude1', latitude1);
        console.log('latitude2', latitude2);
        console.log('latitude3', latitude3);
        console.log(md5(latitude1));
        alert("This is your hash: " + md5(latitude1+latitude2+latitude3+longitude1+longitude2+longitude3));
        //setLatitude1('');
        //setLatitude2('');
      };

    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Hash Page</h1>
            <div className={styles.main}>
                <label>
                <h3>Latitude</h3>
                    <input className={styles.input}
                    onChange={event => setLatitude1(event.target.value)}
                    value={latitude1}
                    name="latitude1"
                    label="latitude1"
                    type="number"
                    required />
                </label>
                <label>
                <h3>Longitude</h3>
                    <input className={styles.input}
                    onChange={event => setLongitude1(event.target.value)}
                    value={longitude1}
                    name="longitude1"
                    label="longitude1"
                    type="number"
                    required />
                </label>
                <label>
                <h3>Latitude</h3>
                    <input className={styles.input}
                    onChange={event => setLatitude2(event.target.value)}
                    value={latitude2}
                    name="latitude2"
                    label="latitude2"
                    type="number"
                    required />
                </label>
                <label>
                <h3>Longitude</h3>
                    <input className={styles.input}
                    onChange={event => setLongitude2(event.target.value)}
                    value={longitude2}
                    name="longitude2"
                    label="longitude2"
                    type="number"
                    required />
                </label>
                <label>
                <h3>Latitude</h3>
                    <input className={styles.input}
                    onChange={event => setLatitude3(event.target.value)}
                    value={latitude3}
                    name="latitude3"
                    label="latitude3"
                    type="number"
                    required />
                </label>
                <label>
                <h3>Longitude</h3>
                    <input className={styles.input}
                    onChange={event => setLongitude3(event.target.value)}
                    value={longitude3}
                    name="longitude3"
                    label="longitude3"
                    type="number"
                    required />
                </label>
                
            </div>
            <button type="Submit">Create Hash...</button>                                                                                                                       

            </form>
        </div>
    )
}