import { readFileSync } from 'fs';
import _ from 'lodash';

const diff = (data1, data2) => {
    const keys = _.union(_.keys(data1), _.keys(data2)).sort();
    const result = [];
    result.push('{');
    keys.map((key) => {
        if (_.has(data1, key) && _.has(data2, key)) {
            if (data1[key] === data2[key]) {
                result.push(`    ${key}: ${data1[key]}`);
            }
        }
        if (_.has(data1, key) && _.has(data2, key)) {
            if (data1[key] !== data2[key]) {
                result.push(`  - ${key}: ${data1[key]}`);
                result.push(`  + ${key}: ${data2[key]}`);
            }
        }
        if (_.has(data1, key) && !_.has(data2, key)) {
            result.push(`  - ${key}: ${data1[key]}`);
        }
        if (!_.has(data1, key) && _.has(data2, key)) {
            result.push(`  + ${key}: ${data2[key]}`);
        }
    });
    result.push('}');
    return result.join('\n');
};

export default diff;
