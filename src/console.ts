module Ridewing
{
	export class Console {

		public enabled:boolean = true;

		private _color:string = '#4b729c';
		private _background:string = '#fff';
		private _divider:string = '----------------------------------------------------------------';

		/**
		 * Setup the default color and background.
		 * @param color
		 * @param background
		 * @param divider
		 */
		public setup(color:string = this._color, background:string = this._background, divider:string = this._divider):void
		{
			this._color 		= color;
			this._background 	= background;
			this._divider 		= divider;
		}

		/**
		 * Standard log function.
		 * @param str
		 */
		public log( str:any ):void
		{
			this.write(str);
		}

		/**
		 * Makes the content text white with a blue background.
		 * @param str
		 */
		public info( str:any ):void
		{
			this.write(str, 'info', '#c8c8ff', '#0000ff');
		}

		/**
		 * Makes the content text black with a yellow background.
		 * @param str
		 */
		public warn( str:any ):void
		{
			this.write(str, 'warn', 'black', '#ffff00');
		}

		/**
		 * Makes the content text white with a red background.
		 * @param str
		 */
		public error( str:any ):void
		{
			this.write(str, 'error', '#ffc5c5', '#ff0000');
		}

		/**
		 * Creates a handy divider for you in the console.
		 */
		public divide():void
		{
			this.write(this._divider, 'simple');
		}

		/**
		 * Clear the console
		 */
		public clear():void
		{
			window.console.clear();
		}

		/**
		 * Create a console group from object or array
		 * @param name
		 * @param items
		 */
		public group(name:string, items:any):void
		{
			if(!this.enabled) return;

			window.console.group(name);
			for(var i in items)
			{
				var value:string = items[i];

				if(typeof items == 'object')
					value = i + ': ' + items[i];

				this.write(value, 'simple');
			}
			window.console.groupEnd();
		}

		/**
		 * Internal log function to do some style and actual console log
		 * @param str
		 * @param type
		 * @param color
		 * @param background
		 */
		private write( str:any, type:string = 'log', color:string = '#4b729c;', background:string = 'white' ):void
		{
			if(!this.enabled) return;

			if(type == 'simple')
				window.console.log('%c%s ', this.getStyle(), str);
			else
				window.console[type]('%c[%s] %c %s ', 'color:#4b729c;', this.getTimeStamp(), this.getStyle(color, background), str);
		}

		/**
		 * Get current timestamp in a nice format
		 * @returns {string}
		 */
		private getTimeStamp():string
		{
			var date:Date = new Date();

			var h:any = date.getHours()
			var m:any = date.getMinutes();
			var s:any = date.getSeconds();

			h = (h < 10)?'0' + h : h;
			m = (m < 10)?'0' + m : m;
			s = (s < 10)?'0' + s : s;

			return h+":"+m+":"+s;
		}

		/**
		 * Generate style string
		 * @param color
		 * @param background
		 * @returns {string}
		 */
		public getStyle(color:string = this._color, background:string = this._background):string
		{
			return 'color:'+color+';background:'+background+';'
		}
	}
}