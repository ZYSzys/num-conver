import test from 'ava';
import execa from 'execa';
import { name, version } from './package';
import numConver from '.';

test('should show help info', async t => {
  const res = await execa('./cli.js');
  t.is(
    res.stdout,
    `${name} ~ ${version}\nNumber conver tools in command line\n  $ conver 10\n  $ conver 101\n  $ conver 1000`
  );
});

test('should conver number', async t => {
  const res = await execa('./cli.js', ['10']);
  t.is(res.code, 0);
});

test('should conver multiple numbers', async t => {
  const res = await execa('./cli.js', [100, 1000]);
  const list = res.stdout.split('\n');
  t.is(list[1], ` { binary: '1100100', decimal: 4 }`);
  t.is(list[3], ` { binary: '1111101000', decimal: 8 }`);
});
