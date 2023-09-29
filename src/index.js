import fs from 'fs';
import path from 'path';

const genDiff = (filepath1, filepath2) => {
    const value1 = fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8');

    const value2 = fs.readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8');
    return [JSON.parse(value1), JSON.parse(value2)];
};

export default genDiff;
