(function(window){
    var notif = new VYN({
        position: ['bottom', 'right']
    });
    var counter = 0;
    window.showNotificationSuccess = function(){
        
        notif.show({
            title: 'Notification Title',
            content: `This is a content ${counter}`,
            timeout: 6000            
        });

        counter += 1;
    }
    window.showNotificationWarning = function(){
        
        notif.show({
            title: 'Notification Title',
            content: '<b>This is a content</b>',
            type: 'warning',
            timeout: 1000
        });
    }
    window.showNotificationError = function(){
        
        notif.show({
            title: 'Notification Title',
            content: 'This is a content with image <img src="64x64.png"/>',
            type: 'error',
            timeout: 2000
        });
    }




})(window);