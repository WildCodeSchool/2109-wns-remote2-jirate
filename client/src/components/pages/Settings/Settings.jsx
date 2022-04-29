import React from 'react';
import SettingsNotifications from "./SettingsNotifications";
import SettingsPassword from "./SettingsPassword";

const Settings = props => {
    return (
        <div>
            <SettingsNotifications/>
            <SettingsPassword/>
        </div>
    );
};

Settings.propTypes = {

};

export default Settings;
