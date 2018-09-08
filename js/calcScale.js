/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function($) {
		'use strict';

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
			
			//숫자형 변환
			from = parseFloat(from, 10);
			to = parseFloat(to, 10);

			//from이 0이상이면서 to가 0이상일때
			if(from >= 0 && to >= 0) {
				result.scale /= from / to;

				//NaN 또는 Infinity일때
				if(!result.scale || result.scale.toString() === 'Infinity') {
					result.scale = to;
				}

				//from이 초과일때
				if(from > to) {
					result.distance = -(from - to);
				}else{
					result.distance = to - from;
				}
			}

			return result;
		};
	})();
}catch(error) {
	console.error(error);
}