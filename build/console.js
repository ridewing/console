var Ridewing;
(function (Ridewing) {
    var Console = (function () {
        function Console() {
            this.enabled = true;
            this._color = '#4b729c';
            this._background = '#fff';
            this._divider = '----------------------------------------------------------------';
        }
        /**
        * Setup the default color and background.
        * @param color
        * @param background
        * @param divider
        */
        Console.prototype.setup = function (color, background, divider) {
            if (typeof color === "undefined") { color = this._color; }
            if (typeof background === "undefined") { background = this._background; }
            if (typeof divider === "undefined") { divider = this._divider; }
            this._color = color;
            this._background = background;
            this._divider = divider;
        };

        /**
        * Standard log function.
        * @param str
        */
        Console.prototype.log = function (str) {
            this.write(str);
        };

        /**
        * Makes the content text white with a blue background.
        * @param str
        */
        Console.prototype.info = function (str) {
            this.write(str, 'info', '#c8c8ff', '#0000ff');
        };

        /**
        * Makes the content text black with a yellow background.
        * @param str
        */
        Console.prototype.warn = function (str) {
            this.write(str, 'warn', 'black', '#ffff00');
        };

        /**
        * Makes the content text white with a red background.
        * @param str
        */
        Console.prototype.error = function (str) {
            this.write(str, 'error', '#ffc5c5', '#ff0000');
        };

        /**
        * Creates a handy divider for you in the console.
        */
        Console.prototype.divide = function () {
            this.write(this._divider, 'simple');
        };

        /**
        * Clear the console
        */
        Console.prototype.clear = function () {
            window.console.clear();
        };

        /**
        * Create a console group from object or array
        * @param name
        * @param items
        */
        Console.prototype.group = function (name, items) {
            if (!this.enabled)
                return;

            window.console.group(name);
            for (var i in items) {
                var value = items[i];

                if (typeof items == 'object')
                    value = i + ': ' + items[i];

                this.write(value, 'simple');
            }
            window.console.groupEnd();
        };

        /**
        * Internal log function to do some style and actual console log
        * @param str
        * @param type
        * @param color
        * @param background
        */
        Console.prototype.write = function (str, type, color, background) {
            if (typeof type === "undefined") { type = 'log'; }
            if (typeof color === "undefined") { color = '#4b729c;'; }
            if (typeof background === "undefined") { background = 'white'; }
            if (!this.enabled)
                return;

            if (type == 'simple')
                window.console.log('%c%s ', this.getStyle(), str);
            else
                window.console[type]('%c[%s] %c %s ', 'color:#4b729c;', this.getTimeStamp(), this.getStyle(color, background), str);
        };

        /**
        * Get current timestamp in a nice format
        * @returns {string}
        */
        Console.prototype.getTimeStamp = function () {
            var date = new Date();

            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();

            h = (h < 10) ? '0' + h : h;
            m = (m < 10) ? '0' + m : m;
            s = (s < 10) ? '0' + s : s;

            return h + ":" + m + ":" + s;
        };

        /**
        * Generate style string
        * @param color
        * @param background
        * @returns {string}
        */
        Console.prototype.getStyle = function (color, background) {
            if (typeof color === "undefined") { color = this._color; }
            if (typeof background === "undefined") { background = this._background; }
            return 'color:' + color + ';background:' + background + ';';
        };
        return Console;
    })();
    Ridewing.Console = Console;
})(Ridewing || (Ridewing = {}));
