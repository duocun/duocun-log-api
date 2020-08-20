import {cfg} from '../config';

test('database port', () => {
    expect(cfg.DB_PORT).toBe('27017');
});