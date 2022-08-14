import { GetTasksResponse } from '../index';

test('Todo API interface GetTaskResponse', () => {
  const smr = {
    message: 'zpráva o stavu',
    data: [
      {
        id: '5555',
        content: 'sqwtrdfdfing',
        finished: 'sfdtrdfindfdfg',
      },
    ],
  };
  const prd: GetTasksResponse = {
    message: 'zpráva o stavu',
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
