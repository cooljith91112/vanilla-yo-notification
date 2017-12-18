// Import stylesheets
import './styles/style.css';
import { Config } from './config.interface';

export default class VanillaYoNotification {

    private notificationTemplate: string;
    private defaultConfig: Config;
    private notifInner: any;

    constructor() {
        this.defaultConfig = {
            content: '',
            footer: '',
            timeout: 3000,
            title: ''
        }
        this.init();
    }

    private init() {

        this.buildContainers();
        
        
    }

    buildContainers(){
        let container = document.createElement('div');
        container.className = "notif-mainContainer topRight";

        this.notifInner = document.createElement('div');
        this.notifInner.className = "notif-inner";

        container.appendChild(this.notifInner);
        document.body.appendChild(container);   
    }


    show(config: Config) {

        let notifContainer = document.createElement('div');
        notifContainer.className = "vanilla-yo-notification";


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
            this.destroyNotification(notifContainer);
        }, (config.timeout ? config.timeout : this.defaultConfig.timeout));

        
    }

    private destroyNotification(container: Node) {
        this.notifInner.removeChild(container);
    }
}

