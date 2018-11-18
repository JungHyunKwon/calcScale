/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function(isNaN, isFinite) {
		'use strict';

		/**
		 * @name calcScale
		 * @since 2018-09-05
		 * @param {number} from
		 * @param {number} to
		 * @return {number}
		 */
		window.calcScale = function(from, to) {
			var result = 1;
			
			//숫자형으로 변환
			from = parseFloat(from, 10);
			to = parseFloat(to, 10);

			//Infinity가 아니면서 0 이상일 때
			if(isFinite(from) && from >= 0 && isFinite(to) && to >= 0) {
				result /= from / to;

				//NaN 또는 Infinity일 때
				if(isNaN(result) || !isFinite(result)) {
					result = to;
				}

				var splitResult = result.toString().split('.'),
					splitResult1 = splitResult[1];
				
				//소수점이 있을 때
				if(splitResult1) {
					splitResult[1] = splitResult1.substring(0, 2);
					result = parseFloat(splitResult.join('.'), 10);
				}
			}

			return result;
		};
	})(window.isNaN, window.isFinite);
}catch(e) {
	console.error(e);
}