(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=require("./src/manager.js");
},{"./src/manager.js":27}],2:[function(require,module,exports){
module.exports=";Level 1 - Gold and Exit\n\n ###############    , Game Elements:\n #             #\n # $         $ #    , @ - player\n #             #    , # - wall (cannot be moved or destroyed)\n #      @      #    , $ - gold\n #             #    , x - exit (you need to collect all gold to exit level)\n # $         $ #\n #      x      #\n ###############\n\n";

},{}],3:[function(require,module,exports){
module.exports=";Level 2 - Rocks\n\n ###############    , Elements:\n #          O  #\n # OO       O$ #    ,  @ - player\n # O$O      OOO#    ,  # - wall (cannot be moved or destroyed)\n # OO   @  #####    ;  O - movable rock, you can push it\n # #############    ,  $ - gold\n #      O    $ #    ,  x - exit (you need to collect all gold to exit level)\n #     OxO     #\n ###############\n";

},{}],4:[function(require,module,exports){
module.exports=";Level 3 - Dynamite\n\n ###############    , Elements:\n #    O        #\n # @  ###### ###    ,  @ - player\n #    #        #    ,  # - wall (cannot be moved or destroyed)\n #    #  h   h #    ,  O - movable rock (you can push it)\n ##########O####    ,  $ - gold\n #$O   x       #    ;  h - dynamite (destroys rocks)\n #O$       $   #    ,  x - exit (you need to collect all gold to exit level)\n ###############\n";

},{}],5:[function(require,module,exports){
module.exports=";Level 4 - The Show Starts\n\n #########    ,Tips:\n #@   #O$#\n #    O  #    ,You can use the UnDo key ('u' by default) to undo any move\n #hh  #  #    ,To restart level, just hold 'u' until it goes back to start\n # $h #x #\n #########\n";

},{}],6:[function(require,module,exports){
module.exports=";Level 5 - The Triangle\n\n #############\n #         h #\n # @       h #\n #     O   h #    ,Tips:\n #    OOO  $h#\n #   OOO O   #    ,You can use the Quit key ('q' by default)\n #  OO OOOO  #    ,to exit the current game at any time\n # OOOOxOO O #\n #############\n";

},{}],7:[function(require,module,exports){
module.exports=";Level 6 - Moving along\n\n #####\n #   #\n # @ #########\n #    O O O$ #\n #O    O O O #\n #$O    O O O#\n #O O    O O #\n #$O O    O O#\n #O O O    O #\n # x O O    O#\n #############\n";

},{}],8:[function(require,module,exports){
module.exports=";Level 7 - Duality\n\n #############\n #   #$    #$#\n # @ ## ## # #\n #   h       #    ,Tip:\n # @ #######O#\n #   #$ O  # #    ,You can use the player switch key (TAB by default)\n #####  O  # #    ,to change the active player\n #    O###O# #\n # x         #\n #############\n";

},{}],9:[function(require,module,exports){
module.exports=";Level 8 - Traps and Treasure\n\n ########\n #      #\n # @    #########\n ###### #O $#   #\n #    # O   O   #\n # x  #$#$$O#$O$#\n ####O#######$###\n #   O $#$  #   #\n #O$O O #$  #   #\n #$O   O#   O   #\n #O O   #h##### #\n #$O OO    O O  #\n #O     #O  O   #\n ################\n";

},{}],10:[function(require,module,exports){
module.exports=";Level 9 - Cooperation\n\n ################\n #@  O O O      #\n #  O O   $  h  #\n # O O O h O### #\n ##  ########$O #\n #@O$#  $$$#@ O #\n #####  OOO#### #\n #$  OOO   OOOO ###\n #x     O  O O    #\n ##################\n";

},{}],11:[function(require,module,exports){
module.exports=";Level 10 - Golden Age\n\n ##################\n # h   # #     $ $#\n #   #  x#  h   O #\n ###h#########O####    ,Tip:\n #$ O   $ $$  O   #\n #O$O  #O O O O   #    ,Dynamite can destroy rocks\n ########O######  #    ,and another dynamite piece\n #   #  O  $O h ###\n # @   $O $       #\n ##################\n\n";

},{}],12:[function(require,module,exports){
module.exports=";Level 11 - Story of a lifetime\n\n ##################\n # O$O O O O O$O O#\n #O O O O O O O O$#\n # O O O O OxO O O#\n #O O O O O O O O #\n # O O O O O O O O#\n #O O O O@O O O O #\n # O$O O O O O O O#\n #O O O O O O O$O #\n ##################\n\n";

},{}],13:[function(require,module,exports){
module.exports=";Level 12 - In the Mine\n\n ############\n #$   O  O  #\n ## #  #  # #\n #$ # O O h #\n #  # # # # #\n #$ h # #$#$#\n ## # # #####\n #$   #  @ x#\n ############\n";

},{}],14:[function(require,module,exports){
module.exports=";Level 13 - Warm-up\n\n ###\n #@###########################    , Author:\n #O O  O$  $O O  O  $O$O O O$#    , Zear\n #  O   hO OOOh O$O O O$  $$O#    , zeartul(at)gmail(dot)com\n #O OO$OOOOOO$O$ O  O O$  OO #\n # O  OO$ OO O  O   O $  O$hO#\n #$$OO$    O    $O$O  OO$O$ $#\n #$OOOO$O OO##O##OOOOOOOOOOO$#\n #O$O$OOOO$$#   #O$O$OOO$O$OO#\n #$   $O $  O $ O  OO   O O  #\n # h  O$O  O#   # O O OO$  O #\n #O OOO $ O$##O## O$    O$  $#\n # O$ O O  O O $ O   OO$O$ O #\n # O$  $  OOO$ O  OOhO$O$O O #\n #OOOOO  OOO$OO  $O$ $O$O   h#\n #$$O $O $O$Oh   OOO$ $ $ O $#\n ###########################x#\n                           ###\n";

},{}],15:[function(require,module,exports){
module.exports=";Level 14 - To and fro\n\n                 ###\n                 #x#\n #################@#################    ,Author:\n #$ O $O $  O   $OO O$O$$$O    h   #    ,Zear\n #  $  #Oh  OOO OO OO$#### O $O$OOO#    ,zeartul(at)gmail(dot)com\n # $O$ #$   O$O    $ O$O  $$ $O$   #\n # O$O #OOO######O    $#O$O OOOO OO#\n # $O$ OO O      $O#####OOO$$OO  $ #\n # O$O $O #OOOOOO$O  $  O   #$  $  #\n # $O$    #$   O  O $ O#OOO$# O$# O#\n #  $O   $### OOO##### #$$  #O O$O$#\n #OOO#$   #          OO    $#$O$O$O#\n #   #h O $  $$O$OO$OO  OOO###$O O$#\n #O O#OOO##OOOO######### $ OO$     #\n # O  O$O$$O    $ $O  $#OOOO O$O$OO#\n #  O  O    $$OO$O  O $ $$$O     $$#\n ###################################\n";

},{}],16:[function(require,module,exports){
module.exports=";Level 15 - Little by little\n\n ########################    ,Author:\n #xO O $O  OOOO  O  $O$$#    ,Zear\n ## O$O  OOOOO$O  O   O #    ,zeartul(at)gmail(dot)com\n  #O O O   O $O OO$O OOO#\n  #$O OO$  OO  OO O$OO$ #    \n  # O  O    OOO$ OOO O  #  \n  #$O  $O OO     O $  O$#   \n  #O$$   O OOOOOO O$O   #\n  # OOO$$O   $OO    O O$#\n ##O$O OOO $OO O$O  OOhO#\n #@ O $   O  $OO O     $#\n ########################\n";

},{}],17:[function(require,module,exports){
module.exports=";                         The Break in!\n;                       By: Dopefish7590\n;            Having a messy yard doesn't mean you are lazy;\n;               It means that your house is hard to rob\n;                          Regardless...\n;      Don't be fooled! this level is much easier than it looks\n\n ###############################################################\n #@# #    #               #               OO         O  #   O  #\n #  #          #     #     #  #  h h h h  OO             O  #  #\n # # #      O      #   # O   # ## ###################  #  #    #\n #  #   #  #     #    #    #  #  ## $$   #          #   O  O   #\n # # #                            #    $ #          # O #  #   #\n #  #     O     O     O     O     #####O##          #    O#  O #\n##                         O      O$                # # O   h  #\n#x                  O     O   O   O$                #  #  O    #\n##  #     O     O     O     O     ##############    # O #  O   #\n # # #              #             #$$$$$$$#         #   O O  O #\n #  #         O   O      #  # #   #$$$$$$$O         #  #   O   #\n # # ####O###   #   # O   #    #  #$$$$$$$#         ##  O  O   #\n #  ## $$$h #     #   #    O #  O ###################    # O   #\n # # #      #    #       # #  #                       O   O O  #\n #  #########      #  O #   # O             #     #     # O  # #\n # # #$$O        #       #        #         #        #     #   #\n ###############################################################\n";

},{}],18:[function(require,module,exports){
module.exports=";                  The Great Escape!\n;                  By: Dopefish7590\n\n#####################################################\n# @  #         #   #    #   #    #O                 #\n#    # h  #    #   # h  O  O#    O ##############   #\n### ###O#### ###   ### ### ### ### # $ $ $ $    #   #\n#              O$  O    O  O     # #  h h h    O#   #\n### ### #### ###   ### ### ### ### # h h h h  O #   #\n#    O  h #    #   #  h #        # ########O#O  #   #\n#    #    #    #   #    O O #    # ######## #   #   #\n#################O################          # O #   #\n#   #          # $$O                #########O  #   #\n# h #      h   #   ##########################   #   #\n#   #    h     #   O   O O O      O       O     #   #\n#   #     h    #   #     O   O O   O   O   O    #   #\n#   #   h      #OO###############################   #\n#  $O     h    #OO##          O  O      O O   O     #\n#   #          OOO##           OO  O  O    O O      #\n#   #  ############## #####O########O#########O######\n#   #                   ###O#####      ###$ $ $ $   #\n#   #                   ###O#####  h h ### $ $ $ $  #\n##O#################O######O##### h h  ###  $ $ $ $ #\n##$                 $######O#####      ###   $ $ $ $#\n###########################O#########################\n                       #       #\n                       #       #\n                       #       #\n                       #       #\n                       #xxxxxxx#\n                         \n";

},{}],19:[function(require,module,exports){
module.exports=";                               The one road\n;                              By: Dopefish7590\n;          Remember you have 2 players to use, use them wisely... ;)\n\n\n #################################################\n #$#              O   $    O              O      #\n #O     $  ##########################     #### h #\n #  OOO             O $  O   O  O            #   #                        ###\n #   O  #       ## ################$$$$#     #####                        #@#\n #   O  #  OOO #$O     h   OO O$  $#####         ########################## #\n##h# O  #OO$OO  ## #######O #  OOOO  O #O#####     h h h  ######  $ OO      ##\n#xhh O  #$OO$Oh## O  h   O h$O      O  O  O$$$#   h h h h  OO h   $ OO hhh  $#\n##h# O  #OO$OO  ## #####O##O#h  O  O  O#######     h h h  ######  $ OO      ##\n #   O  #  OOO #$O     O       O$h #####         ########################## #\n #   O  #       ## ################$$$$#     #####                        #@#\n #  OOO               O $O  O O              #   #                        ###\n #O     $  ##########################     #### h #\n #$#             O    $       O           O      #\n #################################################\n";

},{}],20:[function(require,module,exports){
module.exports=';Level 19 - Coffee break\n\n ###############    ,Author:\n #     O$O    $#    ,Artur "Zear" Rojek\n #O$O OO@OO O O#    ,zeartul(at)gmail(dot)com\n #$O O OOO O O$#\n ## # # # # # ##\n # O O O OOO OO#\n #O O O O O O O#\n #$O$O OO $O O$#\n #O O $ O$O$O$O#\n #$$$OOO O   O #\n #OO $O  $ OO O#\n # O O$O   O$$ #\n # $ OO OOOO$  #\n #$  $ $x $ O $#\n ###############\n          \n \n';

},{}],21:[function(require,module,exports){
/*global define:false */
/**
 * Copyright 2015 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.5.3
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {
        _MAP[i + 96] = i;
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Mousetrap;
        });
    }
}) (window, document);

},{}],22:[function(require,module,exports){
function copy(){oldboard=[];for(var r=0;height>r;r++){oldboard.push([]);for(var e=0;e<board[r].length;e++)oldboard[r][e]=board[r][e]}}function init(r){width=0,won=!1,players=[],oldcuri=-1,curi=0,goldLeft=0,board=[],oldboard=[],history=[],height=r.length;for(var e=0;height>e;e++){width=width>r[e].length?width:r[e].length;for(var a=0;a<r[e].length;a++)r[e][a]===PLAYER?players.push([e,a]):r[e][a]===GOLD&&goldLeft++}board=r,copy(),update()}function move(r){if(copy(),oldcuri=curi,r===UNDO){if(0===history.length)return!1;var e=history.pop();return e.key===CHANGE?(curi=e.curi,!0):(players[e.curi]=[e.curr,e.curc],board[e.curr][e.curc]=PLAYER,board[e.adjr][e.adjc]=e.adj,board[e.nextToAdjr][e.nextToAdjc]=e.nextToAdj,!0)}if(r===CHANGE)return history.push({key:r,curi:curi}),curi++,curi%=players.length,!0;var a,o,t,i,d,n,c=players[curi][0],l=players[curi][1];if(r===UP?(t=c-1,i=l,d=c-2,n=l):r===LEFT?(t=c,i=l-1,d=c,n=l-2):r===DOWN?(t=c+1,i=l,d=c+2,n=l):r===RIGHT&&(t=c,i=l+1,d=c,n=l+2),a=board[t][i],o=board[d][n],a===WALL||a===PLAYER)return!1;if(a===STONE)if(o===EMPTY)board[d][n]=STONE;else{if(o!==DYNAMITE)return!1;board[d][n]=EMPTY}else if(a===GOLD)goldLeft--;else if(a===DYNAMITE)if(o===EMPTY)board[d][n]=DYNAMITE;else{if(o!==STONE&&o!==DYNAMITE)return!1;board[d][n]=EMPTY}else{if(a===EXIT&&goldLeft>0)return!1;if(a===EXIT)return won=!0,!0}return board[c][l]=EMPTY,board[t][i]=PLAYER,players[curi]=[t,i],history.push({key:r,curi:curi,curr:c,curc:l,adjr:t,adjc:i,nextToAdjr:d,nextToAdjc:n,adj:a,nextToAdj:o}),!0}function elementPrinter(r){var e;switch(r){case PLAYER:e="player";break;case GOLD:e="gold";break;case DYNAMITE:e="dynamite";break;case STONE:e="stone";break;case WALL:e="wall";break;case EXIT:e="exit";break;case EMPTY:e="empty",r="&nbsp;"}return{className:e,element:r}}function update(){if(curi!==oldcuri)return-1!==oldcuri&&(document.getElementById(players[oldcuri][0]+","+players[oldcuri][1]).className="player"),void(document.getElementById(players[curi][0]+","+players[curi][1]).className="active-player");for(var r=0;height>r;r++)for(var e=0;width>e;e++)if(board[r][e]!==oldboard[r][e]){var a=elementPrinter(board[r][e]);r===players[curi][0]&&e===players[curi][1]&&(a.className="active-player");var o=document.getElementById(r+","+e);o.className=a.className,o.innerHTML=a.element}}function hasWon(){return won}require("./constants.js");var board=[],oldboard=[],history=[],width,height,players=[],oldcuri=-1,curi=0,goldLeft=0,won=!1;module.exports={init:init,move:move,update:update,hasWon:hasWon,elementPrinter:elementPrinter};

},{"./constants.js":23}],23:[function(require,module,exports){
window.UP="up",window.LEFT="left",window.DOWN="down",window.RIGHT="right",window.CHANGE="tab",window.UNDO="u",window.PLAYER="@",window.EMPTY=" ",window.GOLD="$",window.DYNAMITE="h",window.STONE="O",window.WALL="#",window.EXIT="x";

},{}],24:[function(require,module,exports){
module.exports=["Level 01 - Gold and Exit","Level 02 - Rocks","Level 03 - Dynamite","Level 04 - The Show Starts","Level 05 - The Triangle","Level 06 - Moving along","Level 07 - Duality","Level 08 - Traps and Treasure","Level 09 - Cooperation","Level 10 - Golden Age","Level 11 - Story of a lifetime","Level 12 - In the Mine","Level 13 - Warm-up","Level 14 - To and fro","Level 15 - Little by little","Level 16 - The break in","Level 17 - The great escape","Level 18 - The one road","Level 19 - Coffee Break"];

},{}],25:[function(require,module,exports){
module.exports=[require("../levels/Level 01 - Gold and Exit.txt"),require("../levels/Level 02 - Rocks.txt"),require("../levels/Level 03 - Dynamite.txt"),require("../levels/Level 04 - The Show Starts.txt"),require("../levels/Level 05 - The Triangle.txt"),require("../levels/Level 06 - Moving along.txt"),require("../levels/Level 07 - Duality.txt"),require("../levels/Level 08 - Traps and Treasure.txt"),require("../levels/Level 09 - Cooperation.txt"),require("../levels/Level 10 - Golden Age.txt"),require("../levels/Level 11 - Story of a lifetime.txt"),require("../levels/Level 12 - In the Mine.txt"),require("../levels/Level 13 - Warm-up.txt"),require("../levels/Level 14 - To and fro.txt"),require("../levels/Level 15 - Little by little.txt"),require("../levels/Level 16 - The break in.txt"),require("../levels/Level 17 - The great escape.txt"),require("../levels/Level 18 - The one road.txt"),require("../levels/Level 19 - Coffee Break.txt")];

},{"../levels/Level 01 - Gold and Exit.txt":2,"../levels/Level 02 - Rocks.txt":3,"../levels/Level 03 - Dynamite.txt":4,"../levels/Level 04 - The Show Starts.txt":5,"../levels/Level 05 - The Triangle.txt":6,"../levels/Level 06 - Moving along.txt":7,"../levels/Level 07 - Duality.txt":8,"../levels/Level 08 - Traps and Treasure.txt":9,"../levels/Level 09 - Cooperation.txt":10,"../levels/Level 10 - Golden Age.txt":11,"../levels/Level 11 - Story of a lifetime.txt":12,"../levels/Level 12 - In the Mine.txt":13,"../levels/Level 13 - Warm-up.txt":14,"../levels/Level 14 - To and fro.txt":15,"../levels/Level 15 - Little by little.txt":16,"../levels/Level 16 - The break in.txt":17,"../levels/Level 17 - The great escape.txt":18,"../levels/Level 18 - The one road.txt":19,"../levels/Level 19 - Coffee Break.txt":20}],26:[function(require,module,exports){
function loadLevel(e){var r=levels[e];r=r.split("\n");for(var l=!1,n=[],s=0,a="",t=0;t<r.length;t++){""===r[t]&&(l=!0);var i=0;if(l){var o=[];for(i=0;i<r[t].length&&(";"!==r[t][i]&&","!==r[t][i]);i++){o.push(r[t][i]);var v=elementPrinter(r[t][i]);a+='<span class="'+v.className+'" id="'+s+","+i+'">'+v.element+"</span>"}s++,n.push(o)}a+='<span class = "text ',";"===r[t][i]&&(a+="bold"),a+='">',a+=r[t].substr(i+1).replace(/\ /g,"&nbsp;"),a+="</span><br />"}return document.getElementById("game-container").innerHTML=a,n}var levels=require("./levels.js"),elementPrinter=require("./board.js").elementPrinter;module.exports=loadLevel;

},{"./board.js":22,"./levels.js":25}],27:[function(require,module,exports){
function toggleMenu(){gameShown?(document.getElementById("levels-button").innerHTML="Close Menu",document.getElementById("levels-container").style.display="block",document.getElementById("game-container").style.display="none"):(document.getElementById("levels-button").innerHTML="Menu",document.getElementById("game-container").style.display="block",document.getElementById("levels-container").style.display="none"),gameShown=!gameShown}var Mousetrap=require("mousetrap"),board=require("./board.js"),loadLevel=require("./loadLevel.js"),levelNames=require("./levelNames.js"),currentLevel=0,gameShown=!0;Mousetrap.bind([UP,LEFT,DOWN,RIGHT,CHANGE,UNDO],function(e,n){gameShown&&(e.preventDefault(),board.move(n)&&board.update(),board.hasWon()&&(currentLevel++,board.init(loadLevel(currentLevel))))}),board.init(loadLevel(0)),window.toLevel=function(e){currentLevel=e,board.init(loadLevel(e)),toggleMenu()};for(var i=0;i<levelNames.length;i++)document.getElementById("levels-container").innerHTML+='<button onclick="toLevel('+i+')">'+levelNames[i]+"</button>";document.getElementById("levels-button").onclick=toggleMenu,document.getElementById("controls-button").onclick=function(){alert("Arrow Keys - Movement\nu - Undo\nTab - Switch Player")};

},{"./board.js":22,"./levelNames.js":24,"./loadLevel.js":26,"mousetrap":21}]},{},[1]);
