import test from 'ava';
import execa from 'execa';
import { name, version } from './package';
import numConver from '.';

test('should show help info', async t => {
  const res = await execa('./cli.js');
  t.is(
    res.stdout,
    `${name} ~ ${version}\nNumber conver tools in command line\n  $ ${name} 10\n  $ ${name} 101 1000`
  );
});

test('should output error', async t => {
  const res = await execa('./cli.js', ['str']);
  t.is(res.stdout, `str:\n { error: 'Expected a number, got string' }`);
});

test('should conver number', async t => {
  const res = await execa('./cli.js', [100]);
  t.is(res.stdout, `100:\n { binary: '1100100', decimal: 4 }`);
});

test('should conver multiple numbers', async t => {
  const res = await execa('./cli.js', [100, 1000]);
  const list = res.stdout.split('\n');
  t.is(list[1], ` { binary: '1100100', decimal: 4 }`);
  t.is(list[3], ` { binary: '1111101000', decimal: 8 }`);
});
