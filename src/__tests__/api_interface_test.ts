import { GetTaskResponse } from '../index';

test('Todo API interface GetTaskResponse', () => {
  const smr = {
    data: [
      {
        id: '5555',
        content: 'sqwtrdfdfing',
        finished: 'sfdtrdfindfdfg',
      },
    ],
  };
  const prd: GetTaskResponse = {
    data: [
      {
        id: '5555',
        content: 'sqwtrdfdfing',
        finished: 'sfdtrdfindfdfg',
      },
    ],
  };

  expect(smr).toStrictEqual(prd);
});
