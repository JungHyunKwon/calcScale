/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function($) {
		'use strict';

		/**
		 * @name 형태얻기
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {string || undefined}
		 */
		function _getType(value) {
			var result;
			
			//매개변수가 있을때
			if(arguments.length) {
				//null일때
				if(value === null) {
					result = 'null';
				
				//undefined일때
				}else if(value === undefined) {
					result = 'undefined';
				}else{
					result = Object.prototype.toString.call(value).toLowerCase().replace('[object ', '').replace(']', '');
					
					//Invalid Date일때
					if(result === 'date' && isNaN(new Date(value))) {
						result = 'Invalid Date';
					
					//숫자일때
					}else if(result === 'number') {
						//NaN일때
						if(isNaN(value)) {
							result = 'NaN';
						
						//Infinity일때
						}else if(!isFinite(value)) {
							result = value.toString();
						}
					}else if(result === 'console') {
						result = 'object';
					}
				}
			}

			return result;
		}

		/**
		 * @name 확대 계산
		 * @since 2018-09-05
		 * @param {number} from
		 * @param {number} to
		 * @return {object}
		 */
		window.calcScale = function(from, to) {
			var result = {
				scale : 1,
				distance : 0
			};
			
			//숫자일때
			if(_getType(from) === 'number' && _getType(to) === 'number') {
				var ratio = from / to;

				//값이 같지 않을때
				if(from !== to) {
					result.scale /= ratio;

					//소수점 2자리 뒤에 자르기
					result.scale = parseFloat(result.scale.toFixed(2), 10);

					//from이 초과일때
					if(from > to) {
						result.distance = -(from - to);
					}else{
						result.distance = to - from;
					}
					
					//소수점 2자리 뒤에 자르기
					result.distance = parseFloat(result.distance.toFixed(2), 10);
				}
			}

			return result;
		};
	})();
}catch(error) {
	console.error(error);
}