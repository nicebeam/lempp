import { getByLabelText, render, screen } from "@testing-library/react";
import Booking from './Booking';
import BookingForm from '../components/BookingForm';

test('Render Booking Heading', () => {
    render(<Booking />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('Render 2 input components', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose Date')).toBeInTheDocument();
  });

test('Renders a submit button', () => {
    render(<BookingForm />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('Available Times', () => {
    render(<BookingForm />);
    const availableTimes = ['20:00', '22:00'];
    expect(availableTimes).toEqual(availableTimes);
  });
