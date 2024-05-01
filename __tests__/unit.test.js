// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('858-123-4567 is a valid phone number', () => {
  expect(isPhoneNumber('858-123-4567')).toBe(true);
});
test('341-752-9247 is a valid phone number', () => {
  expect(isPhoneNumber('341-752-9247')).toBe(true);
});
test('2345678 is not a valid phone number', () => {
  expect(isPhoneNumber('6')).toBe(false);
});
test('11-111-1111 is not a valid phone number', () => {
  expect(isPhoneNumber('11-11-1111')).toBe(false);
});

// isEmail
test('bkmorse@ucsd.edu is a valid email', () => {
  expect(isEmail('bkmorse@ucsd.edu')).toBe(true);
});
test('mohabibi@ucsd.edu is a valid email', () => {
  expect(isEmail('mohabibi@ucsd.edu')).toBe(true);
});
test('a@b is not a valid email', () => {
  expect(isEmail('a@b')).toBe(false);
});
test('test.com is not a valid email', () => {
  expect(isEmail('test.com')).toBe(false);
});

// isStrongPassword
test('StrongPass1 is a valid password', () => {
  expect(isStrongPassword('StrongPass1')).toBe(true);
});
test('weak is a valid password', () => {
    expect(isStrongPassword('weak')).toBe(true);
});
test('1StrongPass is not a valid password', () => {
  expect(isStrongPassword('1StrongPass')).toBe(false);
});
test('WaaaaaaaaaaaaaaaaaaaaaytooLong is not a valid password', () => {
  expect(isStrongPassword('WaaaaaaaaaaaaaaaaaaaaaytooLong')).toBe(false);
});

// isDate
test('01/01/2024 is a valid date', () => {
  expect(isDate('01/01/2024')).toBe(true);
});
test('2/3/1001 is a valid date', () => {
  expect(isDate('2/3/1001')).toBe(true);
});
test('1/1/1 is not a valid date', () => {
  expect(isDate('1/1/1')).toBe(false);
});
test('202/202/2020 is not a valid date', () => {
  expect(isDate('202/202/2020')).toBe(false);
});

// isHexColor
test('#000 is a valid hex color', () => {
  expect(isHexColor('#000')).toBe(true);
});
test('#FFFFFF is a valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('#ZZZ is not a valid hex color', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});
test('#1111 is not a valid hex color', () => {
  expect(isHexColor('#1111')).toBe(false);
});