import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    apiEndpoint: string;
    localData: boolean;
    localPath: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: 'http://localhost:5000/api',
    localData: true,
    localPath: 'assets/localData'
    // https://server.driversprite.com/api
    // http://localhost:5000/api
};


export class NotificationSetting {
    public static notificationCarpoolSetting = {
        position: ['top', 'right'],
        timeOut: 4000,
        lastOnBottom: true,
        animate: 'fromRight',
        clickToClose: true,
        pauseOnHover: false,
        showProgressBar: true,
        maxLength: 10,
    };
}