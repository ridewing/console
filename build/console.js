var Ridewing;
(function (Ridewing) {
    var Console = (function () {
        function Console() {
            this.enabled = true;
            this._color = '#4b729c';
            this._background = '#fff';
            this._divider = '----------------------------------------------------------------';
        }
        Console.prototype.setup = function (color, background, divider) {
            if (typeof color === "undefined") { color = this._color; }
            if (typeof background === "undefined") { background = this._background; }
            if (typeof divider === "undefined") { divider = this._divider; }
            this._color = color;
            this._background = background;
            this._divider = divider;
        };

        Console.prototype.log = function (str) {
            this.write(str);
        };

        Console.prototype.info = function (str) {
            this.write(str, 'info', '#c8c8ff', '#0000ff');
        };

        Console.prototype.warn = function (str) {
            this.write(str, 'warn', 'black', '#ffff00');
        };

        Console.prototype.error = function (str) {
            this.write(str, 'error', '#ffc5c5', '#ff0000');
        };

        Console.prototype.divide = function () {
            this.write(this._divider, 'simple');
        };

        Console.prototype.clear = function () {
            console.clear();
        };

        Console.prototype.group = function (name, items) {
            if (!this.enabled)
                return;

            console.group(name);
            for (var i in items) {
                var value = items[i];

                if (typeof items == 'object')
                    value = i + ': ' + items[i];

                this.write(value, 'simple');
            }
            console.groupEnd();
        };

        Console.prototype.write = function (str, type, color, background) {
            if (typeof type === "undefined") { type = 'log'; }
            if (typeof color === "undefined") { color = '#4b729c;'; }
            if (typeof background === "undefined") { background = 'white'; }
            if (!this.enabled)
                return;

            if (type == 'simple')
                console.log('%c%s ', this.getStyle(), str);
            else
                console[type]('%c[%s] %c %s ', 'color:#4b729c;', this.getTimeStamp(), this.getStyle(color, background), str);
        };

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

        Console.prototype.getStyle = function (color, background) {
            if (typeof color === "undefined") { color = this._color; }
            if (typeof background === "undefined") { background = this._background; }
            return 'color:' + color + ';background:' + background + ';';
        };
        return Console;
    })();
    Ridewing.Console = Console;
})(Ridewing || (Ridewing = {}));
