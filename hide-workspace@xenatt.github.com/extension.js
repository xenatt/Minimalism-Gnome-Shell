const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Lang = imports.lang;
const Main = imports.ui.main;
const St = imports.gi.St;


const hideVisible = new Lang.Class({
    Name: 'hideWorkspace.hideVisible',
    
    _init: function() {
        return true;
    },

    enable: function() {
        this._hideThumbnails();
    },

    disable: function() {
        this._showThumbnails();
    },

    _hideThumbnails: function() {

        //Thank Api code from Charlie MacEntyre  passingthure67@gmail.com
        Main.overview._controls._thumbnailsSlider.actor.opacity = 0;
        return true;
    },

    _showThumbnails: function() {
        Main.overview._controls._thumbnailsSlider.actor.opacity = 255;
        return true;
    }

});

function init() {
    return new hideVisible();
}

