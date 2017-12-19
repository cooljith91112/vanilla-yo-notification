// Import stylesheets
import '../styles/style.css';
import { Config } from '../interfaces/config.interface';


export default class VYN {

    private notificationTemplate: string;
    private defaultConfig: Config;
    private notifInner: any;
    private container: any;

    constructor(config: Config) {
        this.defaultConfig = {
            content: config.content ? config.content : '',
            footer: config.footer ? config.footer : '',
            timeout: config.timeout ? config.timeout : 3000,
            title: config.title ? config.title : '',
            type: config.type ? config.type : 'success',
            position: (config.position && config.position.length == 2) ? config.position : ['bottom', 'right']
        }
        this.init();
    }

    private init() {

        this.buildContainers();


    }

    buildContainers() {
        this.container = document.createElement('div');
        this.container.className = `notif-mainContainer ${this.defaultConfig.position.join('-')}`;

        this.notifInner = document.createElement('div');
        this.notifInner.className = "notif-inner";

        this.container.appendChild(this.notifInner);
        document.body.appendChild(this.container);
    }


    show(config: Config) {

        let notifContainer = document.createElement('div');
        notifContainer.className = `vanilla-yo-notification ${config.type ? config.type : this.defaultConfig.type}`;

        this.notificationTemplate = `
        <div class="notification_container">
            <div class="notification_header">
            ${config.title ? config.title : this.defaultConfig.title}
            </div>
            <div class="notification_body">
            ${config.content ? config.content : this.defaultConfig.content}
            </div>
            <div class="notification_footer">
            ${config.footer ? config.footer : this.defaultConfig.footer}
            </div>
        </div>
        `;


        notifContainer.innerHTML = (this.notificationTemplate);
        this.notifInner.appendChild(notifContainer);


        setTimeout(() => {
            notifContainer.className = notifContainer.className + ' close';
            this.destroyNotification(notifContainer);
        }, (config.timeout ? config.timeout : this.defaultConfig.timeout));


    }

    private destroyNotification(container: Node) {
        setTimeout(()=>{
            this.notifInner.removeChild(container);
        },100);
        
    }
}

