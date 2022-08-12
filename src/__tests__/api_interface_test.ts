import { GetTaskResponse } from '../index';

test('Todo API interface GetTaskResponse', () => {
  const smr = {
    message:"zpráva o stavu",
    data: [
      {
        id: '5555',
        content: 'sqwtrdfdfing',
        finished: 'sfdtrdfindfdfg',
      },
    ],
  };
  const prd: GetTaskResponse = {
    message:"zpráva o stavu",
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
