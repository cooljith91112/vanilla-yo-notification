VYN
===================


**Vanilla-Yo-Notification(VYN)** is a light-weight **ES6** compatible **javascript** growl like notification library (JQuery Free).

----------

Installation
-------------

>You have the following options to get **VYN**

> - Clone the repo to get all source files including build scripts: 
	>``` git clone https://bitbucket.org/indrajithkl/vanilla-yo-notification```
> - Download directly from bitbucket
> ``` https://bitbucket.org/indrajithkl/vanilla-yo-notification/downloads/```

what ever you can find the compiled file in the dist folder. Since VYN is ES6 compatible you can import it into any js files and can be included in the html script tag.

Usage
--------
You can initialize VYN via Javascript using
```
// javascript
var vyn = new VYN();
```
There is an optional parameter for the constructor for positioning the notification.

example : 
```
var vyn = new VYN({
			position: ['top','right']
		  });
```
default values for position is **['bottom', 'right']**

So to show a notification using VYN you can now use the instance of VYN.
like
```
vyn.show({
	title: 'Notification Title',
	content: 'Hi this is a message',
});
```

VYN supports three types of notifications **success**, **warning** & **error**. Each has similar function signature and expects a configuration object as parameter.

### Config
Config is a javascript literal should be of the following format.
``` json
{
    title: string,
    content: string,    
    footer: string(optional),
    type: string,
    position: string array,
    timeout: number in millisecond
}

```

### title : string
title field is a string property, which is supposed to be the title of the notification.

### content: string
content is the message which should be the main content of the notification. You can also specify html as a content but should be in string format. 

### footer: string
footer filed is the content which comes below the bottom of the notification. This is an optional field.

### type: string
type filed expects the following string as its value **'success', 'warning' & 'error'**. Default value is '**success'**.

### position: Array
position filed expects an array of two values. This determines where the notification should be shown. The possible values are **'top', 'bottom', 'left', 'right'**

### timeout: number
number filed is the one which determines how much time notification should be visible. It expects time in **milliseconds**. Default value is *6000ms(6s)*


### Support ME

[![](https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0)](https://ko-fi.com/R6R36EBQ)