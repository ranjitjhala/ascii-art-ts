/*
 __  __
/\ \/\ \
\ \ \_\ \    ___     ___   _ __    __     __  __
 \ \  _  \  / __`\  / __`\/\`'__\/'__`\  /\ \/\ \
  \ \ \ \ \/\ \L\ \/\ \L\ \ \ \//\ \L\.\_\ \ \_\ \
   \ \_\ \_\ \____/\ \____/\ \_\\ \__/.\_\\/`____ \
    \/_/\/_/\/___/  \/___/  \/_/ \/__/\/_/ `/___/> \
                                              /\___/
                                              \/__/
*/

/// <reference path="../typings/figlet.d.ts" />

import figlet = require('figlet');

declare var atom : any; //AtomCore.IAtom;

function convert(){
  var editor    = atom.workspace.getActivePaneItem();
  var selection = editor.getLastSelection();
  var text      = selection.getText();
  figlet(selection.getText(), {font : "Larry 3D 2"}, function(error, asciiArt){
      if (error)
        console.error(error)
      else {
        var out = "\n" + asciiArt + "\n";
        selection.insertText(out);
      }

  });
}

export function activate(){
    atom.commands.add('atom-workspace', "ascii-art-ts:convert", convert);
}
