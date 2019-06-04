/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name 숫자 확인
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		function isNumeric(value) {
			return typeof value === 'number' && !isNaN(value) && isFinite(value);
		}

		/**
		 * @name 소수점 절사
		 * @param {number} value
		 * @param {number} decimal
		 * @return {number}
		 * @since 2018-07-13
		 */
		function toFixed(value, decimal) {
			var result = NaN;

			//값이 숫자일 때
			if(isNumeric(value)) {
				result = value;
				
				//소수가 정수일 때
				if(isNumeric(decimal)) {
					var splitValue = value.toString().split('.'),
						firstOfSplitValue = splitValue[1];
					
					//소숫점이 있을 때
					if(firstOfSplitValue) {
						splitValue[1] = firstOfSplitValue.substring(0, decimal);
						result = parseFloat(splitValue.join('.'), 10);
					}
				}
			}

			return result;
		}

		/**
		 * @name calcScale
		 * @since 2018-09-05
		 * @param {number} from
		 * @param {number} to
		 * @return {number}
		 */
		window.calcScale = function(from, to) {
			var result = 0;

			//숫자이면서 0 이상일 때
			if(isNumeric(from) && from >= 0 && isNumeric(to) && to >= 0) {
				result = 1 / (from / to);

				//숫자가 아닐 때
				if(!isNumeric(result)) {
					result = to;
				}

				result = toFixed(result, 2);
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}