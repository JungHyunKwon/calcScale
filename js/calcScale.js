/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
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

		//숫자일 때
		if(isNumeric(value)) {
			result = value;

			//숫자일 때
			if(isNumeric(decimal)) {
				var split = result.toString().split('.'),
					secondSplit = split[1];
				
				//소수점이 있을 때
				if(secondSplit) {
					split[1] = secondSplit.substring(0, decimal);

					result = parseFloat(split.join('.'));
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

		//숫자이면서 -1 보다 클 때
		if(isNumeric(from) && from > -1 && isNumeric(to) && to > -1) {
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