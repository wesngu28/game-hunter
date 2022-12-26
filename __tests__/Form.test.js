import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Form from '../components/Form'
// import { fetch } from 'node-fetch';

afterEach(cleanup);

test('the button should render disabled', () => {
  render(<Form />)

  expect(
    screen.getByRole('button', {name: /Submit/i})
  ).toBeDisabled()

})

test('the button should be enabled with text', async () => {

  render(<Form />)

  const textarea = screen.getByRole('textbox', { name: /Enter your Game:/i })
  await userEvent.type(textarea, 'ok')

  expect(
    screen.getByRole('button', {name: /submit/i})
  ).toBeEnabled()

  screen.debug()
})

// const mockFetch = jest.fn();
// global.fetch = mockFetch;

// test('submitting form calls Steam and returns a list of games', async () => {

//   const { getByLabelText, getByText } = render(<Form />);

//   const textarea = getByLabelText(/Enter your Game:/i);

//   const submitButton = getByText(/submit/i);


//   fireEvent.change(textarea, { target: { value: 'Super Auto Pets' } });

//   fireEvent.submit(submitButton);


//   const expectedFetchUrl = `http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=8723D861C9D532EFC172C96105941782&format=json`;

//   expect(mockFetch).toHaveBeenCalledWith(expectedFetchUrl);

// });