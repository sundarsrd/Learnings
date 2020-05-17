//jshint esversion:6
/**
 * Note: jshints directives are used to manage dev.time lint hints, warnings while using editors like VSCode
 * ---------
 * Jitsi integration is done following instructions from multiple sources
 * https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe
 * https://gitee.com/wazsq/hainan_videos/raw/master/doc/api.md
 * https://community.jitsi.org/t/examples-of-jitsi-webpage-integration-setting-room-name/21560/2
 * https://meetrix.io/blog/webrtc/integrate-jitsi-meet-to-react-app.html   
 * ----------
 * Creating a web-app using jitsi
 */
let api;
//
(function () {
    let domain = 'meet.jit.si';
    const options = {
        roomName: 'RoomForSUSU',
        width: 700,
        height: 700,
        parentNode: document.querySelector('#meet'),
        devices: {
            audioInput: '<deviceLabel>',
            audioOutput: '<deviceLabel>',
            videoInput: '<deviceLabel>'
        },
        userInfo: {
            email: 'email@jitsiexamplemail.com',
            displayName: 'John Doe'
        }
    };
    api = new JitsiMeetExternalAPI(domain, options);
    // set document events
    document.onclose = close_conference;
})();

/**
 * close_conference is used to close the current conference gracefully, when the window is closed (& when users are done with the conference)
 * close_conference uses the api object
 */
function close_conference() {
    // params is the jitsi api object
    if (api != null && api != undefined) {
        console.log(api);
        alert("on close!");
        api.dispose();
    }
}