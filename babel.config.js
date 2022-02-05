import 'module-alias/register';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          //configura o path da pasta root do projeto
          root: ['./src'],
          extends: ['.ts', '.tsx', '.js', '.json'],
          //configura as extensoes que serao usadas
          alias: {
            //mapeamentos das pastas do src
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
          }
        }
      ]
    ]
  };
};