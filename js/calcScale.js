/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name 확대 계산
		 * @since 2018-09-05
		 * @param {number} from
		 * @param {number} to
		 * @return {number}
		 */
		window.calcScale = function(from, to) {
			var result = 1;
			
			//숫자형 변환
			from = parseFloat(from, 10);
			to = parseFloat(to, 10);

			//from이 0 이상이면서 to가 0 이상일 때
			if(from >= 0 && to >= 0) {
				result /= from / to;

				//NaN 또는 Infinity일 때
				if(!result || result.toString() === 'Infinity') {
					result = to;
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}