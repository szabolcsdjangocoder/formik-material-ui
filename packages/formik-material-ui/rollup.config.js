import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const external = [
  'react',
  'react-native',
  'formik',
  '@mui/material/TextField',
  '@mui/material/Switch',
  '@mui/material/Checkbox',
  '@mui/material/FormControlLabel',
  '@mui/material/Select',
  '@mui/material/FormControl',
  '@mui/material/InputLabel',
  '@mui/material/Input',
  '@mui/material/FormHelperText',
  '@mui/material/RadioGroup',
  '@mui/material/InputBase',
];

export default [
  {
    input: 'src/main.ts',
    plugins: [
      typescript({
        // cacheRoot: `${os.tmpdir}/.rpt2_cache`,
        tsconfig: 'tsconfig.package.json',
      }),
    ],
    external: external.concat(Object.keys(pkg.dependencies || [])),
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
  },
];
