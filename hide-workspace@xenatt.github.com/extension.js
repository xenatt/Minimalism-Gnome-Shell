const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Lang = imports.lang;
const Main = imports.ui.main;
const ThumbnailsSlider = imports.ui.overviewControls.ThumbnailsSlider.prototype; 

function init() {
    return new hideVisible();
}

const hideVisible = new Lang.Class({
    Name: 'hideWorkspace.hideVisible',
    
    _init: function() {
        //old solution
        //thumbnailsBoxOp = Main.overview._controls._thumbnailsSlider.actor.opacity;
        tmp_getAlwaysZoomOut = ThumbnailsSlider._getAlwaysZoomOut;
    },

    enable: function() {
        ThumbnailsSlider._getAlwaysZoomOut = function () { return false; }
    },

    disable: function() {
        ThumbnailsSlider._getAlwaysZoomOut = tmp_getAlwaysZoomOut;
    }
});
