'use strict';

export default function run(jobQueue: string): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve(jobQueue);
		}, 1000);
	});
}
