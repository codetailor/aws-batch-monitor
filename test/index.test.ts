import test from 'tape';
import run from '../src';

test('Test', (t) => {

	const jobQueueName = 'job-queue-name';

	run(jobQueueName)
		.then(res => {
			t.equal(res, jobQueueName, 'Job queue is ' + jobQueueName);

			t.end();
		});
});
