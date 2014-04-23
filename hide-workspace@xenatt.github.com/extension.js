const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Lang = imports.lang;
const Main = imports.ui.main;
const St = imports.gi.St;

const Me = imports.misc.extensionUtils.getCurrentExtension();

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
        return true;
    },

    _showThumbnails: function() {
        return true;
    }

});

function init() {
    return new hideVisible();
}

