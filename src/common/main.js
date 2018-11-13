function MyExtension() {
    var self = this;
    kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function() {
        self._onCommand();
    });
}

MyExtension.prototype = {

    _onCommand: function() {
        //kango.browser.tabs.create({url: 'https://www.google.com'});
        //alert("Hello Tab");
        kango.ui.browserButton.setPopup({url:'popup.html', width: 710, height:510});
    }
};

var extension = new MyExtension();