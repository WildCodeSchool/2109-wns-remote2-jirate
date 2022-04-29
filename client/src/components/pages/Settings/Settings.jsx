import React from 'react';
import SettingsNotifications from "./SettingsNotifications";

const Settings = props => {
    return (
        <div>
            <SettingsNotifications/>
            <Settings/>
        </div>
    );
};

Settings.propTypes = {

};

export default Settings;
