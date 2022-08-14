import { GetTasksResIF } from '../index';

test('Todo API interface GetTaskResponse', () => {
  const smr = {
    message: 'zpráva o stavu',
    data: [
      {
        id: '5555',
        content: 'sqwtrdfdfing',
        finished: 5555,
      },
    ],
  };
  const prd: GetTasksResIF = {
    message: 'zpráva o stavu',
    data: [
      {
        id: '5555',
        content: 'sqwtrdfdfing',
        finished: 5555,
      },
    ],
  };

  expect(smr).toStrictEqual(prd);
});
