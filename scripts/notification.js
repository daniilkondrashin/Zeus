document.addEventListener("DOMContentLoaded", function () {
    const GLASSPROTECT_NOTIFICATION = document.querySelector('#GlassProtect_notification');
    const SPACECONTROL_NOTIFICATION = document.querySelector('#SpaceControl_notification');
    //  В эти переменные подставляется количество уведомлений для каждого устройства
    var glassprotectNotificationNum = 0;
    var spacecontrolNotificationNum = 1000;

    if (glassprotectNotificationNum === 0) {
        GLASSPROTECT_NOTIFICATION.style.display = 'none';
    } else {
        GLASSPROTECT_NOTIFICATION.style.display = 'flex';
    }
    if (spacecontrolNotificationNum === 0) {
        SPACECONTROL_NOTIFICATION.style.display = 'none';
    } else {
        SPACECONTROL_NOTIFICATION.style.display = 'flex';
    }
    if (glassprotectNotificationNum > 999) {
        GLASSPROTECT_NOTIFICATION.innerHTML = '+999';
    } else {
        GLASSPROTECT_NOTIFICATION.innerHTML = glassprotectNotificationNum;
    }
    if (spacecontrolNotificationNum > 999) {
        SPACECONTROL_NOTIFICATION.innerHTML = '+999';
    } else {
        SPACECONTROL_NOTIFICATION.innerHTML = spacecontrolNotificationNum;
    }
})
