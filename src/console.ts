module Ridewing
{
	export class Console {

		public enabled:boolean = true;

		private _color:string = '#4b729c';
		private _background:string = '#fff';
		private _divider:string = '----------------------------------------------------------------';

		public setup(color:string = this._color, background:string = this._background, divider:string = this._divider):void
		{
			this._color 		= color;
			this._background 	= background;
			this._divider 		= divider;
		}

		public log( str:any ):void
		{
			this.write(str);
		}

		public info( str:any ):void
		{
			this.write(str, 'info', '#c8c8ff', '#0000ff');
		}

		public warn( str:any ):void
		{
			this.write(str, 'warn', 'black', '#ffff00');
		}

		public error( str:any ):void
		{
			this.write(str, 'error', '#ffc5c5', '#ff0000');
		}

		public divide():void
		{
			this.write(this._divider, 'simple');
		}

		public clear():void
		{
			console.clear();
		}

		public group(name:string, items:any):void
		{
			if(!this.enabled) return;

			console.group(name);
			for(var i in items)
			{
				var value:string = items[i];

				if(typeof items == 'object')
					value = i + ': ' + items[i];

				this.write(value, 'simple');
			}
			console.groupEnd();
		}

		private write( str:any, type:string = 'log', color:string = '#4b729c;', background:string = 'white' ):void
		{
			if(!this.enabled) return;

			if(type == 'simple')
				console.log('%c%s ', this.getStyle(), str);
			else
				console[type]('%c[%s] %c %s ', 'color:#4b729c;', this.getTimeStamp(), this.getStyle(color, background), str);
		}

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

		public getStyle(color:string = this._color, background:string = this._background):string
		{
			return 'color:'+color+';background:'+background+';'
		}
	}
}