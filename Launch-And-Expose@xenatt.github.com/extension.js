const Gio = imports.gi.Gio;
const St = imports.gi.St;
const Main = imports.ui.main;
const Layout = imports.ui.layout;
const Overview = imports.ui.overview;
const overviewControls = imports.ui.overviewControls;
const Lang = imports.lang;
const Shell = imports.gi.Shell;
const panel = imports.ui.panel;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();


//icons in [extension folder]/img you can replace with same name
//I will write option later.


const expose_iconPath = Me.path + '/img/windowslist.svg';
const lanchpad_iconPath = Me.path + '/img/logo.svg';
let lanchpad_button, expose_button, rb_index;


//I try to write code with New Lang({}) style but wont work.
//I will find solution later.
//I need more infomation.
//I must reserach more.


function init() {
    init_launchpad();
    init_expose();
}

function enable() {
    enable_lanchpad();
    enable_expose();
}

function disable() {
    disable_lanchpad();
    disable_expose();

}
function init_expose() {

    expose_button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: true,
                          track_hover: true }); 
    let expose_icon = new St.Icon({ 
                          gicon: Gio.icon_new_for_string(expose_iconPath),
                          style_class: 'system-status-icon'});
    expose_button.set_child(expose_icon);
    expose_button.connect('button-press-event', function(){ 
      if (!Main.overview.visible) {
        Main.overview.toggle();
      } else { 
        if (Main.overview.viewSelector._showAppsButton.checked) {
            Main.overview.viewSelector._showAppsButton.checked = false;
        } else {
              Main.overview.toggle();
        } 
      }
    }); 
}
function enable_expose() {
    rb_index = Main.panel._rightBox.get_children();
    Main.panel._rightBox.insert_child_at_index(expose_button, rb_index.length +1);
}
function disable_expose() {
    Main.panel._rightBox.remove_child(expose_button);
}
function init_launchpad() {
      lanchpad_button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: true,
                          track_hover: true }); 
    let lanchpad_icon = new St.Icon({ 
                            gicon: Gio.icon_new_for_string(lanchpad_iconPath),
                            style_class: 'system-status-icon' });
    lanchpad_button.set_child(lanchpad_icon);
    lanchpad_button.connect('button-press-event', function(){ 
      if (!Main.overview.visible) {
        Main.overview.toggle();Main.overview.viewSelector._showAppsButton.checked = true;
      } else { 
        if (Main.overview.viewSelector._showAppsButton.checked) {
            Main.overview.viewSelector._showAppsButton.checked = false;
            Main.overview.toggle();
        } else {
              Main.overview.viewSelector._showAppsButton.checked = true;
        } 
      }
    }); 
}
function enable_lanchpad() {
    Main.panel._leftBox.insert_child_at_index(lanchpad_button, 0);
    activitiesButton = Main.panel.statusArea['activities'];
    activitiesButton.container.hide();
}
function disable_lanchpad() {
    Main.panel._leftBox.remove_child(lanchpad_button);
    activitiesButton.container.show();
}
